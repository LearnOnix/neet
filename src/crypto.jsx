export async function generateKeyPair() {
  return crypto.subtle.generateKey(
    { name: "ECDH", namedCurve: "P-256" },
    true,
    ["deriveKey"]
  );
}

export async function exportPublicKey(key) {
  const raw = await crypto.subtle.exportKey("raw", key);
  return btoa(String.fromCharCode(...new Uint8Array(raw)));
}

export async function importPublicKey(b64) {
  const bin = atob(b64);
  const bytes = new Uint8Array([...bin].map(c => c.charCodeAt(0)));
  return crypto.subtle.importKey(
    "raw",
    bytes.buffer,
    { name: "ECDH", namedCurve: "P-256" },
    true,
    []
  );
}

export async function deriveSharedKey(privateKey, otherPublicKey) {
  return crypto.subtle.deriveKey(
    { name: "ECDH", public: otherPublicKey },
    privateKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

export async function encryptMessage(key, text) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const data = new TextEncoder().encode(text);

  const cipher = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    data
  );

  return {
    iv: btoa(String.fromCharCode(...iv)),
    data: btoa(String.fromCharCode(...new Uint8Array(cipher))),
  };
}

export async function decryptMessage(key, payload) {
  const iv = new Uint8Array(atob(payload.iv).split("").map(c => c.charCodeAt(0)));
  const data = new Uint8Array(atob(payload.data).split("").map(c => c.charCodeAt(0)));

  const plain = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    key,
    data
  );

  return new TextDecoder().decode(plain);
}
