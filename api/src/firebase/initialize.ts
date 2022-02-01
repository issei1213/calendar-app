import admin from 'firebase-admin';
import {
  auth_provider_x509_cert_url,
  auth_uri,
  client_email,
  client_id,
  client_x509_cert_url,
  private_key,
  private_key_id,
  project_id,
  token_uri,
  type,
} from './serviceAccountKey.json';

admin.initializeApp({
  credential: admin.credential.cert({
    type,
    project_id,
    private_key_id,
    private_key,
    client_email,
    client_id,
    auth_uri,
    token_uri,
    auth_provider_x509_cert_url,
    client_x509_cert_url,
  } as admin.ServiceAccount),
});

export const firestore = admin.firestore();
