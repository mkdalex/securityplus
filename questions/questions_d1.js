const Q_D1 = [
 {
  "id": 2,
  "obj": "1.1",
  "type": "cat",
  "domain": 1,
  "badge": "PBQ · Drag & Drop",
  "badgeClass": "drag-b",
  "stem": "A security architect is documenting all controls implemented across the enterprise. Classify each control into its correct category.",
  "items": [
   "Password complexity policy",
   "Security guard at entrance",
   "Intrusion Detection System",
   "Employee security training",
   "Access Control Vestibule / airlock",
   "Encryption at rest",
   "Background check process",
   "Badge access reader"
  ],
  "categories": [
   "Administrative",
   "Technical",
   "Physical"
  ],
  "correctMap": {
   "Administrative": [
    "Password complexity policy",
    "Employee security training",
    "Background check process"
   ],
   "Technical": [
    "Intrusion Detection System",
    "Encryption at rest"
   ],
   "Physical": [
    "Security guard at entrance",
    "Access Control Vestibule / airlock",
    "Badge access reader"
   ]
  },
  "exp": "Administrative controls are policy/procedure/people based: password policies, training programs, and background checks are all documented requirements or processes. Technical (logical) controls use hardware/software: IDS monitors traffic via software, encryption is applied by algorithms. Physical controls protect the tangible environment: security guards, access control vestibules (formerly mantraps), and badge readers all control physical access. Note: badge readers are physical even though they use electronics — the control is physical access restriction, not logical data access."
 },
 {
  "id": 6,
  "obj": "1.1",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A systems administrator notices that after deploying a new group policy, users can no longer install software without administrator approval. The administrator did not intentionally configure this restriction. Which type of security control unintentionally produced this outcome?",
  "opts": [
   "A. Detective",
   "B. Compensating",
   "C. Preventive",
   "D. Corrective"
  ],
  "correct": 2,
  "exp": "A preventive control stops an action before it happens. Even though the result was unintentional, the group policy is preventing software installation — that is preventive control behaviour. Detective controls identify events after they occur (audit logs, IDS alerts). Compensating controls substitute for a primary control that cannot be implemented. Corrective controls restore normal operations after an incident (restoring from backup, patching). Key CompTIA framing: preventive = stops it happening, detective = finds it happened, corrective = fixes what happened."
 },
 {
  "id": 7,
  "obj": "1.2",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An engineer needs to ensure that a script deployed to production servers has not been tampered with since it was approved. Which of the following BEST provides this assurance?",
  "opts": [
   "A. Encrypting the script with AES-256",
   "B. Storing the script in a read-only file share",
   "C. Generating and validating a cryptographic hash of the script",
   "D. Signing the script with a digital certificate"
  ],
  "correct": 2,
  "exp": "A cryptographic hash (SHA-256) of the approved script creates a fixed-length fingerprint. Before execution, the current hash is compared to the stored approved hash — any modification, even a single byte, produces a completely different hash. This provides integrity verification. Encryption (A) provides confidentiality, not integrity verification. A read-only share (B) prevents modification but doesn't detect if it was modified before that restriction was applied. Digital signing (D) is also valid for integrity, but hashing is the most direct, lightweight answer CompTIA expects for script integrity checks."
 },
 {
  "id": 8,
  "obj": "1.2",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company requires that no single employee can both approve a purchase order and also process the payment for that order. Which security principle does this policy implement?",
  "opts": [
   "A. Least privilege",
   "B. Need to know",
   "C. Separation of duties",
   "D. Job rotation"
  ],
  "correct": 2,
  "exp": "Separation of duties (SoD) splits critical tasks across multiple people so no single individual can commit fraud or error without a second person being involved. Approving AND paying is a high-fraud-risk combination — splitting them creates a required collusion scenario. Least privilege limits access to minimum needed permissions. Need to know restricts information access based on whether someone's role requires it. Job rotation moves people between roles periodically to prevent fraud accumulation and cross-train staff — but doesn't split a single transaction across two people the way SoD does."
 },
 {
  "id": 9,
  "obj": "1.1",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst is reviewing authentication logs and notices a user authenticated successfully with a smart card and a PIN. Which authentication factor categories are being combined?",
  "opts": [
   "A. Something you know and something you are",
   "B. Something you have and something you know",
   "C. Something you have and something you are",
   "D. Something you know and something you know"
  ],
  "correct": 1,
  "exp": "Smart card = something you have (a physical token in your possession). PIN = something you know (a memorised secret). Combined = two different factor categories = MFA. Something you are = biometrics (fingerprint, iris, face). Both PIN and password are something you know — combining them is NOT MFA. This is a very common CompTIA question format — know the three categories: Have (tokens, smart cards, phone), Know (passwords, PINs, security questions), Are (biometrics)."
 },
 {
  "id": 10,
  "obj": "1.4",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation wants to implement a PKI solution entirely under its own control, without trusting any external certificate authorities. Internal certificates will be issued to employees and servers. Which PKI model BEST describes this approach?",
  "opts": [
   "A. Public CA using WebTrust-audited certificates",
   "B. Self-signed certificates on each individual server",
   "C. Private/internal PKI with an organisation-owned root CA",
   "D. Cross-certification with a government bridge CA"
  ],
  "correct": 2,
  "exp": "A private/internal PKI means the organisation operates its own root CA and subordinate CAs. All certificates are issued under this internal hierarchy — completely under organisational control with no external dependency. Public CAs (A) are trusted by default in browsers/OS but involve external parties. Self-signed certs (B) are not issued by a CA at all — each certificate has no chain of trust, causing browser warnings. Cross-certification (D) links different PKI hierarchies for inter-organisation trust — still involves external parties. Internal PKI = full control, suitable for internal services and employee certificates."
 },
 {
  "id": 11,
  "obj": "1.4",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A developer stores user passwords by running them through SHA-256 and saving the output. A security review finds that two users with the same password have identical stored hashes. Which cryptographic technique was omitted that would have prevented this?",
  "opts": [
   "A. Key stretching using PBKDF2",
   "B. Adding a unique random salt before hashing",
   "C. Using asymmetric encryption instead",
   "D. Applying HMAC to the password"
  ],
  "correct": 1,
  "exp": "A salt is a unique random value added to each password before hashing. Even if two users have identical passwords, their salts differ, producing different stored hashes. This defeats rainbow tables and precomputed lookup attacks. The identical hashes in this scenario prove no salt was used. Key stretching (A) makes hashing computationally expensive (PBKDF2, bcrypt, Argon2) but doesn't solve the identical hash problem on its own without salting. Asymmetric encryption (C) isn't appropriate for password storage. HMAC (D) adds a secret key to a hash but doesn't solve the collision problem for password storage."
 },
 {
  "id": 12,
  "obj": "1.3",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A web server certificate is showing as untrusted in users' browsers even though it was issued by a legitimate intermediate CA. Investigation shows the server is only sending its own certificate and not the intermediate CA certificate. What is the underlying issue?",
  "opts": [
   "A. The certificate has expired",
   "B. The certificate chain is incomplete — intermediate certificate not served",
   "C. The root CA has been revoked",
   "D. The certificate uses a weak signature algorithm"
  ],
  "correct": 1,
  "exp": "TLS certificate chains work like this: Browser → Server Cert → Intermediate CA → Root CA. Browsers trust Root CAs (stored in OS/browser trust store) but do NOT automatically know intermediate CAs. The server must send the full chain (server cert + any intermediate certs) so the browser can build the trust path. If the intermediate cert is missing, the browser cannot verify the chain to a trusted root and shows an \"untrusted\" error. This is one of the most common real-world TLS misconfiguration issues. Expired cert (A) would show a different error. Root CA revocation (C) would affect all certs under it, not just this one server."
 },
 {
  "id": 13,
  "obj": "1.4",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation deploys a solution where a hardware device generates and stores cryptographic keys and performs cryptographic operations internally, ensuring private keys never leave the device in plaintext — even to administrators. Which technology is this?",
  "opts": [
   "A. Trusted Platform Module (TPM)",
   "B. Hardware Security Module (HSM)",
   "C. Secure Enclave",
   "D. Key Management Service (KMS)"
  ],
  "correct": 1,
  "exp": "An HSM is a dedicated hardware device designed specifically for cryptographic key management and operations. Its defining characteristic: private keys are generated inside and never exported in plaintext — all crypto operations happen inside the hardware. Used for PKI root CAs, payment processing (PCI-DSS), code signing. A TPM is a chip embedded in a motherboard for platform integrity and local key binding — not a standalone cryptographic service device. Secure Enclave is Apple's implementation of a similar concept in mobile chips. A KMS is software-based key management (e.g., AWS KMS) — may use HSMs internally but is not itself an HSM."
 },
 {
  "id": 14,
  "obj": "1.2",
  "type": "multi",
  "domain": 1,
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "A security architect is implementing Zero Trust architecture. Which TWO principles are CORE to Zero Trust?",
  "opts": [
   "A. Trust all traffic originating from inside the corporate network perimeter",
   "B. Verify every access request explicitly, regardless of network location",
   "C. Grant permanent access once identity is initially verified",
   "D. Apply least privilege access and just-in-time provisioning",
   "E. Block all cloud service access by default"
  ],
  "correct": [
   1,
   3
  ],
  "exp": "Zero Trust is built on: (B) Verify explicitly — every access request is authenticated and authorised every time, regardless of whether the user is on-premises or remote. Location inside the corporate network grants zero implicit trust. (D) Least privilege / just-in-time — grant minimum required permissions for only as long as needed; revoke immediately. The three Zero Trust principles are: Verify explicitly, Use least privilege access, Assume breach. Trusting internal traffic (A) is the old perimeter model Zero Trust replaces. Permanent access after initial verification (C) contradicts Zero Trust. Blocking all cloud (E) is not a Zero Trust principle."
 },
 {
  "id": 15,
  "obj": "1.4",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security team is evaluating a new cryptographic algorithm for encrypting sensitive database records. The algorithm uses the same key for both encryption and decryption. Which type of cryptography is this, and what is a key distribution challenge it presents?",
  "opts": [
   "A. Asymmetric — the public key must be kept secret",
   "B. Symmetric — securely sharing the key with authorised parties is difficult",
   "C. Hashing — the algorithm is irreversible by design",
   "D. Asymmetric — it is too slow for bulk data encryption"
  ],
  "correct": 1,
  "exp": "Symmetric encryption uses one shared key for both encryption and decryption (AES, 3DES, ChaCha20). The key distribution problem: how do two parties securely share the key without it being intercepted? If the key is compromised, all data encrypted with it is exposed. This is why TLS uses asymmetric encryption (RSA/ECDH) for key exchange, then switches to symmetric (AES) for bulk data — getting the best of both. Asymmetric encryption uses key pairs (public + private). Hashing is one-way with no key for decryption. Option D describes asymmetric correctly but applies it to the wrong question."
 },
 {
  "id": 16,
  "obj": "1.2",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company implements a policy where users are automatically logged out after 10 minutes of inactivity and must re-authenticate. Which security concept does this PRIMARILY address?",
  "opts": [
   "A. Non-repudiation",
   "B. Confidentiality of data at rest",
   "C. Session management and reducing risk from unattended sessions",
   "D. Integrity of authentication tokens"
  ],
  "correct": 2,
  "exp": "Automatic session timeout addresses session management — specifically the risk of an unattended, authenticated session being exploited (shoulder surfing, physical access to an unlocked machine). By forcing re-authentication after inactivity, the system limits the window of opportunity for unauthorised use. Non-repudiation proves an action was taken by a specific user. Confidentiality of data at rest concerns encryption of stored data. Token integrity is about preventing tampering. Session timeout is a direct countermeasure to the unattended workstation risk — this is CompTIA's framing in the security operations and access control context."
 },
 {
  "id": 48,
  "obj": "1.3",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "During a security architecture review, an engineer notes that the organisation has no formal process for reviewing or approving changes to production systems before they are implemented. A recent outage was caused by an unreviewed configuration change. Which process addresses this gap?",
  "opts": [
   "A. Incident response planning",
   "B. Change management",
   "C. Business continuity planning",
   "D. Configuration baseline auditing"
  ],
  "correct": 1,
  "exp": "Change management is the formal process for requesting, reviewing, approving, testing, and documenting changes to IT systems before implementation. It prevents unreviewed changes from causing outages or introducing security vulnerabilities. A Change Advisory Board (CAB) reviews proposed changes. Change management is listed under Objective 1.3 in SY0-701."
 },
 {
  "id": 122,
  "obj": "1.2",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation's security team notices that the same administrator account is used to both deploy new firewall rules AND sign off on the change approval. This creates a risk that unauthorised changes could be made without independent review. Which control would BEST address this?",
  "opts": [
   "A. Implement multi-factor authentication for the admin account",
   "B. Enforce separation of duties — separate the deployment role from the approval role",
   "C. Enable detailed audit logging on the firewall",
   "D. Require the administrator to document all changes after implementation"
  ],
  "correct": 1,
  "exp": "Separation of duties (SoD) requires that critical functions be divided between different people so no single person can complete a high-risk process without another person's involvement. Deploying + approving own changes removes the independent review that catches errors and fraud."
 },
 {
  "id": 128,
  "type": "mcq",
  "domain": 1,
  "obj": "1.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company installs security cameras throughout its office building and posts signs stating \"Premises under 24-hour surveillance.\" Even though the cameras are not always actively monitored, incidents have decreased. Which control type does the signage PRIMARILY represent?",
  "opts": [
   "A. Preventive",
   "B. Detective",
   "C. Deterrent",
   "D. Compensating"
  ],
  "correct": 2,
  "exp": "A deterrent control discourages threat actors from attempting an attack — not by physically stopping them, but by making the risk of detection or punishment feel high. Signs warning of surveillance deter bad behaviour without technically preventing it. The cameras themselves are detective (they record/identify). A preventive control stops an action. A compensating control substitutes for a primary control. CompTIA added \"Deterrent\" as a distinct control type in SY0-701 — previously it was often grouped under preventive. Know all six: Preventive, Detective, Corrective, Compensating, Deterrent, Directive."
 },
 {
  "id": 129,
  "type": "mcq",
  "domain": 1,
  "obj": "1.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "After a malware infection encrypted files on a server, the IT team restores the server from a clean backup and applies the missing patches. Which control type does restoring from backup represent?",
  "opts": [
   "A. Preventive",
   "B. Detective",
   "C. Deterrent",
   "D. Corrective"
  ],
  "correct": 3,
  "exp": "A corrective control restores systems to normal operation after an incident has occurred. Restoring from backup is the textbook corrective control — it fixes the damage caused. Patching afterwards is also corrective (fixing the vulnerability that was exploited). Preventive controls stop incidents before they happen. Detective controls identify that an incident occurred (AV alert, SIEM rule). Deterrent controls discourage attacks. The distinction: corrective = after the fact, fixing the damage. Security controls can also be: physical, administrative, or technical — these are categories, not types."
 },
 {
  "id": 130,
  "type": "mcq",
  "domain": 1,
  "obj": "1.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company implements a Zero Trust architecture. A user authenticates successfully from the corporate office and is granted access to a file share. An hour later, the same user tries to access a different application from the same device. Under Zero Trust, what happens?",
  "opts": [
   "A. Access is granted automatically — the user already authenticated this session",
   "B. Access is evaluated again — each resource access requires independent verification",
   "C. Access is denied — Zero Trust blocks all lateral movement",
   "D. The user must re-enter their password only"
  ],
  "correct": 1,
  "exp": "\"Never trust, always verify\" means every access request to every resource is evaluated independently, regardless of previous successful authentications in the same session. Zero Trust does not grant implicit trust based on prior authentication, network location, or device. Each resource access triggers policy evaluation: who is the user, what is their device posture, what resource are they requesting, from where, at what time? This is implemented via a Policy Engine and Policy Enforcement Points. Zero Trust doesn't block all movement — it evaluates and permits legitimate, verified requests. The key: no implicit, persistent trust."
 },
 {
  "id": 131,
  "type": "mcq",
  "domain": 1,
  "obj": "1.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company deploys fake SSH credentials on several servers. The credentials are not used by any legitimate process. When the credentials are used in an authentication attempt, the security team receives an immediate alert. Which deception technology is this?",
  "opts": [
   "A. Honeypot",
   "B. Honeynet",
   "C. Honeytoken",
   "D. Honeyfile"
  ],
  "correct": 2,
  "exp": "A honeytoken is a fake digital artefact (credential, API key, file, database record) designed to detect unauthorised access or credential theft. When the token is used, it proves it was stolen and is being exploited. Honeytokens can be: fake credentials, fake email addresses in databases (to detect data theft), fake AWS API keys, or fake database records. A honeypot is a decoy system. A honeynet is a network of honeypots. A honeyfile is a fake file that triggers an alert when opened or accessed. All are deception technologies — honeytokens are specifically fake data/credentials rather than fake systems."
 },
 {
  "id": 132,
  "type": "mcq",
  "domain": 1,
  "obj": "1.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security team needs to encrypt large volumes of backup data efficiently. They also need to share encrypted files with external partners securely. Which approach BEST balances performance and secure key exchange?",
  "opts": [
   "A. Use asymmetric encryption (RSA-4096) for all data — maximum security",
   "B. Use symmetric encryption (AES-256) for data, asymmetric encryption to securely exchange the symmetric key",
   "C. Use hashing (SHA-256) to encrypt the backups",
   "D. Use the same symmetric key permanently to avoid key management overhead"
  ],
  "correct": 1,
  "exp": "Hybrid encryption combines the best of both: symmetric encryption (AES-256) is fast and efficient for bulk data. Asymmetric encryption (RSA) is used only to encrypt and securely transmit the symmetric key to the recipient. This is exactly how TLS and PGP work. RSA-4096 for all data (A) is ~1000x slower than AES — impractical for large volumes. SHA-256 (C) is a hash function — it's one-way and cannot be decrypted, so it's not encryption. Using the same key permanently (D) means a single key compromise exposes all data ever encrypted with it. Hybrid = symmetric for data, asymmetric for key exchange."
 },
 {
  "id": 133,
  "type": "mcq",
  "domain": 1,
  "obj": "1.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A web developer implements a password reset feature. When a user submits their email, the system checks if it matches an account. If it does, the response takes 2 seconds. If no account exists, the response returns instantly. A security researcher flags this as a vulnerability. What is the issue?",
  "opts": [
   "A. The reset link is sent over HTTP instead of HTTPS",
   "B. A timing attack can enumerate valid email addresses based on response time differences",
   "C. The password reset token is not cryptographically random",
   "D. The feature allows unlimited reset attempts without rate limiting"
  ],
  "correct": 1,
  "exp": "A timing side-channel attack exploits measurable differences in response time to infer information. Here, an attacker can determine whether an email address has a registered account by measuring response time — 2 seconds = account exists, instant = no account. This enables account enumeration — building a list of valid email addresses for targeted attacks. The fix: add a constant artificial delay so both code paths take the same time, or always show the same generic message regardless of whether the account exists. This is a subtle but real vulnerability that appears in security assessments."
 },
 {
  "id": 134,
  "type": "mcq",
  "domain": 1,
  "obj": "1.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation needs to verify that a file downloaded from a vendor website has not been modified or corrupted during transmission. The vendor publishes a SHA-256 hash alongside each download. What should the user do after downloading?",
  "opts": [
   "A. Encrypt the file with the hash as the key",
   "B. Generate a SHA-256 hash of the downloaded file and compare it to the published hash",
   "C. Upload the file to a virus scanner",
   "D. Verify the hash was signed with the vendor's private key"
  ],
  "correct": 1,
  "exp": "SHA-256 is a cryptographic hash function that produces a fixed 256-bit fingerprint of any input. If the file is identical to the original, the hash will be identical. If even one byte changed (corruption, tampering), the hash completely changes. The user generates the hash of their downloaded file and compares it character-by-character to the published hash. This verifies integrity — the file hasn't been modified. This doesn't verify authenticity (that it's from the real vendor) — that requires a digital signature. Hashing = integrity verification. Signatures = authenticity + integrity."
 },
 {
  "id": 171,
  "type": "mcq",
  "domain": 1,
  "obj": "1.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation implements a policy requiring that all privileged actions on production systems are performed through a Privileged Access Workstation (PAW) — a dedicated, hardened device used only for admin tasks. Regular browsing, email, and general work are done from a separate standard workstation. Which security principle does the PAW implement?",
  "opts": [
   "A. Separation of duties",
   "B. Privileged access isolation — reducing the attack surface for credential theft",
   "C. Mandatory access control",
   "D. Physical security"
  ],
  "correct": 1,
  "exp": "A Privileged Access Workstation (PAW) isolates privileged credentials and admin sessions from general-purpose computing. If a standard workstation is compromised via phishing or malware, the attacker cannot capture privileged credentials because those credentials are never used on the standard machine. The PAW has restricted internet access, no email, no office applications — its only function is admin work. This dramatically reduces the attack surface for credential theft. Separation of duties splits tasks between people. MAC uses classification labels. Physical security is the building/device protection layer. PAW = credential isolation and privileged access hygiene."
 },
 {
  "id": 176,
  "type": "mcq",
  "domain": 1,
  "obj": "1.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security engineer reviews a TLS certificate and notices the Subject Alternative Name (SAN) field contains: DNS:www.company.com, DNS:company.com, DNS:mail.company.com. What is the purpose of the SAN field?",
  "opts": [
   "A. It lists the certificate's encryption algorithm and key length",
   "B. It specifies all domain names the certificate is valid for — allowing one certificate to cover multiple domains or subdomains",
   "C. It contains the certificate's serial number and validity dates",
   "D. It identifies the Certificate Authority that issued the certificate"
  ],
  "correct": 1,
  "exp": "The Subject Alternative Name (SAN) extension allows a single X.509 certificate to cover multiple domain names. This replaced the older Common Name (CN) field for domain validation. A SAN certificate (also called a multi-domain or UCC certificate) is more flexible and cost-effective than separate certificates per domain. Wildcard certificates (*.company.com) cover all subdomains of one level. The exam may ask you to distinguish: SAN = specific named domains, Wildcard = all subdomains of a pattern. The key field: DNS entries in SAN define what domains the certificate is valid for. Browsers check the SAN field when validating HTTPS certificates."
 },
 {
  "id": 181,
  "type": "mcq",
  "domain": 1,
  "obj": "1.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A hospital installs a new badge reader system at the entrance to its data center. Only employees with the correct access level can unlock the door. Which control category and control type BEST describe this measure?",
  "opts": [
   "A. Technical control — preventive",
   "B. Physical control — preventive",
   "C. Operational control — detective",
   "D. Managerial control — directive"
  ],
  "correct": 1,
  "exp": "A badge reader is a physical control because it restricts physical entry to a facility or room. It is preventive because it stops unauthorized individuals from entering before they gain access. Technical (A) controls are software/hardware-based logical controls such as firewalls or encryption. Operational/detective (C) would be something like reviewing access logs after the fact. Managerial/directive (D) would be a written policy stating who is allowed in the data center — the badge reader enforces that policy physically."
 },
 {
  "id": 182,
  "type": "mcq",
  "domain": 1,
  "obj": "1.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "After a security breach, a company hires additional staff to manually review firewall logs every four hours. This is an example of which type of security control?",
  "opts": [
   "A. Technical — detective",
   "B. Operational — detective",
   "C. Physical — corrective",
   "D. Managerial — compensating"
  ],
  "correct": 1,
  "exp": "Having personnel manually review logs is an operational control because it relies on people performing a process. It is detective because the purpose is to identify suspicious activity that has already occurred or is occurring. Technical/detective (A) would be an automated IDS. Physical/corrective (C) would be repairing a broken fence. Managerial/compensating (D) would be a policy that provides an alternative safeguard when the primary control cannot be implemented."
 },
 {
  "id": 183,
  "type": "mcq",
  "domain": 1,
  "obj": "1.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company cannot afford to deploy full disk encryption on legacy laptops. Instead, it requires those laptops to remain in a locked office at all times and prohibits them from connecting to external networks. What type of control is this?",
  "opts": [
   "A. Corrective",
   "B. Deterrent",
   "C. Compensating",
   "D. Directive"
  ],
  "correct": 2,
  "exp": "A compensating control is an alternative measure put in place when the primary or preferred control cannot be implemented. The company cannot deploy encryption (the preferred technical control), so it substitutes physical and policy restrictions to reduce the same risk. Corrective (A) controls fix issues after an incident (e.g., restoring from backup). Deterrent (B) controls discourage threat actors (e.g., warning banners). Directive (D) controls tell people what to do through policy (e.g., an AUP) — while part of this scenario involves policy, the overall strategy of substituting one control for another defines it as compensating."
 },
 {
  "id": 184,
  "type": "mcq",
  "domain": 1,
  "obj": "1.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A financial institution displays a large sign at its entrance stating: \"All activities are monitored and recorded. Unauthorized access will be prosecuted.\" Which control type does this sign BEST represent?",
  "opts": [
   "A. Preventive",
   "B. Corrective",
   "C. Deterrent",
   "D. Detective"
  ],
  "correct": 2,
  "exp": "A warning sign is a deterrent control — its purpose is to discourage malicious activity by making potential attackers aware of consequences. Preventive (A) controls actively block actions (e.g., a locked door). Corrective (B) controls fix problems after they occur (e.g., applying a patch after exploitation). Detective (D) controls identify incidents (e.g., security cameras recording footage). The sign itself does not prevent, detect, or correct — it deters."
 },
 {
  "id": 185,
  "type": "mcq",
  "domain": 1,
  "obj": "1.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Following a ransomware attack, the IT team restores affected servers from clean backups and patches the vulnerability that was exploited. These recovery actions represent which type of control?",
  "opts": [
   "A. Deterrent",
   "B. Preventive",
   "C. Corrective",
   "D. Compensating"
  ],
  "correct": 2,
  "exp": "Corrective controls are applied after an incident to restore systems to a secure state and remediate the damage. Restoring from backups and patching the exploited vulnerability are textbook corrective actions. Deterrent (A) controls discourage attacks before they happen. Preventive (B) controls block attacks from succeeding. Compensating (D) controls substitute for primary controls that cannot be implemented. The key distinction: corrective controls act AFTER the incident to fix and recover."
 },
 {
  "id": 186,
  "type": "mcq",
  "domain": 1,
  "obj": "1.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company's CISO authors a new Acceptable Use Policy (AUP) that defines how employees are permitted to use corporate IT resources. This AUP is BEST classified as which control category and type?",
  "opts": [
   "A. Technical — preventive",
   "B. Operational — detective",
   "C. Managerial — directive",
   "D. Physical — deterrent"
  ],
  "correct": 2,
  "exp": "An Acceptable Use Policy is a managerial (administrative) control because it is a documented policy created by management. It is directive because it tells employees what they must and must not do with corporate resources. Technical/preventive (A) would be a firewall rule. Operational/detective (B) would be log monitoring by staff. Physical/deterrent (D) would be warning signage. Policies, standards, guidelines, and procedures are managerial controls. When they prescribe required behavior, they are directive."
 },
 {
  "id": 187,
  "type": "multi",
  "domain": 1,
  "obj": "1.1",
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "A security architect is classifying controls implemented at a new branch office. Which TWO of the following are examples of physical security controls?",
  "opts": [
   "A. Firewall rule blocking inbound SMB traffic",
   "B. Bollards installed in front of the building entrance",
   "C. Security awareness training for new hires",
   "D. Motion-activated floodlights in the parking lot",
   "E. Data Loss Prevention software on endpoints"
  ],
  "correct": [
   1,
   3
  ],
  "exp": "Bollards (B) are physical barriers (concrete or steel posts) that prevent vehicles from ramming into a building — a physical control. Motion-activated floodlights (D) are physical controls that deter and detect intrusion by illuminating areas when movement is detected. A firewall rule (A) is a technical control. Security awareness training (C) is an operational (or managerial) control. DLP software (E) is a technical control. Physical controls protect the tangible environment — buildings, rooms, and physical assets."
 },
 {
  "id": 188,
  "type": "mcq",
  "domain": 1,
  "obj": "1.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst discovers that an attacker modified patient records in a healthcare database without authorization. The records now contain incorrect medication dosages. Which element of the CIA triad has been PRIMARILY violated?",
  "opts": [
   "A. Confidentiality",
   "B. Integrity",
   "C. Availability",
   "D. Non-repudiation"
  ],
  "correct": 1,
  "exp": "Integrity ensures that data is accurate, complete, and has not been modified by unauthorized parties. Changing medication dosages without authorization is a direct violation of integrity. Confidentiality (A) concerns unauthorized disclosure of information — the attacker modified data, not viewed it. Availability (C) concerns whether systems and data are accessible when needed — the database is still available. Non-repudiation (D) ensures that actions can be attributed to a specific individual — it is not a CIA triad element (it is a separate security concept)."
 },
 {
  "id": 189,
  "type": "mcq",
  "domain": 1,
  "obj": "1.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company requires employees to digitally sign all outbound contracts using their private key. A dispute arises where a sales manager claims they never approved a specific contract. The company produces the digital signature and certificate logs. Which security concept MOST directly resolves this dispute?",
  "opts": [
   "A. Confidentiality",
   "B. Authentication",
   "C. Non-repudiation",
   "D. Authorization"
  ],
  "correct": 2,
  "exp": "Non-repudiation ensures that a party cannot deny having performed an action. Digital signatures provide non-repudiation because: (1) only the private key holder can create the signature, (2) anyone can verify it with the corresponding public key, (3) the signature is mathematically bound to the document. The sales manager cannot credibly deny signing the contract if the digital signature validates. Confidentiality (A) protects data from unauthorized disclosure. Authentication (B) verifies identity at login. Authorization (D) determines what a user is allowed to do. Non-repudiation goes beyond authentication — it provides undeniable proof of an action."
 },
 {
  "id": 190,
  "type": "mcq",
  "domain": 1,
  "obj": "1.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company's authentication system verifies a user's identity with a password, checks their group membership to determine resource access, and logs all file access events. Which AAA components are demonstrated in this scenario, in order?",
  "opts": [
   "A. Authorization, Authentication, Accounting",
   "B. Authentication, Accounting, Authorization",
   "C. Authentication, Authorization, Accounting",
   "D. Accounting, Authorization, Authentication"
  ],
  "correct": 2,
  "exp": "The AAA framework operates in order: Authentication (verifying identity — the password check), Authorization (determining access rights — checking group membership), Accounting (recording activity — logging file access). This order is logical: you must first prove who you are, then the system determines what you can do, and then it records what you did. All three elements work together to provide comprehensive access control and auditability."
 },
 {
  "id": 191,
  "type": "mcq",
  "domain": 1,
  "obj": "1.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security team conducts a gap analysis comparing their current security posture against the NIST Cybersecurity Framework. They identify that while they have strong preventive controls, their incident detection capabilities are minimal. What is the PRIMARY purpose of this gap analysis?",
  "opts": [
   "A. To satisfy regulatory compliance requirements immediately",
   "B. To identify discrepancies between the current state and a desired security baseline",
   "C. To eliminate all security vulnerabilities in the environment",
   "D. To replace the existing security framework with a new one"
  ],
  "correct": 1,
  "exp": "A gap analysis compares the current state of security controls and practices against a desired state (framework, standard, or baseline) to identify where deficiencies exist. Finding that detection is weak while prevention is strong is exactly the type of gap a gap analysis reveals, enabling prioritized remediation. It does not automatically satisfy compliance (A) — it identifies what needs to be done. It cannot eliminate all vulnerabilities (C) — that is unrealistic. It does not replace frameworks (D) — it measures alignment with them. Gap analysis is a foundational step in security program maturity improvement."
 },
 {
  "id": 192,
  "type": "mcq",
  "domain": 1,
  "obj": "1.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company is implementing Zero Trust architecture. A remote employee authenticates via MFA and connects to the VPN. Under Zero Trust principles, what happens when the employee attempts to access an internal finance application?",
  "opts": [
   "A. Access is automatically granted because the VPN provides a trusted network connection",
   "B. Access is granted based on the initial MFA authentication — no further verification needed",
   "C. The access request is evaluated independently with additional context such as device posture, user role, and behavior analytics",
   "D. Access is denied because VPN connections are not compatible with Zero Trust"
  ],
  "correct": 2,
  "exp": "Zero Trust's core principle is \"never trust, always verify.\" Even after VPN connection and MFA, each resource access request must be independently evaluated. Factors include: device health/posture, user role and least privilege, time of access, behavioral analytics, and the sensitivity of the requested resource. VPN providing implicit trust (A) is the old perimeter model that Zero Trust replaces. Relying solely on initial MFA (B) violates continuous verification. VPNs can coexist with Zero Trust (D) — the key is that VPN connectivity alone does not grant resource access."
 },
 {
  "id": 193,
  "type": "mcq",
  "domain": 1,
  "obj": "1.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A government facility requires visitors to pass through two interlocking doors where the first door must close and lock before the second door opens. A security guard verifies identity between the doors. What is this physical security control called?",
  "opts": [
   "A. Bollard system",
   "B. Faraday cage",
   "C. Access control vestibule",
   "D. Security operations center"
  ],
  "correct": 2,
  "exp": "An access control vestibule (formerly called a mantrap) consists of two interlocking doors that create a buffer zone. The first door must close before the second opens, preventing tailgating and piggybacking. A guard or automated system verifies credentials in the vestibule. Bollards (A) are posts that block vehicle access. A Faraday cage (B) is a shielded enclosure that blocks electromagnetic signals. A security operations center (D) is a facility where security analysts monitor and respond to threats. Access control vestibules are a critical physical security measure for high-security facilities."
 },
 {
  "id": 194,
  "type": "mcq",
  "domain": 1,
  "obj": "1.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security team deploys a system on the network that mimics a vulnerable web server with fake customer data. The system has no legitimate business purpose — any interaction with it is suspicious. What is this deception technology called?",
  "opts": [
   "A. Honeyfile",
   "B. Honeytoken",
   "C. Honeypot",
   "D. Honeynet"
  ],
  "correct": 2,
  "exp": "A honeypot is a decoy system designed to attract and detect attackers. It has no production value, so any interaction indicates reconnaissance or attack activity. The fake web server with fake data matches the honeypot definition perfectly. A honeyfile (A) is a single decoy file (e.g., a fake \"passwords.xlsx\") placed to detect unauthorized file access. A honeytoken (B) is a piece of decoy data (e.g., a fake credential, API key, or database record) designed to trigger an alert if used. A honeynet (D) is an entire network of honeypots simulating a real network environment — more complex than a single system."
 },
 {
  "id": 195,
  "type": "mcq",
  "domain": 1,
  "obj": "1.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security engineer inserts a fake database record containing a fictitious Social Security number into a production database. An alert is configured to trigger if this specific record is ever queried or exfiltrated. What type of deception technology is this?",
  "opts": [
   "A. Honeypot",
   "B. Honeynet",
   "C. Honeytoken",
   "D. Honeyfile"
  ],
  "correct": 2,
  "exp": "A honeytoken is a piece of fake data (a record, credential, API key, email address, or similar) planted within legitimate data stores. Any access to or use of the honeytoken indicates unauthorized activity, since no legitimate process should ever touch it. This differs from a honeypot (A), which is an entire decoy system. A honeynet (B) is a network of honeypots. A honeyfile (D) is a decoy file (like a fake spreadsheet). The key distinction: a honeytoken is data-level deception embedded within real systems, not a standalone system or file."
 },
 {
  "id": 196,
  "type": "mcq",
  "domain": 1,
  "obj": "1.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A facility manager installs infrared motion sensors, pressure mats under floor tiles, and microwave detection units around the perimeter of a secure building. These sensors are PRIMARILY classified as which type of physical security control?",
  "opts": [
   "A. Preventive — they block unauthorized entry",
   "B. Detective — they identify and alert on unauthorized physical presence",
   "C. Deterrent — they discourage attackers from approaching",
   "D. Corrective — they automatically respond to and neutralize threats"
  ],
  "correct": 1,
  "exp": "Physical sensors (infrared, pressure, microwave) are detective controls — they detect movement or presence and generate alerts for security personnel to investigate. They do not physically prevent entry (A) like a locked door or bollard. While their visible presence might have a minor deterrent effect (C), their primary function is detection. They do not correct or remediate situations (D). Detective physical controls are a critical layer in defense-in-depth: even if preventive controls fail, sensors detect the intrusion and enable rapid response."
 },
 {
  "id": 197,
  "type": "mcq",
  "domain": 1,
  "obj": "1.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A developer wants to push a critical security patch to production immediately. The change management board denies the emergency change request because no rollback plan was documented. Which change management principle does the board's decision BEST reflect?",
  "opts": [
   "A. Scheduled maintenance windows must always be used",
   "B. All changes must include documented backout/rollback procedures",
   "C. Only the CISO can approve emergency changes",
   "D. Security patches are exempt from change management"
  ],
  "correct": 1,
  "exp": "A fundamental change management principle is that every change — even emergency changes — must have a documented rollback/backout plan in case the change causes unexpected issues. Without a rollback plan, a failed patch could leave production systems in an unknown or broken state. Scheduled maintenance windows (A) are preferred but emergency changes can bypass them with proper approval. CISOs (C) do not exclusively approve changes — a Change Advisory Board (CAB) typically does. Security patches (D) are NOT exempt from change management — they follow an expedited but still controlled process."
 },
 {
  "id": 198,
  "type": "mcq",
  "domain": 1,
  "obj": "1.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Before deploying a new email gateway, the IT team maps all systems that send email through the current gateway, including the CRM, ticketing system, and marketing automation platform. This exercise is BEST described as:",
  "opts": [
   "A. Vulnerability scanning",
   "B. Dependency mapping",
   "C. Penetration testing",
   "D. Risk assessment"
  ],
  "correct": 1,
  "exp": "Dependency mapping identifies all systems, services, and applications that rely on or interact with a given component. Before changing or replacing the email gateway, the team must understand what depends on it to avoid breaking downstream services. Vulnerability scanning (A) identifies security weaknesses in systems. Penetration testing (C) simulates attacks to test defenses. Risk assessment (D) evaluates likelihood and impact of threats. Dependency mapping is a critical step in change management because it reveals the blast radius of a change and informs the impact assessment."
 },
 {
  "id": 199,
  "type": "mcq",
  "domain": 1,
  "obj": "1.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company maintains all infrastructure-as-code configurations in a Git repository. Each change requires a pull request, peer review, and automated testing before merging. Which change management concept does this practice BEST demonstrate?",
  "opts": [
   "A. Separation of duties",
   "B. Version control as part of change documentation",
   "C. Incident response automation",
   "D. Business continuity planning"
  ],
  "correct": 1,
  "exp": "Using a Git repository with pull requests, peer review, and automated testing is version control integrated into the change management process. Git provides: a complete history of all changes (who changed what, when), the ability to revert to any previous state, peer review via pull requests, and automated validation. This is change documentation through version control. Separation of duties (A) prevents one person from completing a critical task alone — while peer review supports this, the scenario emphasizes the version control process. Incident response (C) and BCP (D) are unrelated to this scenario."
 },
 {
  "id": 200,
  "type": "multi",
  "domain": 1,
  "obj": "1.3",
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "A company is evaluating the technical implications of migrating its on-premises Active Directory to a cloud-based identity provider. Which TWO technical concerns should the change management process address?",
  "opts": [
   "A. The marketing department's budget for the next fiscal year",
   "B. Legacy applications that authenticate via LDAP may not support modern protocols like SAML or OIDC",
   "C. The CEO's travel schedule during the migration",
   "D. DNS records and network configurations may need updating to point to the cloud identity provider",
   "E. The color scheme of the new login portal"
  ],
  "correct": [
   1,
   3
  ],
  "exp": "Technical implications of a change include: (B) Legacy application compatibility — applications using LDAP for authentication may not support SAML or OIDC, requiring application modifications, proxies, or exceptions. (D) DNS and network configuration changes — endpoints, service records, and firewall rules must be updated to direct authentication traffic to the cloud provider. Marketing budget (A), CEO travel (C), and login portal aesthetics (E) are not technical implications. Change management must assess how a change affects the technical environment: compatibility, dependencies, network configurations, and integration points."
 },
 {
  "id": 201,
  "type": "mcq",
  "domain": 1,
  "obj": "1.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company needs to encrypt large volumes of data at rest quickly and efficiently. The encryption and decryption must use the same key. Which type of cryptographic algorithm is MOST appropriate?",
  "opts": [
   "A. Asymmetric encryption (RSA)",
   "B. Hashing (SHA-256)",
   "C. Symmetric encryption (AES)",
   "D. Digital signatures (DSA)"
  ],
  "correct": 2,
  "exp": "Symmetric encryption (AES) uses the same key for encryption and decryption and is highly efficient for bulk data encryption. AES is the standard for encrypting data at rest. Asymmetric encryption (A) like RSA uses key pairs and is much slower — it is impractical for encrypting large data volumes. Hashing (B) is a one-way function that does not encrypt or decrypt data. Digital signatures (D) provide authentication and non-repudiation but do not encrypt data. The scenario's requirements — speed, efficiency, same key — all point to symmetric encryption."
 },
 {
  "id": 202,
  "type": "mcq",
  "domain": 1,
  "obj": "1.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Two business partners need to establish a shared secret key over an untrusted network without any prior shared secret. Which cryptographic method should they use?",
  "opts": [
   "A. AES-256 in GCM mode",
   "B. SHA-512 hashing",
   "C. Diffie-Hellman key exchange",
   "D. RSA digital signatures"
  ],
  "correct": 2,
  "exp": "Diffie-Hellman (DH) key exchange allows two parties to establish a shared secret over an insecure channel without transmitting the secret itself. Each party generates a public/private value, exchanges public values, and independently computes the same shared secret using mathematical properties. AES-256 (A) is symmetric encryption that requires an already-established key. SHA-512 (B) is a hashing algorithm, not a key exchange mechanism. RSA digital signatures (D) provide authentication and non-repudiation but do not establish a shared secret. DH is foundational to TLS, IPSec, and many other protocols."
 },
 {
  "id": 203,
  "type": "mcq",
  "domain": 1,
  "obj": "1.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A web application stores user passwords using bcrypt. A security auditor notes that bcrypt is intentionally slow and computationally expensive compared to SHA-256. What is the PRIMARY security reason for this design choice?",
  "opts": [
   "A. Bcrypt provides encryption rather than hashing",
   "B. Bcrypt's computational cost makes brute-force and dictionary attacks significantly slower",
   "C. Bcrypt eliminates the need for salting passwords",
   "D. Bcrypt is faster for verification but slower for cracking"
  ],
  "correct": 1,
  "exp": "Bcrypt implements key stretching — it intentionally makes hashing computationally expensive. This means each password guess in a brute-force or dictionary attack takes significantly more time and computational resources, making large-scale password cracking impractical. If SHA-256 can compute billions of hashes per second, bcrypt might only allow thousands. Bcrypt is not encryption (A) — it is a one-way hash function. Bcrypt does include a built-in salt, but that is not why it is slow (C). Bcrypt is slow for both hashing and verification (D) — the cost applies equally, but legitimate users only hash once per login while attackers must hash millions of guesses."
 },
 {
  "id": 204,
  "type": "mcq",
  "domain": 1,
  "obj": "1.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company wants to ensure that sensitive customer credit card numbers stored in a database are replaced with randomly generated substitute values that maintain the same format (16-digit number) but have no mathematical relationship to the original. Which data protection technique is this?",
  "opts": [
   "A. Data masking",
   "B. Tokenization",
   "C. Steganography",
   "D. Hashing"
  ],
  "correct": 1,
  "exp": "Tokenization replaces sensitive data with a non-sensitive substitute (token) that retains the same format. A tokenization system maintains a secure vault that maps tokens back to original values when needed. Critically, the token has no mathematical relationship to the original — it cannot be reversed without access to the vault. Data masking (A) obscures data by replacing characters (e.g., ****-****-****-1234) but does not create a reversible mapping. Steganography (C) hides data within other media like images. Hashing (D) creates a fixed-length digest that does not maintain the original format. Tokenization is widely used in PCI-DSS compliance."
 },
 {
  "id": 205,
  "type": "mcq",
  "domain": 1,
  "obj": "1.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A user receives a digitally signed email from a vendor. The user's email client verifies the signature and confirms it is valid. Which of the following can the user be confident about? (Choose the BEST answer.)",
  "opts": [
   "A. The email was encrypted in transit and cannot be read by third parties",
   "B. The email content has not been altered since the vendor signed it, and the vendor cannot deny sending it",
   "C. The vendor's private key has been shared with the user for future encrypted communication",
   "D. The email was scanned for malware before delivery"
  ],
  "correct": 1,
  "exp": "A digital signature provides two guarantees: integrity (the content has not been modified since signing — any change would invalidate the signature) and non-repudiation (the signer cannot deny having signed it, since only their private key could create the signature). Digital signatures do NOT provide encryption (A) — signed emails can be read by anyone; encryption requires separate S/MIME or PGP encryption. The vendor's private key (C) is never shared — that would defeat the purpose of PKI. Malware scanning (D) is unrelated to digital signatures. Digital signatures use the sender's private key to sign and the recipient verifies with the sender's public key."
 },
 {
  "id": 206,
  "type": "mcq",
  "domain": 1,
  "obj": "1.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A forensic investigator discovers that an employee has been hiding confidential documents inside JPEG image files and emailing them to a personal account. The images appear normal when viewed. Which technique did the employee use?",
  "opts": [
   "A. Tokenization",
   "B. Obfuscation",
   "C. Steganography",
   "D. Symmetric encryption"
  ],
  "correct": 2,
  "exp": "Steganography is the practice of hiding data within another file (images, audio, video) so that the existence of the hidden data is not apparent. The JPEG images look normal but contain embedded confidential documents. Tokenization (A) replaces data with non-sensitive substitutes. Obfuscation (B) makes data difficult to understand but does not hide it within another medium. Symmetric encryption (D) transforms data into ciphertext — it would be obvious that the file contains encrypted data. Steganography's power is concealment: the carrier file appears innocent, hiding the very existence of the secret communication."
 },
 {
  "id": 207,
  "type": "multi",
  "domain": 1,
  "obj": "1.4",
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "A security engineer is hardening the password storage system. Which TWO techniques, when combined, provide the STRONGEST protection against offline password cracking attacks?",
  "opts": [
   "A. Storing passwords in plaintext in a restricted database",
   "B. Adding a unique random salt to each password before hashing",
   "C. Using key stretching with an algorithm like Argon2 or bcrypt",
   "D. Encrypting the password hash with a symmetric key stored in the same database",
   "E. Using MD5 for fast hashing performance"
  ],
  "correct": [
   1,
   2
  ],
  "exp": "The strongest password storage combines: (B) Salting — a unique random salt per password ensures identical passwords produce different hashes, defeating rainbow tables and precomputed attacks. (C) Key stretching (Argon2, bcrypt, scrypt) — intentionally slow hashing makes brute-force attacks computationally expensive. Together, salting + key stretching is the industry best practice. Plaintext storage (A) is the worst possible practice. Storing the encryption key alongside the data (D) provides no real protection — if the database is compromised, the key is too. MD5 (E) is cryptographically broken and far too fast, enabling billions of guesses per second."
 },
 {
  "id": 311,
  "obj": "1.1",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization is updating its employee handbook to include a policy stating that all employees must report any observed security violations to the CISO within 24 hours. Which control type does this handbook represent?",
  "opts": [
   "A. Technical",
   "B. Physical",
   "C. Directive",
   "D. Corrective"
  ],
  "correct": 2,
  "exp": "Directive controls (a type of administrative/managerial control) provide guidance and state required behavior through policies, handbooks, and procedures. Technical (A) and Physical (B) involve software or hardware. Corrective (D) restores systems after an incident."
 },
 {
  "id": 312,
  "obj": "1.2",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security architect is designing a system where data is encrypted on the hard drive, access to the server room requires a biometric scan, and all database queries are audited. Which security principle is being applied?",
  "opts": [
   "A. Separation of duties",
   "B. Defense in depth / Layered security",
   "C. Least privilege",
   "D. Deception"
  ],
  "correct": 1,
  "exp": "Defense in depth (layered security) uses multiple, independent security controls (technical, physical, and administrative) to protect an asset. If one layer (like disk encryption) fails, other layers (like physical access or auditing) provide continued protection."
 },
 {
  "id": 313,
  "obj": "1.4",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company requires that a third-party trusted agent holds a copy of their private keys so that the keys can be recovered if the original administrators are unavailable. What is this concept called?",
  "opts": [
   "A. Key stretching",
   "B. Key escrow",
   "C. Key revocation",
   "D. Digital signing"
  ],
  "correct": 1,
  "exp": "Key escrow is the process of storing cryptographic keys with a third party so they can be recovered under specific, authorized conditions. This is used to prevent data loss if a key holder leaves the company or loses their key."
 },
 {
  "id": 314,
  "obj": "1.4",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security engineer is configuring a web server. They want to ensure that even if the server's long-term private key is compromised in the future, past session traffic remains secure and cannot be decrypted. Which property should they look for in the cipher suites?",
  "opts": [
   "A. Key stretching",
   "B. Perfect Forward Secrecy (PFS)",
   "C. Symmetric encryption",
   "D. Hashing"
  ],
  "correct": 1,
  "exp": "Perfect Forward Secrecy (PFS) ensures that a compromise of the server's long-term private key does not compromise past session keys. It generates unique session keys for every connection (often using Ephemeral Diffie-Hellman), meaning there is no 'master' key that can unlock historical traffic."
 },
 {
  "id": 315,
  "obj": "1.2",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization implementing Zero Trust uses a system that analyzes the user's login time, IP address, and typing rhythm to calculate a risk score before granting access to sensitive apps. Which concept is this?",
  "opts": [
   "A. Mandatory Access Control",
   "B. Context-aware authentication / Behavioral biometrics",
   "C. Discretionary Access Control",
   "D. Role-Based Access Control"
  ],
  "correct": 1,
  "exp": "Context-aware authentication uses environmental and behavioral attributes (location, time, behavior) to make real-time access decisions. Typing rhythm is a specific type of behavioral biometrics."
 },
 {
  "id": 336,
  "obj": "1.1",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization is using an older version of a critical software application that is no longer receiving security updates. To manage the risk, the security team places the application on an isolated network segment with no internet access. What type of control is this?",
  "opts": [
   "A. Technical / Preventive",
   "B. Managerial / Directive",
   "C. Technical / Compensating",
   "D. Physical / Deterrent"
  ],
  "correct": 2,
  "exp": "A compensating control is an alternative measure implemented when the primary control (in this case, patching/updating software) is not possible. Network isolation is a technical mechanism used to compensate for the vulnerability."
 },
 {
  "id": 337,
  "obj": "1.2",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security architect is ensuring that even if one server in a cluster fails, the application remains available to users. Which concept is being implemented?",
  "opts": [
   "A. Integrity",
   "B. Non-repudiation",
   "C. Redundancy",
   "D. Confidentiality"
  ],
  "correct": 2,
  "exp": "Redundancy is the duplication of critical components or functions of a system with the intention of increasing reliability and availability. It ensures there is no single point of failure."
 },
 {
  "id": 338,
  "obj": "1.4",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A user's browser needs to check if a website's digital certificate has been revoked in real-time without downloading a large, potentially outdated list of all revoked certificates. Which technology is MOST efficient for this?",
  "opts": [
   "A. Certificate Revocation List (CRL)",
   "B. Online Certificate Status Protocol (OCSP)",
   "C. Certificate Signing Request (CSR)",
   "D. Key Escrow"
  ],
  "correct": 1,
  "exp": "OCSP is a more modern and efficient method than CRLs. It allows a browser to query the CA's server about a single certificate's status and receive a 'good', 'revoked', or 'unknown' response instantly."
 },
 {
  "id": 339,
  "obj": "1.2",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security team is performing a gap analysis. What is the PRIMARY goal of this activity?",
  "opts": [
   "A. To calculate the exact financial loss of a potential breach",
   "B. To identify the difference between current security controls and the desired security baseline",
   "C. To automatically apply patches to all vulnerable systems",
   "D. To monitor the network for active intrusions"
  ],
  "correct": 1,
  "exp": "A gap analysis compares the current 'as-is' state of security against a 'to-be' state or standard (like ISO 27001 or NIST) to identify missing controls or deficiencies."
 },
 {
  "id": 340,
  "obj": "1.4",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security engineer needs to generate a new key pair for a web server. What is the first step in obtaining a CA-signed certificate for that server?",
  "opts": [
   "A. Create a CRL",
   "B. Generate a Certificate Signing Request (CSR)",
   "C. Revoke the existing root certificate",
   "D. Enable OCSP stapling"
  ],
  "correct": 1,
  "exp": "A CSR contains the server's public key and identity information. It is sent to a Certificate Authority (CA) to be signed, resulting in a valid digital certificate."
 },
 {
  "id": 341,
  "obj": "1.3",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization is implementing a new change management policy. Which of the following should be included in every change request to ensure systems can be restored if the change causes a failure?",
  "opts": [
   "A. An Asset Inventory",
   "B. A Backout / Rollback plan",
   "C. A Business Impact Analysis",
   "D. A Data Loss Prevention policy"
  ],
  "correct": 1,
  "exp": "A rollback (or backout) plan ensures that if a change (like a patch or configuration update) fails or causes instability, the system can be returned to its previous known-good state."
 },
 {
  "id": 342,
  "obj": "1.4",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst is choosing an encryption mode for AES. They need a mode that provides both confidentiality and data integrity (authenticated encryption) in a single step. Which mode should they choose?",
  "opts": [
   "A. Cipher Block Chaining (CBC)",
   "B. Electronic Code Book (ECB)",
   "C. Galois/Counter Mode (GCM)",
   "D. Output Feedback (OFB)"
  ],
  "correct": 2,
  "exp": "GCM is an 'authenticated encryption' mode that provides both privacy (confidentiality) and a built-in message authentication code (integrity). CBC and ECB only provide confidentiality."
 },
 {
  "id": 343,
  "obj": "1.4",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Which cryptographic concept ensures that even if a small part of the plaintext is changed, the resulting ciphertext changes significantly and looks completely different?",
  "opts": [
   "A. Confusion",
   "B. Diffusion",
   "C. Obfuscation",
   "D. Collision"
  ],
  "correct": 1,
  "exp": "Diffusion ensures that changes to the input (plaintext) are spread throughout the output (ciphertext). If one bit of plaintext is changed, roughly half the bits in the ciphertext should change."
 },
 {
  "id": 344,
  "obj": "1.4",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization wants to implement an encryption algorithm that is fast and suitable for streaming media. Which cipher type is the BEST fit?",
  "opts": [
   "A. Block cipher",
   "B. Stream cipher",
   "C. Asymmetric cipher",
   "D. Hashing algorithm"
  ],
  "correct": 1,
  "exp": "Stream ciphers (like ChaCha20) encrypt data bit-by-bit or byte-by-bit, making them very fast and ideal for real-time applications like audio/video streaming where the data length may not be known in advance."
 },
 {
  "id": 345,
  "obj": "1.1",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company policy states that all employees must clear their desks of any sensitive information before leaving for the day. Which type of control is this?",
  "opts": [
   "A. Technical",
   "B. Physical",
   "C. Managerial / Directive",
   "D. Compensating"
  ],
  "correct": 2,
  "exp": "Policies are managerial (administrative) controls. Because it prescribes a specific behavior through a rule or instruction, it is a directive control."
 },
 {
  "id": 386,
  "obj": "1.4",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization wants to improve the performance of its web server's TLS handshake. They decide to have the web server periodically request a signed time-stamped status from the CA and send that status directly to clients during the handshake. Which technology is this?",
  "opts": [
   "A. Certificate Pinning",
   "B. OCSP Stapling",
   "C. Key Escrow",
   "D. Self-signing"
  ],
  "correct": 1,
  "exp": "OCSP Stapling improves performance and privacy by having the web server (rather than the client) query the CA for revocation status. The server 'staples' this time-stamped response to the certificate during the handshake."
 },
 {
  "id": 387,
  "obj": "1.2",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A secure research facility houses its most sensitive data on a server that is physically disconnected from any network, including the internet and the internal corporate LAN. Which concept is being used?",
  "opts": [
   "A. DMZ",
   "B. Air Gap",
   "C. VLAN",
   "D. Honeynet"
  ],
  "correct": 1,
  "exp": "An Air Gap is a security measure that ensures a computer or network is physically isolated from unsecured networks. This is the highest level of network isolation."
 },
 {
  "id": 388,
  "obj": "1.4",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A developer is explaining hashing to a junior intern. Which property of a cryptographic hash function ensures that it is mathematically infeasible to find any two different inputs that produce the same output?",
  "opts": [
   "A. Key Stretching",
   "B. Collision Resistance",
   "C. Salted output",
   "D. Confusion"
  ],
  "correct": 1,
  "exp": "Collision resistance means it is extremely difficult to find two different inputs that result in the same hash. When this happens, it is called a 'collision' (e.g., MD5 is no longer used because it is not collision-resistant)."
 },
 {
  "id": 389,
  "obj": "1.1",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company policy requires all laptops to have a privacy screen protector installed to prevent 'shoulder surfing.' What category of control is this?",
  "opts": [
   "A. Managerial",
   "B. Physical",
   "C. Technical",
   "D. Corrective"
  ],
  "correct": 1,
  "exp": "A privacy screen is a physical object used to protect an asset, making it a physical control. While the 'policy' requiring it is managerial, the screen itself is physical."
 },
 {
  "id": 390,
  "obj": "1.4",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Which of the following encryption modes converts a block cipher into a stream cipher by using a bit-incrementing value to generate unique key material for every block?",
  "opts": [
   "A. Electronic Code Book (ECB)",
   "B. Counter (CTR)",
   "C. Cipher Block Chaining (CBC)",
   "D. RSA"
  ],
  "correct": 1,
  "exp": "CTR (Counter) mode uses a counter value to generate a unique 'keystream' that is XORed with the plaintext. This turns a block cipher into a stream cipher and allows for parallel processing."
 },
 {
  "id": 411,
  "obj": "1.4",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security engineer is choosing a hashing algorithm for password storage. They want to prevent attackers from using precomputed tables (Rainbow Tables) to crack the passwords. Which technique is MOST essential?",
  "opts": [
   "A. Key Stretching",
   "B. Salting",
   "C. Peppering",
   "D. Digital Signing"
  ],
  "correct": 1,
  "exp": "Salting adds a unique random value to each password before hashing. This ensures that even identical passwords produce different hashes, effectively making precomputed tables (Rainbow Tables) useless."
 },
 {
  "id": 413,
  "obj": "1.4",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Which asymmetric cryptographic algorithm is preferred for mobile devices because it provides the same level of security as RSA but with much smaller key sizes and lower computational requirements?",
  "opts": [
   "A. AES",
   "B. Diffie-Hellman",
   "C. Elliptic Curve Cryptography (ECC)",
   "D. SHA-256"
  ],
  "correct": 2,
  "exp": "ECC is highly efficient and provides strong security with small keys (e.g., a 256-bit ECC key is roughly equivalent to a 3072-bit RSA key), making it ideal for mobile and IoT devices."
 },
 {
  "id": 414,
  "obj": "1.1",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization mandates that all employees must take two consecutive weeks of leave every year. During this time, another employee performs their duties. Which control type is this?",
  "opts": [
   "A. Technical",
   "B. Physical",
   "C. Managerial / Mandatory Vacations",
   "D. Deterrent"
  ],
  "correct": 2,
  "exp": "Mandatory vacations are a managerial (administrative) control designed to detect fraud or malicious activity that requires the constant presence of the perpetrator."
 },
 {
  "id": 415,
  "obj": "1.4",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "When a Certificate Authority (CA) revokes a certificate, it publishes the serial numbers of all revoked certificates. What is this published list called?",
  "opts": [
   "A. CSR",
   "B. CRL (Certificate Revocation List)",
   "C. OCSP Stapling",
   "D. Root Store"
  ],
  "correct": 1,
  "exp": "The CRL is a list of digital certificates that have been revoked by the issuing CA before their scheduled expiration date."
 },
 {
  "id": 416,
  "obj": "1.2",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Which deception technology involves an entire network segment of decoy systems designed to lure attackers and study their techniques in a high-fidelity environment?",
  "opts": [
   "A. Honeypot",
   "B. Honeynet",
   "C. Honeyfile",
   "D. DNS Sinkhole"
  ],
  "correct": 1,
  "exp": "A honeynet is a network of honeypots. It provides a more complex environment for attackers to interact with, giving defenders more intelligence on lateral movement and tools."
 },
 {
  "id": 417,
  "obj": "1.4",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A developer wants to use a hashing algorithm that is resistant to specialized hardware-based cracking (like ASICs and GPUs). Which algorithm should they choose?",
  "opts": [
   "A. MD5",
   "B. SHA-1",
   "C. Argon2",
   "D. SHA-256"
  ],
  "correct": 2,
  "exp": "Argon2 is a modern key-stretching algorithm specifically designed to be memory-hard, making it resistant to GPU and ASIC-based brute-force attacks."
 },
 {
  "id": 418,
  "obj": "1.1",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization places a large banner on its network login screen stating that all activity is logged and unauthorized access will result in prosecution. What control type is this?",
  "opts": [
   "A. Preventive",
   "B. Detective",
   "C. Deterrent",
   "D. Corrective"
  ],
  "correct": 2,
  "exp": "Deterrent controls discourage potential attackers by making them aware of the consequences or the high risk of being caught."
 },
 {
  "id": 419,
  "obj": "1.4",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst is reviewing cipher suites for a new web server. They notice a mode that requires an Initialization Vector (IV) and links each block of ciphertext to the previous one. Which mode is this?",
  "opts": [
   "A. ECB",
   "B. CBC (Cipher Block Chaining)",
   "C. GCM",
   "D. RSA"
  ],
  "correct": 1,
  "exp": "CBC (Cipher Block Chaining) uses an IV for the first block and then XORs each subsequent block of plaintext with the previous block of ciphertext."
 },
 {
  "id": 420,
  "obj": "1.2",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "During a TCP 3-way handshake, what is the purpose of the SYN-ACK packet sent by the server?",
  "opts": [
   "A. To request a connection",
   "B. To acknowledge the client's request and synchronize sequence numbers",
   "C. To terminate the connection",
   "D. To reset the connection"
  ],
  "correct": 1,
  "exp": "In the 3-way handshake (SYN, SYN-ACK, ACK), the SYN-ACK is the server's response confirming it received the request and establishing its own sequence numbers."
 },
 {
  "id": 461,
  "obj": "1.4",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization is concerned about the future threat of quantum computers being able to break current RSA and ECC encryption. They decide to implement an algorithm designed to be secure against quantum attacks. Which concept is this?",
  "opts": [
   "A. Symmetric encryption",
   "B. Post-Quantum Cryptography (PQC)",
   "C. Ephemeral keys",
   "D. Key stretching"
  ],
  "correct": 1,
  "exp": "Post-Quantum Cryptography (PQC) refers to cryptographic algorithms (usually based on lattice, code, or multivariate equations) that are thought to be secure against an attack by a quantum computer."
 },
 {
  "id": 462,
  "obj": "1.2",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Which technology provides a hardware-level root of trust by ensuring that each component of the boot process is digitally signed and verified before execution?",
  "opts": [
   "A. Secure Boot",
   "B. Full Disk Encryption",
   "C. Data Loss Prevention",
   "D. Virtualization"
  ],
  "correct": 0,
  "exp": "Secure Boot is a standard that ensures a device boots using only software that is trusted by the Original Equipment Manufacturer (OEM). It prevents rootkits from loading during boot."
 },
 {
  "id": 463,
  "obj": "1.1",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security manager is updating the company's 'Code of Conduct' to include a requirement for reporting unethical behavior. What category of control does this handbook belong to?",
  "opts": [
   "A. Technical",
   "B. Physical",
   "C. Managerial / Directive",
   "D. Corrective"
  ],
  "correct": 2,
  "exp": "The handbook is a managerial (administrative) control. Because it directs specific behavior through policy, it is a directive control."
 },
 {
  "id": 464,
  "obj": "1.4",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Which property of a cryptographic hash function ensures that a small change in the input (like changing one character) results in a drastically different output hash?",
  "opts": [
   "A. Collision resistance",
   "B. Avalanche effect",
   "C. Key stretching",
   "D. Non-repudiation"
  ],
  "correct": 1,
  "exp": "The avalanche effect is a desirable property where a minor change in the input significantly changes the output, making it impossible to predict the hash based on the input."
 },
 {
  "id": 465,
  "obj": "1.2",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization requires two different administrators to enter their unique keys simultaneously to authorize a highly sensitive root CA operation. Which concept is being implemented?",
  "opts": [
   "A. Least Privilege",
   "B. Dual Control / Split Knowledge",
   "C. Job Rotation",
   "D. Implicit Deny"
  ],
  "correct": 1,
  "exp": "Dual control requires two people to be present/active to complete a task, preventing a single person from performing a sensitive action alone."
 },
 {
  "id": 466,
  "obj": "1.4",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A user's browser verifies a website's certificate by checking it against an intermediate CA, which is then verified by a root CA stored in the browser. What is this hierarchy called?",
  "opts": [
   "A. Key Escrow",
   "B. Certificate Pinning",
   "C. Chain of Trust",
   "D. Hashing"
  ],
  "correct": 2,
  "exp": "The Chain of Trust is the sequence of certificates, starting from the entity certificate, through one or more intermediate CAs, ending at a trusted root CA."
 },
 {
  "id": 467,
  "obj": "1.1",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security engineer deploys an Intrusion Detection System (IDS) to monitor network traffic. Which control category does this fall into?",
  "opts": [
   "A. Managerial",
   "B. Technical",
   "C. Physical",
   "D. Operational"
  ],
  "correct": 1,
  "exp": "An IDS is a technical (logical) control because it uses software and hardware to enforce security policies on the network."
 },
 {
  "id": 468,
  "obj": "1.2",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "In a Zero Trust model, once a user has successfully authenticated and accessed a resource, how is their next request for a different resource handled?",
  "opts": [
   "A. Access is granted automatically based on the existing session",
   "B. Access is evaluated again independently, requiring continuous verification",
   "C. Access is denied until the user logs out and back in",
   "D. Access is granted if the user is on the same IP"
  ],
  "correct": 1,
  "exp": "Zero Trust relies on continuous verification. Every access request is evaluated independently, regardless of previous successful authentications."
 },
 {
  "id": 469,
  "obj": "1.3",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security team builds a complex network of decoy servers, databases, and files designed to look like a high-value target environment to study attacker lateral movement. What is this called?",
  "opts": [
   "A. Honeypot",
   "B. Honeynet",
   "C. Sandboxing",
   "D. Air gap"
  ],
  "correct": 1,
  "exp": "A honeynet is a network of honeypots (decoys). It provides a more comprehensive environment for monitoring attacker behavior."
 },
 {
  "id": 470,
  "obj": "1.4",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Which protocol is used to securely exchange cryptographic keys over an insecure channel, allowing two parties to compute a shared secret?",
  "opts": [
   "A. AES",
   "B. Diffie-Hellman",
   "C. SHA-256",
   "D. HMAC"
  ],
  "correct": 1,
  "exp": "Diffie-Hellman (DH) is a key exchange protocol that allows two parties to establish a shared secret key without sending the key itself over the network."
 },
 {
  "id": 600,
  "obj": "1.1",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A hospital deploys a biometric fingerprint scanner to control access to its pharmacy. During a power outage, the scanner fails and the door remains locked, preventing anyone from entering. Which security design principle does this behavior demonstrate?",
  "opts": [
   "A. Fail-open",
   "B. Fail-secure (fail-closed)",
   "C. Defense in depth",
   "D. Least privilege"
  ],
  "correct": 1,
  "exp": "Fail-secure (also called fail-closed) means that when a system fails, it defaults to a secure state — in this case, the door remains locked. This prevents unauthorized access during a failure but may create safety concerns (fire egress). Fail-open is the opposite: the door unlocks on failure, prioritizing safety over security. Defense in depth uses multiple layers. Least privilege limits permissions. CompTIA expects you to know both fail modes and when each is appropriate — high-security areas typically fail-secure while life-safety exits fail-open."
 },
 {
  "id": 601,
  "obj": "1.1",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A retail company experiences repeated shoplifting. Management installs visible dummy cameras alongside real ones throughout the store. The dummy cameras have blinking red LEDs but do not record. Which control type do the dummy cameras BEST represent?",
  "opts": [
   "A. Detective",
   "B. Corrective",
   "C. Compensating",
   "D. Deterrent"
  ],
  "correct": 3,
  "exp": "Dummy cameras are deterrent controls — they discourage theft by creating the perception of surveillance without actually detecting or recording anything. They cannot be detective because they do not capture evidence. They are not compensating because they do not substitute for a missing primary control in a formal risk-mitigation sense. They are not corrective because they do not restore anything after an incident. The real cameras alongside them are detective controls. This distinction between deterrent and detective is a common CompTIA exam topic."
 },
 {
  "id": 602,
  "obj": "1.1",
  "type": "multi",
  "domain": 1,
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "An organization wants to reduce the risk of insider fraud in its accounts payable department. Which TWO administrative controls would BEST help detect ongoing fraudulent activity by a single employee?",
  "opts": [
   "A. Deploying a next-generation firewall",
   "B. Implementing mandatory job rotation",
   "C. Installing biometric door locks on the office",
   "D. Requiring mandatory vacations with another employee covering duties",
   "E. Encrypting all financial records at rest"
  ],
  "correct": [
   1,
   3
  ],
  "exp": "Job rotation (B) moves employees between roles periodically, making it harder for one person to maintain a long-running fraud scheme and increasing the chance another employee will notice irregularities. Mandatory vacations (D) force an employee away from their duties while someone else performs them — hidden fraud often surfaces when the perpetrator is absent. Both are administrative/managerial controls specifically designed to detect insider fraud. A firewall (A) is a technical network control irrelevant to accounts payable fraud. Biometric locks (C) are physical controls. Encryption (E) protects confidentiality but does not detect fraud."
 },
 {
  "id": 603,
  "obj": "1.1",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A network administrator configures a firewall to deny all inbound traffic by default and only allows traffic that matches explicitly defined permit rules. Which security principle does this firewall configuration implement?",
  "opts": [
   "A. Separation of duties",
   "B. Implicit deny",
   "C. Role-based access control",
   "D. Defense in depth"
  ],
  "correct": 1,
  "exp": "Implicit deny is the principle that any access not explicitly permitted is automatically denied. This is the default stance for firewalls, ACLs, and many access control systems. It ensures that only traffic or access that has been specifically authorized is allowed — everything else is blocked without needing an explicit deny rule for each case. Separation of duties splits tasks between people. RBAC assigns permissions based on roles. Defense in depth layers multiple controls. Implicit deny is foundational to least privilege and Zero Trust architectures."
 },
 {
  "id": 604,
  "obj": "1.1",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "After a data breach, a company hires an external security firm to assess its controls. The firm recommends adding a web application firewall (WAF) in front of public-facing applications AND requiring security awareness training for developers. Which security approach does this combined recommendation illustrate?",
  "opts": [
   "A. Single point of failure elimination",
   "B. Compensating controls",
   "C. Defense in depth — layering technical and administrative controls",
   "D. Risk avoidance"
  ],
  "correct": 2,
  "exp": "Defense in depth (layered security) uses multiple controls from different categories to protect an asset. A WAF is a technical control that filters malicious web traffic. Security awareness training is an administrative control that reduces human error. Together they create overlapping layers — if one fails, the other provides protection. This is not compensating (B) because neither control substitutes for the other. Risk avoidance (D) would mean not running the applications at all. Eliminating single points of failure (A) relates to redundancy, not layered security."
 },
 {
  "id": 605,
  "obj": "1.2",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A cloud administrator provisions a service account for an automated backup process. The account is granted read-only access to the specific storage buckets it needs to back up and nothing else. Six months later, the backup scope expands to include a new bucket. The administrator adds access to only that bucket. Which security principle is being followed?",
  "opts": [
   "A. Separation of duties",
   "B. Need to know",
   "C. Least privilege",
   "D. Dual control"
  ],
  "correct": 2,
  "exp": "Least privilege grants a user or service account only the minimum permissions necessary to perform its function — nothing more. The backup account has read-only access to only the buckets it needs, and permissions are expanded incrementally as requirements change rather than granting broad access upfront. Need to know (B) restricts information access based on job relevance and is closely related, but least privilege is the broader principle covering all permissions, not just information access. Separation of duties (A) splits tasks between people. Dual control (D) requires two people to complete an action."
 },
 {
  "id": 606,
  "obj": "1.2",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A DDoS attack floods a company's e-commerce website with traffic, making it unreachable for customers during a peak sales period. Which element of the CIA triad is PRIMARILY compromised?",
  "opts": [
   "A. Confidentiality",
   "B. Integrity",
   "C. Availability",
   "D. Non-repudiation"
  ],
  "correct": 2,
  "exp": "Availability ensures that systems and data are accessible to authorized users when needed. A DDoS attack specifically targets availability by overwhelming resources so legitimate users cannot access the service. Confidentiality (A) concerns unauthorized disclosure — DDoS does not expose data. Integrity (B) concerns unauthorized modification — DDoS does not alter data. Non-repudiation (D) is about proving who performed an action and is not a CIA triad element. DDoS is the textbook example of an availability attack on the CompTIA exam."
 },
 {
  "id": 607,
  "obj": "1.2",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security team configures the corporate SIEM to flag any login attempt from a country where the company has no employees or business operations. An alert fires when an account authenticates from an unexpected foreign IP address at 3:00 AM. This detection method is BEST described as:",
  "opts": [
   "A. Signature-based detection",
   "B. Anomaly-based / behavioral detection",
   "C. Heuristic analysis",
   "D. Sandboxing"
  ],
  "correct": 1,
  "exp": "Anomaly-based (behavioral) detection identifies activity that deviates from established baselines or expected patterns. Logging in from an unexpected country at an unusual time does not match a known attack signature — it is flagged because it is abnormal behavior for that account. Signature-based detection (A) matches against known patterns of malicious activity (like antivirus definitions). Heuristic analysis (C) uses rules of thumb to identify potentially malicious behavior but is more commonly associated with malware analysis. Sandboxing (D) executes suspicious code in an isolated environment. Anomaly detection is a key component of Zero Trust continuous monitoring."
 },
 {
  "id": 608,
  "obj": "1.2",
  "type": "multi",
  "domain": 1,
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "A CISO is building a security awareness program. Which TWO elements are MOST important for reducing the human attack surface according to security fundamentals?",
  "opts": [
   "A. Teaching employees to identify phishing emails and social engineering tactics",
   "B. Deploying endpoint detection and response (EDR) on all workstations",
   "C. Conducting regular simulated phishing exercises with feedback and metrics",
   "D. Purchasing cyber insurance to cover breach costs",
   "E. Implementing full disk encryption on all laptops"
  ],
  "correct": [
   0,
   2
  ],
  "exp": "Security awareness training (A) educates employees to recognize and resist social engineering, which is the leading initial attack vector. Simulated phishing exercises (C) reinforce that training with realistic practice and measurable outcomes — employees who fail receive additional coaching. Together they create an ongoing cycle of education and testing. EDR (B) and encryption (E) are technical controls, not awareness program elements. Cyber insurance (D) transfers financial risk but does not reduce the human attack surface. The CompTIA exam emphasizes that people are often the weakest link and that training must be ongoing, not a one-time event."
 },
 {
  "id": 609,
  "obj": "1.2",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company's data classification policy defines four levels: Public, Internal, Confidential, and Restricted. A marketing brochure intended for customers is labeled 'Public,' while the CEO's merger plans are labeled 'Restricted.' Which security concept does this classification system PRIMARILY support?",
  "opts": [
   "A. Integrity verification",
   "B. Data governance and appropriate handling based on sensitivity",
   "C. Availability through redundancy",
   "D. Non-repudiation of transactions"
  ],
  "correct": 1,
  "exp": "Data classification assigns sensitivity levels to information so that appropriate security controls can be applied based on the data's value and risk. Public data needs minimal protection, while Restricted data requires the strongest controls (encryption, strict access, audit logging). This is a foundational element of data governance — without classification, organizations cannot make informed decisions about how to protect different types of information. Integrity (A) concerns data accuracy. Availability (C) concerns uptime. Non-repudiation (D) proves actions were taken. Data classification drives proportional security spending and control selection."
 },
 {
  "id": 610,
  "obj": "1.3",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An IT department is migrating a production database server to new hardware. The change management board requires the migration to occur during a pre-approved four-hour period on Saturday night when user activity is lowest. Which change management concept does this time restriction represent?",
  "opts": [
   "A. Backout plan",
   "B. Maintenance window",
   "C. Impact assessment",
   "D. Stakeholder approval"
  ],
  "correct": 1,
  "exp": "A maintenance window is a scheduled period during which changes to production systems are permitted, typically chosen to minimize disruption to users and business operations. Performing the migration on Saturday night during low activity is a textbook maintenance window. A backout plan (A) defines how to revert the change if it fails. An impact assessment (C) evaluates the potential effects of the change on systems and users. Stakeholder approval (D) is the process of getting authorization from affected parties. Maintenance windows are a key change management control that reduces risk by limiting when changes can occur."
 },
 {
  "id": 611,
  "obj": "1.3",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security team discovers that a newly deployed application is communicating with an unapproved external API endpoint. Investigation reveals that the application was deployed without going through the formal change review process. Which change management failure does this scenario illustrate?",
  "opts": [
   "A. Missing backout plan",
   "B. Unauthorized change — bypassing the change approval process",
   "C. Incomplete dependency mapping",
   "D. Expired maintenance window"
  ],
  "correct": 1,
  "exp": "An unauthorized change occurs when a modification is made to the production environment without following the established change management process, including review, approval, and documentation. The unapproved external API communication was not caught because the change was never reviewed by the change advisory board. A missing backout plan (A) means no rollback procedure exists but does not describe the root cause here. Incomplete dependency mapping (C) would mean dependencies were not identified during an approved change. An expired maintenance window (D) means work continued past the approved time. Unauthorized changes are a major security risk because they introduce unvetted changes."
 },
 {
  "id": 612,
  "obj": "1.3",
  "type": "multi",
  "domain": 1,
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "A company is preparing to replace its legacy VPN solution with a cloud-based ZTNA (Zero Trust Network Access) platform. Which TWO activities are ESSENTIAL parts of the change management process for this migration?",
  "opts": [
   "A. Conducting a thorough impact assessment of all systems and users relying on the current VPN",
   "B. Immediately decommissioning the old VPN before testing the new solution",
   "C. Documenting a rollback plan to revert to the legacy VPN if the ZTNA deployment fails",
   "D. Allowing each department to migrate independently without centralized coordination",
   "E. Skipping the testing phase to meet the project deadline"
  ],
  "correct": [
   0,
   2
  ],
  "exp": "Impact assessment (A) identifies all systems, users, and processes that depend on the current VPN, ensuring nothing is overlooked during migration. A rollback plan (C) ensures the organization can revert to the working VPN if the ZTNA deployment encounters critical issues. Immediately decommissioning (B) before testing creates unnecessary risk. Decentralized migration (D) without coordination leads to inconsistencies and gaps. Skipping testing (E) violates fundamental change management principles. Every significant change must include impact assessment, testing, approval, rollback planning, and coordinated execution."
 },
 {
  "id": 613,
  "obj": "1.3",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst places a decoy file named 'employee_salaries_2026.xlsx' on a file server. The file contains fabricated data and is monitored by a file integrity monitoring tool that alerts whenever the file is accessed. No legitimate business process requires this file. Which deception technology is this?",
  "opts": [
   "A. Honeypot",
   "B. Honeytoken",
   "C. Honeyfile",
   "D. Honeynet"
  ],
  "correct": 2,
  "exp": "A honeyfile is a decoy file placed on a system to detect unauthorized access. It has an enticing name to attract attackers or malicious insiders, and any access to it triggers an alert because no legitimate user should ever open it. A honeypot (A) is an entire decoy system. A honeytoken (B) is a piece of fake data like a credential or database record embedded within real data. A honeynet (D) is a network of honeypots. The key distinction: honeyfiles are file-level deception, honeytokens are data-level deception, and honeypots are system-level deception."
 },
 {
  "id": 614,
  "obj": "1.3",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company establishes a documented baseline configuration for all production web servers, specifying the exact OS version, installed packages, open ports, and security settings. Any deviation from this baseline triggers an automated alert. Which security concept does this practice implement?",
  "opts": [
   "A. Penetration testing",
   "B. Configuration management and baseline enforcement",
   "C. Incident response",
   "D. Business continuity planning"
  ],
  "correct": 1,
  "exp": "Configuration management establishes and maintains consistent settings across systems using documented baselines. A configuration baseline defines the approved state of a system — OS version, patches, services, ports, and security settings. Monitoring for deviations (configuration drift) ensures systems remain in their approved secure state. Penetration testing (A) simulates attacks. Incident response (C) handles security events after they occur. Business continuity (D) ensures operations continue during disruptions. Configuration baselines are a critical change management and security hardening practice covered in SY0-701 objective 1.3."
 },
 {
  "id": 615,
  "obj": "1.4",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company's security policy requires that a master encryption key be split into five parts, distributed to five different executives, and that any three of the five parts must be combined to reconstruct the key. Which cryptographic concept is being used?",
  "opts": [
   "A. Key escrow",
   "B. Key stretching",
   "C. Secret sharing (Shamir's Secret Sharing)",
   "D. Perfect forward secrecy"
  ],
  "correct": 2,
  "exp": "Shamir's Secret Sharing splits a secret (like an encryption key) into multiple parts (shares) and defines a threshold — a minimum number of shares required to reconstruct the original secret. In this scenario, 3-of-5 means any three executives can reconstruct the key, but fewer than three cannot. This provides both redundancy (the key survives the loss of two shares) and security (no single person or pair can reconstruct it alone). Key escrow (A) stores a copy of the key with a trusted third party. Key stretching (B) makes hashing computationally expensive. PFS (D) generates unique session keys. Shamir's scheme is used to protect root CA keys and other critical secrets."
 },
 {
  "id": 616,
  "obj": "1.4",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A financial services company must comply with regulations requiring that certain customer data fields (like account numbers) be rendered unreadable in non-production environments used for testing and development. The data must retain realistic formatting so applications function correctly. Which technique is MOST appropriate?",
  "opts": [
   "A. Full disk encryption",
   "B. Data masking",
   "C. Steganography",
   "D. Hashing"
  ],
  "correct": 1,
  "exp": "Data masking replaces sensitive data with realistic but fictitious values that preserve the format and structure of the original data. This allows non-production environments to use realistic test data without exposing actual customer information. For example, account number 4532-1234-5678-9012 might become 4532-XXXX-XXXX-3847. Full disk encryption (A) protects data at rest but does not address the need for usable non-production data. Steganography (C) hides data within other files. Hashing (D) produces a fixed-length digest that does not preserve format. Data masking is distinct from tokenization — masking is typically irreversible and used for non-production environments, while tokenization maintains a secure vault for reversible mapping."
 },
 {
  "id": 617,
  "obj": "1.4",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security architect is designing a system where IoT sensors transmit telemetry data to a cloud platform. The sensors have very limited CPU and memory. The architect needs an asymmetric algorithm for device authentication that works within these hardware constraints. Which algorithm is BEST suited?",
  "opts": [
   "A. RSA-4096",
   "B. Triple DES (3DES)",
   "C. Elliptic Curve Cryptography (ECC)",
   "D. Blowfish"
  ],
  "correct": 2,
  "exp": "ECC provides equivalent security to RSA with much smaller key sizes (256-bit ECC approximates 3072-bit RSA), resulting in lower computational overhead, less memory usage, and smaller certificate sizes. This makes ECC ideal for resource-constrained IoT devices. RSA-4096 (A) requires significantly more processing power and memory than ECC for equivalent security. 3DES (B) and Blowfish (D) are symmetric algorithms, not asymmetric — they cannot be used for the public key authentication described in the scenario. ECC is the standard choice for IoT, mobile, and embedded systems where hardware resources are limited."
 },
 {
  "id": 618,
  "obj": "1.4",
  "type": "multi",
  "domain": 1,
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "A security engineer is hardening a web server's TLS configuration. Which TWO actions would MOST improve the security of the TLS implementation?",
  "opts": [
   "A. Enabling support for SSL 3.0 to maintain backward compatibility with older browsers",
   "B. Disabling cipher suites that do not support Perfect Forward Secrecy (PFS)",
   "C. Configuring the server to prefer cipher suites that use AES-GCM for authenticated encryption",
   "D. Using a 512-bit RSA key to reduce handshake latency",
   "E. Disabling certificate revocation checking to speed up connections"
  ],
  "correct": [
   1,
   2
  ],
  "exp": "Disabling non-PFS cipher suites (B) ensures that even if the server's private key is compromised in the future, past session traffic cannot be decrypted — each session uses unique ephemeral keys. Preferring AES-GCM (C) provides authenticated encryption, combining confidentiality and integrity in a single efficient operation. Enabling SSL 3.0 (A) reintroduces known vulnerabilities like POODLE. A 512-bit RSA key (D) is trivially breakable — minimum 2048-bit is required. Disabling revocation checking (E) means the server cannot detect revoked certificates, creating a serious security gap. TLS hardening focuses on removing weak protocols, enforcing strong cipher suites, and ensuring PFS."
 },
 {
  "id": 619,
  "obj": "1.4",
  "type": "mcq",
  "domain": 1,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company uses a wildcard certificate (*.example.com) for all its subdomains. A security auditor warns that if the private key for this certificate is compromised, all subdomains are affected. Which certificate strategy would REDUCE the blast radius of a single key compromise?",
  "opts": [
   "A. Using self-signed certificates for all subdomains",
   "B. Issuing individual certificates for each subdomain from the same CA",
   "C. Switching from RSA to ECC for the wildcard certificate",
   "D. Increasing the wildcard certificate's key length to 4096 bits"
  ],
  "correct": 1,
  "exp": "Individual certificates per subdomain mean each has its own unique private key. If one key is compromised, only that subdomain is affected — not all subdomains. This reduces the blast radius compared to a wildcard certificate where one key protects everything. Self-signed certificates (A) would cause browser trust warnings and create management overhead without solving the blast radius problem. Switching to ECC (C) changes the algorithm but does not address the single-key-for-all-subdomains risk. Increasing key length (D) makes the existing key harder to crack but does not reduce impact if the key is compromised through theft or misconfiguration. The trade-off: individual certificates increase management complexity but improve security isolation."
 }
];
