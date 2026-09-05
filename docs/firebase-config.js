// Configuração pública do projeto Firebase (MAT01354 — controle de acesso à apostila).
// Este objeto é público por natureza (não é segredo) — a segurança real vem das
// regras do Firestore (docs/firestore.rules.txt), não do sigilo deste arquivo.
// Compartilhado entre docs/index.html e docs/admin.html.

const firebaseConfig = {
  apiKey: "AIzaSyDDRUyrqVKPucq-DRQay9Td4qHyDlCPNUw",
  authDomain: "material-de-apoio-37f72.firebaseapp.com",
  projectId: "material-de-apoio-37f72",
  storageBucket: "material-de-apoio-37f72.firebasestorage.app",
  messagingSenderId: "1033914009625",
  appId: "1:1033914009625:web:0f3a0f1bbf8846df3dc288"
};

// E-mail(s) do(s) administrador(es) — só essa(s) conta(s) Google consegue aprovar/recusar
// pedidos na página admin.html. A restrição de verdade está nas regras do Firestore
// (que checam request.auth.token.email), isto aqui é só pra UI da página admin.
const ADMIN_EMAILS = ["materiaisestudo.apoio@gmail.com"];

// Link da pasta do Google Drive (conta dedicada ao curso) onde a apostila fica.
const DRIVE_FOLDER_URL = "https://drive.google.com/drive/folders/1_SQf0DSlcXqCp1dCxnARTh_1yHsfMAz8?usp=sharing";
