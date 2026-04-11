const Q_D3 = [
 {
  "id": 3,
  "obj": "3.2",
  "type": "firewall",
  "domain": 3,
  "badge": "PBQ · Simulation",
  "badgeClass": "pbq-b",
  "stem": "A company has a web application in a DMZ and an internal database server. Configure the firewall ACL to enforce this policy: (1) External users may access the web server on HTTPS only; (2) The web app server may query the database on port 1433; (3) Block all direct external access to the database; (4) Allow internal network management SSH access to the web server.",
  "rules": [
   {
    "desc": "External → Web Server (HTTPS only)",
    "src": "0.0.0.0/0",
    "dst": "10.10.1.5",
    "port": "443",
    "proto": "TCP",
    "opts": [
     "PERMIT",
     "DENY"
    ],
    "correct": "PERMIT"
   },
   {
    "desc": "Web Server → Database (MSSQL)",
    "src": "10.10.1.5",
    "dst": "10.10.2.10",
    "port": "1433",
    "proto": "TCP",
    "opts": [
     "PERMIT",
     "DENY"
    ],
    "correct": "PERMIT"
   },
   {
    "desc": "External → Database (direct)",
    "src": "0.0.0.0/0",
    "dst": "10.10.2.10",
    "port": "1433",
    "proto": "TCP",
    "opts": [
     "PERMIT",
     "DENY"
    ],
    "correct": "DENY"
   },
   {
    "desc": "Internal Mgmt → Web Server (SSH)",
    "src": "192.168.1.0/24",
    "dst": "10.10.1.5",
    "port": "22",
    "proto": "TCP",
    "opts": [
     "PERMIT",
     "DENY"
    ],
    "correct": "PERMIT"
   }
  ],
  "exp": "Rule 1: PERMIT 443/TCP from internet to web server — this is the only externally exposed service. Rule 2: PERMIT 1433/TCP from web server to DB — the app tier in the DMZ must query the data tier internally; this is the standard two-tier DMZ data flow. Rule 3: DENY 1433/TCP direct from internet to DB — the entire point of the DMZ is preventing direct internet access to back-end systems; never expose your database directly. Rule 4: PERMIT 22/TCP from the management subnet only — restricting SSH source to the management network implements least privilege for admin access. Port 1433 = Microsoft SQL Server. Port 22 = SSH."
 },
 {
  "id": 4,
  "obj": "3.2",
  "type": "vpn",
  "domain": 3,
  "badge": "PBQ · Simulation",
  "badgeClass": "pbq-b",
  "stem": "Configure a site-to-site IPSec VPN between headquarters and a branch office. Security requirements: digital certificate authentication, AES-256 encryption, SHA-256 integrity, strongest DH group listed, tunnel mode for full packet encryption, ESP for confidentiality.",
  "phase1": [
   {
    "label": "Authentication Method",
    "opts": [
     "Pre-Shared Key (PSK)",
     "Digital Certificates (PKI)",
     "RADIUS Token"
    ],
    "correct": "Digital Certificates (PKI)"
   },
   {
    "label": "Encryption",
    "opts": [
     "DES",
     "3DES",
     "AES-128",
     "AES-256"
    ],
    "correct": "AES-256"
   },
   {
    "label": "Integrity Hash",
    "opts": [
     "MD5",
     "SHA-1",
     "SHA-256"
    ],
    "correct": "SHA-256"
   },
   {
    "label": "DH Group",
    "opts": [
     "Group 1 (768-bit)",
     "Group 2 (1024-bit)",
     "Group 14 (2048-bit)"
    ],
    "correct": "Group 14 (2048-bit)"
   }
  ],
  "phase2": [
   {
    "label": "IPSec Mode",
    "opts": [
     "Transport Mode",
     "Tunnel Mode"
    ],
    "correct": "Tunnel Mode"
   },
   {
    "label": "Protocol",
    "opts": [
     "AH (Authentication Header)",
     "ESP (Encapsulating Security Payload)"
    ],
    "correct": "ESP (Encapsulating Security Payload)"
   },
   {
    "label": "Encryption",
    "opts": [
     "3DES",
     "AES-128",
     "AES-256"
    ],
    "correct": "AES-256"
   }
  ],
  "exp": "Phase 1 (IKE — negotiates the secure channel): PKI certificates are stronger than PSK. AES-256 is the strongest option. SHA-256 is stronger than MD5/SHA-1. DH Group 14 (2048-bit) provides the strongest key exchange of those listed. Phase 2 (IPSec — protects actual traffic): Tunnel Mode wraps the entire original IP packet (header + payload) in a new IP packet — required for gateway-to-gateway (site-to-site) VPNs. Transport Mode only encrypts the payload, used for host-to-host. ESP encrypts AND authenticates — required for confidentiality. AH provides authentication only, no encryption. AES-256 for data encryption."
 },
 {
  "id": 37,
  "obj": "3.1",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A cloud administrator is deploying a web application. The provider manages the OS, runtime, middleware, and the platform. The company is only responsible for deploying and managing the application code and data. Which cloud service model is being used?",
  "opts": [
   "A. IaaS (Infrastructure as a Service)",
   "B. PaaS (Platform as a Service)",
   "C. SaaS (Software as a Service)",
   "D. FaaS (Function as a Service)"
  ],
  "correct": 1,
  "exp": "PaaS provides a platform for developers to deploy applications without managing the underlying OS, runtime, or infrastructure. The provider handles OS patching, middleware, and runtime. The customer manages only the application code and data. IaaS gives the customer a virtual machine — they manage OS upward. SaaS provides a fully managed application (customer manages only data and users). FaaS (serverless) runs individual functions triggered by events — even more abstracted than PaaS. The shared responsibility boundary: PaaS customer responsibility = application code + data. This is a commonly tested distinction on Security+."
 },
 {
  "id": 38,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A network engineer implements VLANs to divide HR, Finance, and Engineering into separate broadcast domains. Traffic between VLANs is routed through a firewall with explicit allow rules. Which security benefit does this architecture PRIMARILY provide?",
  "opts": [
   "A. Prevents external attackers from reaching the internal network",
   "B. Limits lateral movement by requiring east-west traffic to traverse the firewall",
   "C. Encrypts all inter-department communications",
   "D. Provides redundancy in case of switch failure"
  ],
  "correct": 1,
  "exp": "VLAN segmentation with inter-VLAN firewall routing creates micro-segmentation. East-west traffic (lateral movement between internal segments) must traverse the firewall where policy can be enforced. If an attacker compromises an Engineering workstation, they cannot directly access Finance systems — they must pass through the firewall, which can detect and block the lateral movement. Perimeter firewalls address north-south traffic (external → internal) — not covered by VLANs alone. VLANs don't encrypt traffic. VLANs can provide some resilience but redundancy is not their primary security function."
 },
 {
  "id": 39,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company wants employees working from home to access internal systems securely. The security team wants ALL traffic from remote devices — including internet browsing — to route through the corporate network for inspection and filtering. Which VPN configuration should be used?",
  "opts": [
   "A. Split tunnel — only corporate traffic routes through the VPN",
   "B. Full tunnel — all traffic routes through the VPN",
   "C. Clientless SSL VPN — only web applications are accessible",
   "D. Always-on VPN with per-app enforcement"
  ],
  "correct": 1,
  "exp": "Full tunnel (also called full split tunnel off) routes all traffic from the remote device through the VPN to the corporate network. This allows corporate security controls (web filtering, DLP, threat inspection) to apply to all employee traffic, including internet browsing. Split tunnel (A) routes only corporate-bound traffic through the VPN, letting internet traffic bypass corporate controls — good for bandwidth but reduces visibility and security. Clientless SSL VPN only provides browser-based access to specific web apps. The requirement to inspect ALL traffic = full tunnel."
 },
 {
  "id": 40,
  "obj": "3.3",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation wants to protect customer data stored in a cloud database so that even if the cloud provider is compromised at the infrastructure level, the data remains unreadable. Which control BEST addresses this?",
  "opts": [
   "A. Rely on the cloud provider's built-in encryption at rest",
   "B. Implement client-side encryption where the customer controls the keys outside the cloud provider",
   "C. Store data in a private cloud instead",
   "D. Apply TLS in transit between the application and database"
  ],
  "correct": 1,
  "exp": "Client-side (customer-managed) encryption means data is encrypted before it leaves the customer's environment, using keys the cloud provider never has access to. Even if the provider is compromised, they see only ciphertext they cannot decrypt. Provider-managed encryption (A) protects against physical disk theft but not against a compromised provider who holds the keys. TLS in transit (D) protects data while moving between systems — not data at rest in the database. Moving to a private cloud (C) changes the threat model but doesn't specifically address provider-level compromise. Key management separation = the critical control here."
 },
 {
  "id": 41,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A systems administrator is hardening a new Linux server. After disabling unnecessary services and closing unused ports, the admin discovers a service listening on port 21. This service is not required for the server's function. What should the admin do?",
  "opts": [
   "A. Change the service to use port 2121 instead",
   "B. Configure a firewall rule to block port 21 from external access only",
   "C. Disable and remove the FTP service entirely",
   "D. Enable FTPS to secure the existing service"
  ],
  "correct": 2,
  "exp": "Port 21 = FTP (File Transfer Protocol) — unencrypted, legacy file transfer protocol. The principle of least functionality states that systems should run only services required for their intended purpose. If FTP is not needed, it should be disabled and removed — not just firewalled or moved to another port, as the service still represents an attack surface. Changing the port (A) provides security through obscurity — a determined attacker will find it. Firewall rules alone (B) don't remove the attack surface (internal threats, firewall misconfigurations). Enabling FTPS (D) secures an unnecessary service. Disable and remove = attack surface reduction."
 },
 {
  "id": 42,
  "obj": "3.3",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company needs to ensure that its primary production environment can failover to a backup site with minimal data loss (RPO near zero) and minimal recovery time (RTO near zero). Which configuration BEST meets these requirements?",
  "opts": [
   "A. Daily tape backups stored offsite",
   "B. Warm site with weekly data synchronisation",
   "C. Hot site with synchronous real-time data replication",
   "D. Cold site with on-demand provisioning"
  ],
  "correct": 2,
  "exp": "RPO (Recovery Point Objective) = maximum acceptable data loss. RTO (Recovery Time Objective) = maximum acceptable downtime. Near-zero RPO requires synchronous real-time replication — every write is committed to both sites simultaneously, so no data is lost on failover. Near-zero RTO requires a hot site — fully operational, pre-provisioned environment ready to accept traffic immediately. Daily tapes = high RPO (up to 24h data loss), high RTO (hours to restore). Warm site with weekly sync = high RPO. Cold site = highest RTO. Hot site + synchronous replication is the most expensive but only option for near-zero RPO and RTO."
 },
 {
  "id": 43,
  "obj": "3.3",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A developer is building an application that connects to a third-party payment API. To avoid storing customer credit card numbers in the company's database, the application exchanges card numbers for non-sensitive reference tokens through the payment provider. Which technique is being used?",
  "opts": [
   "A. Encryption",
   "B. Hashing",
   "C. Tokenisation",
   "D. Data masking"
  ],
  "correct": 2,
  "exp": "Tokenisation replaces sensitive data (PAN — Primary Account Number) with a non-sensitive, randomly generated token. The actual card number is stored only in the payment provider's secure token vault. The company's systems only ever handle the token — if their database is breached, attackers find only useless tokens. This is the PCI-DSS recommended approach for reducing scope. Encryption (A) stores the actual data encrypted — it can be decrypted if the key is compromised. Hashing (B) is one-way and can't be reversed to retrieve the original number for legitimate transactions. Data masking (D) obscures data for display (e.g., showing only last 4 digits) but doesn't replace it in storage."
 },
 {
  "id": 45,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation places its publicly accessible web servers in a network segment that is connected to the internet AND to the internal network, but with firewalls controlling all traffic between these segments. Which architecture is this?",
  "opts": [
   "A. Air-gapped network",
   "B. Extranet",
   "C. DMZ (Demilitarised Zone)",
   "D. Overlay network"
  ],
  "correct": 2,
  "exp": "A DMZ (Demilitarised Zone / screened subnet) is a network segment that sits between the internet and the internal network, protected by firewalls on both sides. Internet-facing servers (web, email, DNS) live in the DMZ — accessible from the internet but isolated from internal systems. Even if a DMZ server is compromised, the internal firewall limits what the attacker can reach. An air-gapped network is physically isolated from the internet. An extranet provides controlled external partner access. An overlay network is a virtual network built on top of an existing physical network (VXLAN, SD-WAN). The two-firewall Internet→DMZ→Internal architecture = DMZ."
 },
 {
  "id": 46,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company deploys a proxy server that intercepts outbound HTTPS connections from internal users, decrypts the traffic, inspects it for malware and data exfiltration, re-encrypts it, then forwards it to the destination. Users' devices have a corporate CA certificate installed so their browsers trust the proxy's re-issued certificates. Which technology is this?",
  "opts": [
   "A. VPN concentrator",
   "B. TLS/SSL inspection (SSL bump)",
   "C. Web Application Firewall (WAF)",
   "D. DNS sinkhole"
  ],
  "correct": 1,
  "exp": "TLS/SSL inspection (also called SSL interception, SSL bumping, or HTTPS inspection) works as a transparent man-in-the-middle — it terminates the TLS session from the client, decrypts and inspects the plaintext, then establishes a new TLS connection to the destination. The corporate CA cert installed on endpoints allows the proxy to issue re-signed certificates that browsers trust. This enables content inspection of encrypted traffic without endpoint agents. A WAF (C) protects web applications from inbound attacks — it doesn't inspect employee outbound browsing. A VPN concentrator manages VPN tunnels. DNS sinkhole redirects malicious domain lookups."
 },
 {
  "id": 47,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security team wants to ensure employees working on their personal devices only access corporate email and applications — and that if the device is lost, corporate data can be wiped without affecting personal photos and apps. Which MDM capability should be implemented?",
  "opts": [
   "A. Full device remote wipe",
   "B. Application blacklisting",
   "C. Containerisation / managed workspace profile",
   "D. Device encryption enforcement"
  ],
  "correct": 2,
  "exp": "Containerisation creates an isolated, encrypted corporate workspace (container/profile) on the personal device. Corporate apps and data live entirely within this container. A selective remote wipe removes only the corporate container — leaving personal photos, messages, and apps completely untouched. This is the BYOD best practice. Full device wipe (A) erases everything including personal data — appropriate for company-owned devices, not BYOD. Application blacklisting (B) prevents specific apps from running but doesn't segregate data. Device encryption (D) protects all data but doesn't separate corporate from personal. Containerisation = data separation enabling BYOD."
 },
 {
  "id": 49,
  "obj": "3.3",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation is implementing infrastructure as code (IaC) to deploy cloud environments. A security engineer wants to ensure that sensitive values like database passwords and API keys are never hardcoded in the IaC templates stored in the code repository. Which solution addresses this?",
  "opts": [
   "A. Encrypt the entire IaC template file",
   "B. Use a secrets management vault to store and retrieve secrets dynamically at deployment time",
   "C. Store secrets in environment variables on developer workstations",
   "D. Use read-only access to the code repository"
  ],
  "correct": 1,
  "exp": "Secrets management vaults (HashiCorp Vault, AWS Secrets Manager, Azure Key Vault) store secrets centrally and provide them to applications/deployments dynamically at runtime. IaC templates reference the secret by name — never containing the actual value. This prevents secrets from being committed to version control (a common, high-severity finding). Encrypting the template (A) still contains the secret and key management is complex. Environment variables on developer machines (C) are a partial fix but not a scalable solution and can be exposed. Read-only repo access (D) doesn't prevent accidental commits of secrets. Secrets vault = separation of secrets from code."
 },
 {
  "id": 50,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security engineer is asked to recommend a solution that can detect and block exploitation attempts against a web application in real time, including OWASP Top 10 attacks like SQLi and XSS, without modifying the application code. Which technology BEST meets this?",
  "opts": [
   "A. Network-based IDS",
   "B. Web Application Firewall (WAF)",
   "C. Next-Generation Firewall (NGFW)",
   "D. Unified Threat Management (UTM)"
  ],
  "correct": 1,
  "exp": "A WAF operates at Layer 7 (application layer) and specifically understands HTTP/HTTPS traffic. It inspects and filters requests and responses, blocking attacks like SQL injection, XSS, CSRF, and other OWASP Top 10 vulnerabilities based on rules and behaviour analysis — without requiring application code changes. A network IDS (A) detects but doesn't block, and typically lacks deep HTTP inspection. An NGFW (C) can inspect application traffic but is not specialised for web application attack patterns. UTM (D) combines multiple functions but WAF-specific capabilities are more granular. WAF = purpose-built web application protection."
 },
 {
  "id": 51,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company wants to deploy wireless access for guest users in their office. The guest network should be isolated from the internal corporate network, preventing guests from accessing internal servers or employee devices. Which network architecture achieves this?",
  "opts": [
   "A. Use the same SSID with different WPA2 passwords for employees and guests",
   "B. Deploy a separate VLAN for guest wireless traffic with firewall rules preventing access to internal VLANs",
   "C. Enable client isolation on the employee wireless network",
   "D. Use MAC address filtering on the corporate access points"
  ],
  "correct": 1,
  "exp": "A separate guest VLAN with firewall/ACL rules blocking access to internal VLANs creates proper network isolation. Guest traffic stays within its VLAN and can only reach the internet — not the corporate network or other internal resources. Same SSID with different passwords (A) doesn't provide network isolation — users on the same SSID are on the same network segment. Client isolation (C) prevents guests from communicating with each other but doesn't prevent access to corporate network resources on other VLANs. MAC filtering (D) is trivially bypassed by MAC spoofing and doesn't segment the network."
 },
 {
  "id": 52,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An engineer configures a server to listen on port 443 for incoming connections and presents a valid TLS certificate. Clients connect successfully and traffic is encrypted. Which security attribute does this PRIMARILY provide, and which attribute is NOT automatically provided?",
  "opts": [
   "A. Provides confidentiality; does NOT automatically provide server authentication",
   "B. Provides confidentiality and server authentication; does NOT automatically provide client authentication",
   "C. Provides integrity only; encryption must be separately configured",
   "D. Provides all three: confidentiality, integrity, and mutual authentication"
  ],
  "correct": 1,
  "exp": "Standard TLS (HTTPS) provides: Confidentiality (encrypted traffic), Integrity (MAC prevents tampering), and Server authentication (the certificate proves the server's identity to the client). What is NOT provided automatically is client authentication — the server cannot verify who the client is without additional configuration (mutual TLS/mTLS requires the client to also present a certificate). This is why web applications still require username/password or SSO — TLS alone doesn't authenticate users. Mutual TLS (mTLS) is used for API security and zero-trust service mesh where both sides must authenticate with certificates."
 },
 {
  "id": 91,
  "obj": "3.3",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security engineer is reviewing a company's backup strategy. Backups run daily at midnight and are kept for 30 days. A ransomware attack encrypts all files at 11:55 PM. How much data could the company potentially lose?",
  "opts": [
   "A. 30 days of data",
   "B. Up to 23 hours and 55 minutes of data — since the last backup",
   "C. No data — the backup ran at midnight",
   "D. Only the files actively open at the time of encryption"
  ],
  "correct": 1,
  "exp": "RPO (Recovery Point Objective) defines how much data loss is acceptable. If backups run daily at midnight and ransomware hits at 11:55 PM, the most recent backup is from the previous midnight — nearly 24 hours earlier. Up to 23h55m of data could be lost. This illustrates why organisations with low RPO requirements need more frequent backups or continuous replication. The backup at midnight ran AFTER the encryption in this scenario — but even if it hadn't, you'd still lose the day's work. Retention period (30 days) is about how far back you can restore, not how much data you lose."
 },
 {
  "id": 92,
  "obj": "3.3",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company stores customer data in AWS S3. A developer accidentally makes the S3 bucket publicly accessible. The data is encrypted with AES-256 using keys managed by AWS KMS. What is the PRIMARY residual risk?",
  "opts": [
   "A. None — the data is encrypted so it cannot be read",
   "B. AWS could decrypt the data at any time since they manage the keys",
   "C. The data is exposed to anyone with internet access — AWS holds the decryption keys and could be compelled to provide them",
   "D. The encryption is too weak to protect the data"
  ],
  "correct": 2,
  "exp": "When AWS manages the KMS keys (AWS-managed CMK), AWS controls the keys. If the bucket is publicly accessible, the data is technically encrypted but AWS holds the keys — they could decrypt it under legal compulsion, internal breach, or misconfiguration. The real fix is two-pronged: make the bucket private AND use customer-managed keys (CMK) where the customer controls key material. AES-256 is strong encryption — the weakness is key custody, not algorithm strength. This is the shared responsibility model in action: AWS secures the infrastructure, the customer must configure access controls correctly."
 },
 {
  "id": 93,
  "obj": "3.3",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation runs three RAID-5 arrays. A storage administrator informs the security team that two drives in the same RAID-5 array have failed simultaneously. What is the impact?",
  "opts": [
   "A. No impact — RAID-5 can survive multiple drive failures",
   "B. Complete data loss — RAID-5 can only tolerate one drive failure at a time",
   "C. Reduced performance only — RAID-5 automatically rebuilds from the remaining drives",
   "D. 50% data loss — one failed drive loses half the array"
  ],
  "correct": 1,
  "exp": "RAID-5 uses distributed parity across all drives and can tolerate exactly ONE drive failure — it can rebuild missing data using the parity from the remaining drives. A second drive failure before rebuild completes = complete data loss for that array. This is why RAID is NOT a backup — it provides availability but not data protection against multiple simultaneous failures. RAID-6 tolerates two simultaneous failures. The correct response: immediately replace the failed drives and restore from backup. RAID levels to know: RAID-0 (striping, no redundancy), RAID-1 (mirroring), RAID-5 (striping + parity, 1 failure tolerance), RAID-6 (2 failure tolerance), RAID-10 (striping + mirroring)."
 },
 {
  "id": 94,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A development team embeds a security agent directly into their Java application server. The agent monitors application execution from within the runtime, detecting and blocking SQL injection attempts without relying on any external network device. Which technology is being used?",
  "opts": [
   "A. Web Application Firewall (WAF)",
   "B. Runtime Application Self-Protection (RASP)",
   "C. Intrusion Prevention System (IPS)",
   "D. Static Application Security Testing (SAST)"
  ],
  "correct": 1,
  "exp": "(B) is correct. RASP is embedded inside the application runtime and can detect and block attacks like SQL injection from within the running process, without requiring an external network appliance. (A) A WAF sits in front of the application as a network device or reverse proxy, not inside the runtime. (C) An IPS monitors network traffic for malicious patterns but does not operate inside the application. (D) SAST analyzes source code before deployment, not during runtime execution."
 },
 {
  "id": 95,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A systems administrator is hardening a Windows server and runs <code>netstat -an</code>, finding services listening on ports 21, 23, 80, and 443. The server's only purpose is to host a secure internal web application. Which ports should be disabled?",
  "opts": [
   "A. Disable 443 — HTTPS is not needed for internal applications",
   "B. Disable 21 (FTP) and 23 (Telnet) — insecure legacy protocols not needed for a web server",
   "C. Disable 80 and keep 443 — HTTP should redirect to HTTPS but not run separately",
   "D. Both B and C — disable 21, 23, and 80"
  ],
  "correct": 3,
  "exp": "Attack surface reduction: disable everything not needed. Port 21 (FTP) — unencrypted file transfer, not needed for a web server. Port 23 (Telnet) — unencrypted remote admin, should be replaced with SSH (22). Port 80 (HTTP) — while some argue it should redirect to HTTPS, for a secure internal app it should be disabled or strictly redirected. Port 443 (HTTPS) — keep, this is the application's purpose. The principle of least functionality: a web server should only run services required for its web function. FTP and Telnet are particular red flags — both transmit credentials in plaintext and are almost never legitimately needed."
 },
 {
  "id": 96,
  "obj": "3.3",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company is migrating to a hybrid cloud environment. The security team needs to ensure that data classified as \"Highly Confidential\" never leaves the on-premises environment and is never processed by cloud services. Which control enforces this?",
  "opts": [
   "A. Encrypt all data before uploading to the cloud",
   "B. Data Loss Prevention (DLP) policy that blocks transfer of Highly Confidential data to cloud destinations",
   "C. Use a private cloud instead of a public cloud provider",
   "D. Enable MFA for all cloud service accounts"
  ],
  "correct": 1,
  "exp": "DLP (Data Loss Prevention) can inspect data in transit and enforce policies based on data classification labels. A DLP policy blocking \"Highly Confidential\" data from being sent to cloud destinations enforces the requirement at the data level — regardless of which application or user attempts the transfer. Encryption (A) protects data in transit but doesn't prevent it from leaving the on-premises environment. A private cloud (C) changes the hosting model but doesn't automatically enforce classification-based movement restrictions. MFA (D) secures authentication but doesn't restrict data movement by classification. DLP = enforcement based on data content and classification."
 },
 {
  "id": 97,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation uses WPA2-Enterprise for corporate Wi-Fi. Employees authenticate using their Active Directory credentials via RADIUS. A new employee reports they cannot connect to the corporate Wi-Fi from their personal laptop despite having valid AD credentials. What is the MOST likely cause?",
  "opts": [
   "A. The RADIUS server is offline",
   "B. The employee's device certificate or supplicant is not configured for 802.1X authentication",
   "C. WPA2-Enterprise does not support personal devices",
   "D. The employee's AD password has expired"
  ],
  "correct": 1,
  "exp": "WPA2-Enterprise uses 802.1X authentication which requires a properly configured supplicant (wireless client software) and typically a client certificate or specific EAP configuration. Personal devices don't automatically have corporate 802.1X supplicant profiles or client certificates installed — IT must provision the configuration (certificate, RADIUS server details, EAP method). A RADIUS outage (A) would affect ALL users, not just one. WPA2-Enterprise supports personal devices IF they're properly configured. An expired password (D) would produce an authentication failure message, not a connection failure before auth. Missing supplicant config = the most common new-device Wi-Fi issue."
 },
 {
  "id": 98,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A developer is implementing an API that handles sensitive financial data. To protect data transmitted between the mobile app and the API, the developer implements certificate pinning. What does this prevent?",
  "opts": [
   "A. SQL injection attacks against the API endpoint",
   "B. Man-in-the-middle attacks that use fraudulently issued or intercepted TLS certificates",
   "C. Brute force attacks against the API authentication",
   "D. DDoS attacks targeting the API"
  ],
  "correct": 1,
  "exp": "Certificate pinning hardcodes the expected server certificate (or its public key hash) directly into the mobile app. When the app connects, it checks that the presented certificate matches the pinned value — rejecting any other certificate, even one validly issued by a trusted CA. This prevents MitM attacks where an attacker uses a fraudulently issued certificate (or a corporate TLS inspection proxy) to intercept traffic. Without pinning, any certificate trusted by the device's CA store would be accepted. Certificate pinning is common in banking and financial apps. It doesn't address SQLi, brute force, or DDoS — those are different attack vectors."
 },
 {
  "id": 99,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company's IT team is deploying IoT sensors throughout a manufacturing facility. The sensors use an embedded OS that cannot be updated and communicate over a proprietary protocol. Which security control BEST reduces the risk these devices introduce?",
  "opts": [
   "A. Enable full disk encryption on each sensor",
   "B. Network segmentation — place IoT devices on an isolated VLAN with strict firewall rules",
   "C. Deploy antivirus software on each sensor",
   "D. Require MFA for sensor authentication"
  ],
  "correct": 1,
  "exp": "IoT devices with unupdatable firmware and proprietary protocols are a classic compensating control scenario. Since you cannot patch or install security software on them, network segmentation is the primary mitigation: isolate the IoT VLAN from corporate systems, allow only required traffic (sensor data to collection server), block internet access from the IoT VLAN, and monitor for anomalies. Full disk encryption is not applicable to most IoT sensors. Antivirus cannot run on embedded OS devices. MFA is impractical for automated sensor communication. Isolation + least-privilege firewall rules = the standard IoT security approach."
 },
 {
  "id": 100,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security architect is designing a system where multiple microservices communicate with each other within a Kubernetes cluster. Each service needs to verify the identity of the service it's communicating with, and all inter-service traffic must be encrypted. Which approach BEST meets this?",
  "opts": [
   "A. Deploy a perimeter firewall around the cluster",
   "B. Implement a service mesh with mutual TLS (mTLS)",
   "C. Use API keys stored in environment variables for service authentication",
   "D. Enable network policies to block all external traffic"
  ],
  "correct": 1,
  "exp": "A service mesh (Istio, Linkerd) implements mutual TLS (mTLS) automatically between all microservices — each service presents a certificate proving its identity, and both sides authenticate each other. This implements Zero Trust at the service level: no implicit trust between services even inside the cluster. API keys in environment variables (C) are frequently accidentally exposed and don't provide mutual authentication. A perimeter firewall (A) protects external traffic but not east-west traffic between services in the same cluster. Network policies (D) control traffic flow but don't encrypt it or authenticate service identities. Service mesh + mTLS = the modern microservices security standard."
 },
 {
  "id": 101,
  "obj": "3.3",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation performs full backups every Sunday and incremental backups Monday through Saturday. A failure occurs on Friday afternoon. What is the MAXIMUM number of backup sets needed to restore to Thursday's end-of-day state?",
  "opts": [
   "A. 1 — just the Thursday incremental",
   "B. 2 — Sunday full + Thursday incremental",
   "C. 5 — Sunday full + Monday, Tuesday, Wednesday, Thursday incrementals",
   "D. 6 — all backups from Sunday through Thursday"
  ],
  "correct": 2,
  "exp": "Incremental backups only capture changes since the LAST backup (full or incremental). To restore to Thursday's state: Sunday full backup (baseline) + Monday incremental (changes Mon) + Tuesday incremental (changes Tue) + Wednesday incremental (changes Wed) + Thursday incremental (changes Thu) = 5 backup sets total. This is the trade-off of incremental vs differential: incrementals use less storage per night but require more sets for restore. Differential backups capture all changes since the last FULL backup — restore requires only 2 sets (Sunday full + Thursday differential) but each nightly backup grows larger. Restore complexity vs storage efficiency."
 },
 {
  "id": 102,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security engineer is configuring a next-generation firewall (NGFW). Unlike a traditional stateful firewall, which additional capability does an NGFW provide?",
  "opts": [
   "A. The ability to filter traffic based on IP address and port number",
   "B. Deep packet inspection to identify and control applications regardless of port",
   "C. The ability to block traffic from specific geographic regions",
   "D. Network address translation (NAT) for internal hosts"
  ],
  "correct": 1,
  "exp": "Traditional stateful firewalls operate at Layers 3-4 — they filter based on IP, port, protocol, and connection state. NGFWs add Layer 7 (application layer) inspection: they can identify the actual application (not just the port), enforce application-aware policies (allow Skype audio but block file transfer), integrate threat intelligence, perform SSL inspection, and include IPS functionality. An NGFW can block Dropbox even if it runs on port 443 (HTTPS) by identifying the application signature. IP/port filtering (A) is traditional firewall capability. Geo-blocking (C) is a feature some NGFWs add but isn't the defining NGFW capability. NAT (D) is a basic router/firewall function."
 },
 {
  "id": 103,
  "obj": "3.1",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company is evaluating cloud deployment models. They need complete control over their infrastructure and data, but want to benefit from cloud technologies like virtualisation and self-service provisioning. External parties must never share their infrastructure. Which deployment model fits?",
  "opts": [
   "A. Public cloud",
   "B. Community cloud",
   "C. Hybrid cloud",
   "D. Private cloud"
  ],
  "correct": 3,
  "exp": "A private cloud is dedicated exclusively to one organisation — either on-premises or hosted by a provider in a dedicated environment. It provides cloud technologies (virtualisation, self-service, elasticity) while maintaining complete control and no infrastructure sharing with external parties. Public cloud shares infrastructure among multiple tenants (multi-tenancy). Community cloud is shared among organisations with similar requirements (e.g., government agencies). Hybrid cloud combines private and public cloud. The key requirements: complete control + no shared infrastructure + cloud technologies = private cloud. Trade-off: higher cost, requires more management, less elastic than public cloud."
 },
 {
  "id": 104,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "During a security review, an analyst finds that a legacy application transmits login credentials over port 80 using HTTP. The application cannot be modified. Which solution provides the QUICKEST security improvement without replacing the application?",
  "opts": [
   "A. Block port 80 at the firewall",
   "B. Deploy TLS in front of the application using a reverse proxy to handle HTTPS termination",
   "C. Require users to use a VPN before accessing the application",
   "D. Implement a WAF to inspect the HTTP traffic"
  ],
  "correct": 1,
  "exp": "A reverse proxy (like nginx or HAProxy) can sit in front of the legacy application and handle TLS termination — users connect to the proxy over HTTPS (443), the proxy decrypts and forwards to the backend over HTTP (80) on the internal network. The application code is untouched, but external traffic is now encrypted. This is a common technique for securing legacy applications. Blocking port 80 (A) would break the application without providing a secure alternative. VPN (C) is a valid compensating control but requires client software and setup for every user. A WAF (D) adds application-layer protection but doesn't encrypt the credentials in transit. Reverse proxy TLS termination = fastest win."
 },
 {
  "id": 142,
  "type": "mcq",
  "domain": 3,
  "obj": "3.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation migrates from an on-premises data centre to AWS. The security team discovers that the cloud vendor is responsible for the physical security of servers, the hypervisor, and the global network infrastructure. The company remains responsible for OS patching, firewall configurations, and application security. Which cloud model is this?",
  "opts": [
   "A. SaaS",
   "B. PaaS",
   "C. IaaS",
   "D. Private cloud"
  ],
  "correct": 2,
  "exp": "IaaS (Infrastructure as a Service) shared responsibility: the CSP (AWS, Azure, GCP) owns the physical hardware, hypervisor, and network infrastructure. The CUSTOMER owns: OS, patches, middleware, runtime, applications, data, and security configurations (firewalls, IAM). This is the most \"hands on\" cloud model for the customer. PaaS removes OS and runtime responsibility from the customer. SaaS leaves only data and user management to the customer. Private cloud is dedicated infrastructure — not the AWS model described. AWS EC2 is a classic IaaS example. The OS = customer responsibility is the defining IaaS characteristic."
 },
 {
  "id": 143,
  "type": "mcq",
  "domain": 3,
  "obj": "3.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company has sensitive workloads that must stay on-premises for regulatory reasons, but wants to use public cloud for dev/test and burst capacity. Customer-facing applications will run in public cloud. Which deployment model does this describe?",
  "opts": [
   "A. Community cloud",
   "B. Multi-cloud",
   "C. Hybrid cloud",
   "D. Private cloud"
  ],
  "correct": 2,
  "exp": "Hybrid cloud combines on-premises (or private cloud) infrastructure with public cloud, connected and integrated to work as a unified environment. Sensitive regulated workloads stay on-prem; dev/test and scalable public-facing workloads run in the public cloud. This is the most common enterprise cloud strategy. Community cloud is shared by organisations with similar requirements (e.g., government agencies). Multi-cloud uses multiple public cloud providers (e.g., AWS + Azure) — doesn't necessarily involve on-premises. The on-premises + public cloud combination = hybrid cloud. A key challenge: data sovereignty and consistent security policy enforcement across both environments."
 },
 {
  "id": 144,
  "type": "mcq",
  "domain": 3,
  "obj": "3.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A network architect is designing a new office network. Printers, IP phones, workstations, and servers all share the same physical network. The architect recommends separating them into different network segments. Which security principle does this PRIMARILY implement?",
  "opts": [
   "A. Encryption in transit",
   "B. Network segmentation to limit the attack surface and blast radius",
   "C. Defense in depth through redundant firewalls",
   "D. Least functionality by disabling unused services"
  ],
  "correct": 1,
  "exp": "Network segmentation divides a flat network into separate segments (VLANs, subnets) with controlled communication between them. Security benefits: limits blast radius if one segment is compromised (a compromised printer can't directly reach servers), contains malware spread, enables targeted monitoring, and implements least privilege at the network level. Separating printers (often run old firmware, high vulnerability) from servers is specifically recommended. A flat network where everything can communicate with everything else is a single-segment failure. Segmentation ≠ encryption in transit. Defense in depth uses multiple layered controls (segmentation is one layer). Least functionality is about disabling services, not network design."
 },
 {
  "id": 145,
  "type": "mcq",
  "domain": 3,
  "obj": "3.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A developer accidentally commits an AWS access key and secret key to a public GitHub repository. The keys have AdministratorAccess permissions. Within minutes, attackers are using the keys to spin up EC2 instances for cryptocurrency mining. What immediate action should be taken FIRST?",
  "opts": [
   "A. Delete the GitHub repository",
   "B. Rotate all employee passwords",
   "C. Immediately deactivate/delete the exposed IAM credentials in AWS",
   "D. Scan all EC2 instances for malware"
  ],
  "correct": 2,
  "exp": "The immediate priority is revoking the exposed credentials — deactivating or deleting the IAM access key in the AWS console stops all ongoing and future abuse with those credentials. Until revoked, attackers continue to have admin access. Delete the GitHub repo (A) removes the public exposure but doesn't stop already-scraped credentials — attackers have automated tools that scrape new GitHub commits within seconds. Rotating employee passwords (B) is irrelevant. Scanning EC2 instances (D) is incident investigation but doesn't stop active credential abuse. Containment first: revoke credentials → then investigate. AWS GuardDuty can detect credential abuse automatically."
 },
 {
  "id": 146,
  "type": "mcq",
  "domain": 3,
  "obj": "3.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company must ensure all data classified as \"Confidential\" is encrypted when stored on laptops, in case a device is lost or stolen. Which technology provides encryption specifically for data at rest on an endpoint?",
  "opts": [
   "A. TLS/SSL",
   "B. Full Disk Encryption (FDE) using BitLocker or FileVault",
   "C. IPSec tunnel mode",
   "D. S/MIME email encryption"
  ],
  "correct": 1,
  "exp": "Full Disk Encryption (FDE) encrypts the entire drive — all data at rest is encrypted. BitLocker (Windows) and FileVault (macOS) are built-in FDE solutions. If a laptop is stolen, the data is unreadable without the decryption key (PIN, password, or TPM). TLS/SSL encrypts data in transit over networks. IPSec encrypts network traffic between sites. S/MIME encrypts email. Data at rest = FDE. Data in transit = TLS/IPSec. Data in use = TEE/Confidential Computing. This three-state classification (at rest, in transit, in use) is fundamental to Security+ and maps to the three data states tested throughout the exam."
 },
 {
  "id": 147,
  "type": "mcq",
  "domain": 3,
  "obj": "3.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation's DLP system detects that a large volume of customer PII is being sent via email to an external address. The DLP policy is set to \"monitor and alert\" only. The data leaves the organisation before the analyst reviews the alert. Which DLP policy action would have PREVENTED the data loss?",
  "opts": [
   "A. Monitor and log",
   "B. Alert and notify manager",
   "C. Block and quarantine",
   "D. Encrypt and forward"
  ],
  "correct": 2,
  "exp": "DLP policy actions in order of aggressiveness: Monitor/Log (record only — no user impact), Alert/Notify (send alert — doesn't stop the action), Block/Quarantine (prevents the transfer and holds the message for review), Encrypt and forward (allows transfer but encrypts). Only \"Block and quarantine\" would have prevented the data from leaving. The scenario shows a classic DLP configuration gap: monitoring is insufficient when the risk is high. For sensitive PII, the policy should block outbound transfers to non-approved external addresses. DLP can also be applied at endpoints (USB transfers), network egress, and cloud uploads. Block = prevention; monitor = detection only."
 },
 {
  "id": 148,
  "type": "mcq",
  "domain": 3,
  "obj": "3.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A software company publishes their application with a digital signature. A customer downloads the application and their OS verifies the signature before installation. What TWO security properties does this provide?",
  "opts": [
   "A. Confidentiality and availability",
   "B. Integrity and authentication of the software publisher",
   "C. Encryption and non-repudiation only",
   "D. Availability and integrity"
  ],
  "correct": 1,
  "exp": "Digital signatures provide two properties: Integrity (any modification to the code after signing invalidates the signature — the customer can verify the code is unchanged) and Authentication (the signature is tied to the publisher's private key — it proves the software came from that publisher). This is why code signing certificates are highly valuable targets for attackers — a compromised code signing key lets them distribute malware as legitimate software (see the SolarWinds attack). Confidentiality is not provided — the code is not encrypted. Non-repudiation is also provided (the publisher cannot deny signing it) but CompTIA most directly maps this to integrity + authentication of source."
 },
 {
  "id": 169,
  "type": "multi",
  "domain": 3,
  "obj": "3.2",
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "A network engineer is designing a highly available web application. The application must continue serving traffic even if one of two data centres experiences a complete outage. Which TWO design elements are REQUIRED to achieve this?",
  "opts": [
   "A. RAID-5 storage on the primary server",
   "B. Active-active configuration across both data centres with real-time data synchronisation",
   "C. Daily backup tapes shipped to an offsite location",
   "D. A load balancer distributing traffic across both data centres",
   "E. Firewall rules blocking all external traffic"
  ],
  "correct": [
   1,
   3
  ],
  "exp": "Active-active across two DCs (B): Both data centres are simultaneously serving traffic. If one fails, the other absorbs all traffic — no failover delay. Requires real-time data sync. Load balancer (D): distributes requests across both DCs and detects when one DC is unavailable, routing all traffic to the surviving DC. These two work together for high availability. RAID-5 (A) provides disk redundancy within one server but doesn't survive a data centre outage. Daily backups (C) provide data recovery but with high RTO. Blocking external traffic (E) would make the app unreachable. Active-active + load balancing = the HA architecture."
 },
 {
  "id": 173,
  "type": "mcq",
  "domain": 3,
  "obj": "3.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company uses AWS and Azure simultaneously for different workloads. They use different identity systems in each cloud, different security monitoring tools, and different compliance frameworks per cloud. A consultant warns this creates security management complexity and gaps. What term describes this architecture?",
  "opts": [
   "A. Hybrid cloud",
   "B. Multi-cloud",
   "C. Community cloud",
   "D. Distributed cloud"
  ],
  "correct": 1,
  "exp": "Multi-cloud uses multiple public cloud providers (AWS + Azure, or AWS + GCP, etc.) for different workloads. The consultant's concern is real — multi-cloud creates challenges: fragmented security visibility (multiple SIEM feeds), inconsistent IAM, duplicated compliance efforts, and skills gaps across cloud platforms. Hybrid cloud combines on-premises with cloud. Community cloud is shared between similar organisations. Distributed cloud is edge/distributed deployment. Multi-cloud benefits: avoid vendor lock-in, use best-of-breed services. Risks: security and operational complexity. CompTIA tests both the definition and the security implications of multi-cloud environments."
 },
 {
  "id": 180,
  "type": "mcq",
  "domain": 3,
  "obj": "3.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A cloud security engineer enables AWS VPC Flow Logs for all subnets. The logs show a large volume of REJECTED traffic from an internal EC2 instance to multiple ports on external IP addresses. No alert fired because the traffic was blocked. What does this pattern MOST likely indicate?",
  "opts": [
   "A. Normal operation — rejected traffic is expected and safe to ignore",
   "B. The EC2 instance may be compromised and attempting outbound connections that are being blocked by security groups",
   "C. The VPC Flow Logs are misconfigured and generating false data",
   "D. The security groups are too restrictive and should be loosened"
  ],
  "correct": 1,
  "exp": "REJECT entries in VPC Flow Logs show traffic that was attempted but blocked by security groups or NACLs. An EC2 instance generating high volumes of outbound REJECT traffic to multiple external IPs on varied ports is a strong indicator of compromise — the malware is attempting C2 connections or port scanning but being blocked by the security group. This is a valuable detection: the security control is working, but the underlying compromise still needs to be investigated and remediated. Ignoring rejected traffic (A) misses the compromise signal. Flow logs capture network metadata even for blocked traffic — this is why logging REJECT traffic is valuable. Investigate the EC2 instance immediately."
 },
 {
  "id": 265,
  "type": "mcq",
  "domain": 3,
  "obj": "3.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A startup deploys its application using AWS Lambda functions that execute in response to API Gateway requests. The team does not provision or manage any servers, and they are billed only when code executes. Which cloud computing model does this describe?",
  "opts": [
   "A. Infrastructure as a Service (IaaS)",
   "B. Platform as a Service (PaaS)",
   "C. Serverless / Function as a Service (FaaS)",
   "D. Software as a Service (SaaS)"
  ],
  "correct": 2,
  "exp": "Serverless / FaaS (Function as a Service) allows developers to deploy individual functions that execute on demand without managing or provisioning servers. AWS Lambda, Azure Functions, and Google Cloud Functions are FaaS offerings. Billing is per-execution, not per-server-hour. IaaS (A) requires the customer to manage VMs and OS. PaaS (B) provides a platform (e.g., Heroku, Elastic Beanstalk) but the customer still manages the application runtime. SaaS (D) is a fully managed application (e.g., Office 365). The key indicator is no server management + event-driven execution + per-invocation billing = serverless/FaaS."
 },
 {
  "id": 266,
  "type": "mcq",
  "domain": 3,
  "obj": "3.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A development team breaks a monolithic e-commerce application into small, independently deployable services — one for user authentication, one for product catalog, one for payments, and one for shipping. Each service communicates via REST APIs. Which architecture pattern is being used?",
  "opts": [
   "A. Serverless computing",
   "B. Microservices architecture",
   "C. Infrastructure as Code (IaC)",
   "D. Containerization"
  ],
  "correct": 1,
  "exp": "Microservices architecture decomposes a monolithic application into small, loosely coupled, independently deployable services. Each service owns its own data, has a single responsibility, and communicates via lightweight protocols (REST, gRPC). Security implications: each service needs its own authentication/authorization, the attack surface increases with more network communication paths, and a service mesh with mTLS is recommended. Serverless (A) is a hosting model, not an architecture pattern. IaC (C) is about provisioning infrastructure through code. Containerization (D) is a deployment technology often used WITH microservices but is not the architecture pattern itself."
 },
 {
  "id": 267,
  "type": "mcq",
  "domain": 3,
  "obj": "3.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security team discovers that a developer manually configured a production firewall rule directly on the cloud console, bypassing the approved Terraform workflow. This rule allows SSH from any IP address. Which Infrastructure as Code (IaC) principle was violated, and what is the PRIMARY risk?",
  "opts": [
   "A. Immutability was violated — the risk is configuration drift creating untracked security gaps",
   "B. Encryption at rest was violated — the risk is data exposure",
   "C. Least privilege was violated — the risk is lateral movement",
   "D. Separation of duties was violated — the risk is insider threat"
  ],
  "correct": 0,
  "exp": "Infrastructure as Code enforces immutability and version control — all infrastructure changes go through code, are reviewed, approved, and tracked. Manual \"click-ops\" changes bypass this process, causing configuration drift: the actual state diverges from the declared state in code. The open SSH rule is invisible to the IaC system and won't appear in audits or compliance scans of the Terraform state. This is a common and dangerous anti-pattern. Encryption at rest (B) is unrelated. Least privilege (C) may also be violated but the PRIMARY issue is the IaC bypass. Separation of duties (D) is a secondary concern. IaC drift = shadow infrastructure changes that evade security controls."
 },
 {
  "id": 268,
  "type": "mcq",
  "domain": 3,
  "obj": "3.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company packages each microservice into its own Docker container. A security scan reveals that one container image includes a vulnerable version of OpenSSL. The vulnerability exists in 14 of 30 containers that all use the same base image. What is the MOST efficient remediation?",
  "opts": [
   "A. Patch OpenSSL on each running container individually",
   "B. Update the shared base image to include the patched OpenSSL, then rebuild and redeploy all 14 containers",
   "C. Delete all 14 containers and recreate them from scratch",
   "D. Isolate the 14 containers on a separate network segment until a fix is available"
  ],
  "correct": 1,
  "exp": "Container best practice: containers are immutable — you never patch a running container. Instead, update the base image (e.g., the Dockerfile FROM line), rebuild the container images, and redeploy. Since all 14 share the same base image, updating it once and rebuilding fixes all 14 simultaneously. This is the power of containerization: consistent, repeatable deployments. Patching running containers (A) violates immutability and changes won't persist if containers restart. Deleting and recreating from scratch (C) is wasteful when only the base image needs updating. Network isolation (D) is a temporary compensating control, not remediation. Update base image → rebuild → redeploy = the container patching lifecycle."
 },
 {
  "id": 269,
  "type": "multi",
  "domain": 3,
  "obj": "3.1",
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "A manufacturing company operates an ICS/SCADA environment controlling water treatment processes. The security team is assessing risks to these operational technology (OT) systems. Which TWO security concerns are MOST critical and unique to ICS/SCADA environments compared to traditional IT?",
  "opts": [
   "A. Systems often run legacy operating systems that cannot be patched without vendor approval",
   "B. The network uses TCP/IP which is vulnerable to packet sniffing",
   "C. Safety implications — a cyberattack could cause physical harm to people or the environment",
   "D. Users share passwords for email access",
   "E. The database server lacks encryption at rest"
  ],
  "correct": [0, 2],
  "exp": "ICS/SCADA environments have two critical differentiators from IT: (A) Legacy systems — SCADA/ICS devices often run decades-old OS versions (Windows XP, proprietary RTOS) that cannot be patched without extensive vendor testing because updates could disrupt real-time process control. Availability trumps confidentiality in OT. (C) Safety impact — unlike IT where breaches cause data loss, ICS attacks can cause physical harm: opening valves, disabling safety interlocks, or releasing chemicals (see Oldsmar water treatment attack, Stuxnet). TCP/IP vulnerability (B) applies equally to IT networks. Shared passwords (D) and lack of encryption (E) are general IT issues, not unique to ICS/SCADA. OT security priorities: Safety → Availability → Integrity → Confidentiality."
 },
 {
  "id": 270,
  "type": "mcq",
  "domain": 3,
  "obj": "3.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A smart building system uses hundreds of IoT sensors for HVAC, lighting, and access control. Each sensor runs a Real-Time Operating System (RTOS) with no ability to install endpoint protection agents. A security architect must protect these devices. Which approach is MOST appropriate?",
  "opts": [
   "A. Deploy antivirus agents on each IoT sensor",
   "B. Require each sensor to authenticate with a username and password",
   "C. Implement network segmentation with an IoT-specific VLAN, apply strict ACLs, and monitor traffic with an IDS",
   "D. Replace all RTOS-based sensors with Windows-based devices"
  ],
  "correct": 2,
  "exp": "RTOS-based IoT devices have minimal resources and cannot run traditional security agents. The standard approach is compensating controls: place all IoT devices on a dedicated VLAN, apply strict firewall ACLs allowing only required communication (sensor → management server), block internet access, and deploy an IDS to monitor for anomalous traffic patterns. This limits the blast radius if a device is compromised. Antivirus (A) cannot run on RTOS devices. Username/password (B) is impractical for automated sensor communication and RTOS may not support it. Replacing with Windows (C) introduces more attack surface, higher cost, and RTOS is specifically designed for real-time deterministic operations that Windows cannot guarantee. Network-level controls = the IoT security standard."
 },
 {
  "id": 271,
  "type": "mcq",
  "domain": 3,
  "obj": "3.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A retail company processes customer transactions at the point of sale (POS) in each store. To reduce latency, transaction validation and fraud detection run on local compute resources at each store rather than in the central cloud data centre. Which computing model does this describe?",
  "opts": [
   "A. Fog computing",
   "B. Centralized cloud computing",
   "C. Edge computing",
   "D. Serverless computing"
  ],
  "correct": 2,
  "exp": "Edge computing processes data at or near the source of data generation — in this case, at the retail store — rather than sending all data to a centralized cloud for processing. Benefits: reduced latency (critical for real-time fraud detection), reduced bandwidth (only summaries sent to cloud), and continued operation if cloud connectivity is lost. Fog computing (A) is similar but refers to an intermediate layer between edge and cloud — a regional aggregation point. Centralized cloud (B) is the opposite of what's described. Serverless (D) is a cloud execution model. Edge = processing at the data source. Fog = processing at an intermediate aggregation layer. Both reduce reliance on centralized cloud."
 },
 {
  "id": 272,
  "type": "mcq",
  "domain": 3,
  "obj": "3.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company implements a zero trust architecture. An employee on the corporate LAN attempts to access an internal HR application. Despite being on the trusted network, the employee is prompted for MFA and their device posture is checked before access is granted. Which zero trust principle does this demonstrate?",
  "opts": [
   "A. Implicit trust based on network location",
   "B. Never trust, always verify — no implicit trust regardless of network location",
   "C. Trust but verify through periodic audits",
   "D. Perimeter-based security with DMZ inspection"
  ],
  "correct": 1,
  "exp": "Zero trust's core principle is 'never trust, always verify.' Network location (corporate LAN, VPN, internal) provides NO implicit trust. Every access request is authenticated, authorized, and continuously validated regardless of where the user is connecting from. This is a fundamental shift from traditional perimeter security where being 'inside the network' granted implicit trust. Implicit trust based on location (A) is the traditional model that zero trust explicitly rejects. Trust but verify (C) implies some initial trust. Perimeter-based security (D) is the legacy model. Zero trust pillars: verify identity, validate device health, enforce least privilege access, and assume breach."
 },
 {
  "id": 273,
  "type": "mcq",
  "domain": 3,
  "obj": "3.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company with 50 branch offices currently uses individual MPLS circuits to connect each branch to headquarters. The CTO wants to reduce WAN costs while maintaining centralized security policy enforcement and dynamic path selection based on application requirements. Which technology should the network team evaluate?",
  "opts": [
   "A. Site-to-site IPSec VPN over the internet",
   "B. SD-WAN (Software-Defined Wide Area Network)",
   "C. VLAN trunking between sites",
   "D. Point-to-point leased lines"
  ],
  "correct": 1,
  "exp": "SD-WAN provides centralized management and policy enforcement across all branch offices, dynamic path selection (choosing the best path per application — MPLS for voice, broadband for web), and significant cost savings by supplementing or replacing expensive MPLS with cheaper internet circuits. SD-WAN encrypts traffic over public internet and can prioritize critical applications. Site-to-site VPN (A) provides encrypted connectivity but lacks application-aware routing and centralized orchestration. VLAN trunking (C) is a LAN technology, not WAN. Leased lines (D) are even more expensive than MPLS. SD-WAN = cost reduction + centralized policy + application-aware routing."
 },
 {
  "id": 274,
  "type": "mcq",
  "domain": 3,
  "obj": "3.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company is adopting a Secure Access Service Edge (SASE) solution. The CISO explains that SASE converges networking and security into a single cloud-delivered service. Which combination of capabilities does SASE PRIMARILY integrate?",
  "opts": [
   "A. RAID arrays and backup solutions for data redundancy",
   "B. SD-WAN, CASB, secure web gateway, ZTNA, and firewall-as-a-service",
   "C. SIEM, SOAR, and endpoint detection and response (EDR)",
   "D. Active Directory, RADIUS, and TACACS+ for centralized authentication"
  ],
  "correct": 1,
  "exp": "SASE (Secure Access Service Edge) converges SD-WAN (networking) with cloud-delivered security services: CASB (cloud access security broker), SWG (secure web gateway), ZTNA (zero trust network access replacing VPN), and FWaaS (firewall as a service). This creates a unified cloud-based platform where all traffic — regardless of user location — is routed through security inspection. RAID and backups (A) are storage technologies. SIEM/SOAR/EDR (C) are security operations tools, not SASE components. AD/RADIUS/TACACS+ (D) are authentication protocols. SASE = networking (SD-WAN) + security (CASB + SWG + ZTNA + FWaaS) delivered from the cloud."
 },
 {
  "id": 275,
  "type": "multi",
  "domain": 3,
  "obj": "3.2",
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "A hospital network administrator needs to implement Network Access Control (NAC) to ensure that only compliant devices can connect to the clinical network. Which TWO checks should the NAC solution perform BEFORE granting a device full network access?",
  "opts": [
   "A. Verify the device has up-to-date antivirus definitions and OS patches",
   "B. Check that the user has a valid parking pass",
   "C. Confirm the device has an active, valid machine certificate issued by the hospital's CA",
   "D. Verify the device's screen brightness is set above 50%",
   "E. Check that the user's email inbox has fewer than 1000 messages"
  ],
  "correct": [0, 2],
  "exp": "NAC (Network Access Control) performs pre-admission checks before granting network access. (A) Health/posture assessment — NAC agents check that antivirus is installed and current, OS patches are applied, firewall is enabled, and disk encryption is active. Non-compliant devices are quarantined or given limited access for remediation. (C) Certificate-based authentication — machine certificates prove the device is organization-owned and managed, preventing personal/unauthorized devices from connecting. This is critical in healthcare where HIPAA requires strict access controls. Parking passes (B), screen brightness (D), and email counts (E) are not security-relevant device posture checks. NAC = authenticate the device + verify its security posture before granting access."
 },
 {
  "id": 276,
  "type": "mcq",
  "domain": 3,
  "obj": "3.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization's DNS filtering solution blocks employees from resolving domains associated with malware command-and-control servers, phishing sites, and other malicious content. An employee complains they cannot access a legitimate new vendor website. What is the MOST likely cause?",
  "opts": [
   "A. The employee's device has been compromised by malware",
   "B. The vendor's domain is newly registered and the DNS filter has categorized it as suspicious",
   "C. The DNS filtering solution is blocking all HTTPS traffic",
   "D. The employee's DNS cache is corrupted"
  ],
  "correct": 1,
  "exp": "DNS filtering solutions maintain categorized databases of domains. Newly registered domains (NRDs) are frequently flagged as suspicious because attackers commonly register new domains for malware campaigns, phishing, and C2 infrastructure. Legitimate new vendor websites can be caught by this heuristic until the domain builds reputation or is manually whitelisted. DNS filtering does not block HTTPS traffic (C) — it operates at the DNS resolution layer, not the transport layer. A compromised device (A) would show different symptoms. A corrupted DNS cache (D) would affect multiple sites, not just one. The fix: submit the domain for recategorization or add it to an allow list after verifying legitimacy."
 },
 {
  "id": 277,
  "type": "mcq",
  "domain": 3,
  "obj": "3.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company deploys an email security gateway that scans all inbound messages. The gateway identifies an email with a PDF attachment that contains an embedded macro attempting to download a payload from an external URL. The gateway strips the attachment and delivers the email body with a warning. Which email security function performed this action?",
  "opts": [
   "A. SPF (Sender Policy Framework) validation",
   "B. Content disarm and reconstruction (CDR)",
   "C. DKIM signature verification",
   "D. DMARC policy enforcement"
  ],
  "correct": 1,
  "exp": "Content Disarm and Reconstruction (CDR) is an email security gateway function that analyzes attachments, removes potentially malicious active content (macros, embedded scripts, external links), and reconstructs a sanitized version of the file. This neutralizes zero-day threats that signature-based scanning might miss. SPF (A) verifies the sending mail server is authorized for the domain. DKIM (C) verifies the message integrity using cryptographic signatures. DMARC (D) combines SPF and DKIM with policy enforcement (reject, quarantine, none). SPF, DKIM, and DMARC address email authentication/spoofing — CDR addresses malicious content within attachments."
 },
 {
  "id": 278,
  "type": "mcq",
  "domain": 3,
  "obj": "3.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A Cloud Access Security Broker (CASB) deployed in an organization detects that employees are uploading sensitive financial data to an unsanctioned personal Dropbox account. The CASB blocks the upload and alerts the security team. Which CASB function is being demonstrated?",
  "opts": [
   "A. Data Loss Prevention (DLP) enforcement for shadow IT",
   "B. Vulnerability scanning of cloud instances",
   "C. Patch management for SaaS applications",
   "D. Network intrusion detection"
  ],
  "correct": 0,
  "exp": "CASBs sit between users and cloud services, providing visibility and control over cloud usage. This scenario demonstrates two key CASB functions: shadow IT discovery (detecting unsanctioned Dropbox use) and DLP enforcement (blocking sensitive data uploads to unauthorized cloud services). CASBs operate in four pillars: visibility (discover all cloud services in use), compliance (enforce regulatory requirements), data security (DLP, encryption), and threat protection (detect compromised accounts, malware). Vulnerability scanning (B) and patch management (C) are not CASB functions. Network IDS (D) operates at the network layer, not the cloud application layer. CASB = cloud-specific visibility, compliance, data security, and threat protection."
 },
 {
  "id": 279,
  "type": "mcq",
  "domain": 3,
  "obj": "3.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A network engineer configures a Layer 2 switch with port security, limiting each port to a maximum of one MAC address. An attacker connects a small hub to the switch port and plugs in two devices. What happens when the second device sends a frame?",
  "opts": [
   "A. The switch forwards the frame normally since hubs are transparent",
   "B. The switch detects the violation and takes the configured action — shutdown, restrict, or protect the port",
   "C. The switch converts to a hub and floods all ports",
   "D. The second device's traffic is encrypted automatically"
  ],
  "correct": 1,
  "exp": "Port security monitors the source MAC addresses on a switch port. When configured for a maximum of one MAC, the first MAC address is learned (either dynamically or statically configured). When a second MAC address appears, it triggers a violation. The switch takes the configured action: Shutdown (default on Cisco — disables the port entirely), Restrict (drops violating traffic and logs), or Protect (silently drops violating traffic). The hub is transparent at Layer 2 but the switch sees two different source MACs. The switch does not flood all ports (C) — that would defeat the purpose. Port security prevents MAC flooding attacks, unauthorized device connections, and rogue access points."
 },
 {
  "id": 280,
  "type": "mcq",
  "domain": 3,
  "obj": "3.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security team is comparing VPN technologies. Remote employees currently use SSL/TLS VPN to access internal web applications. The company now needs to provide full network-level access to all internal resources, including non-web applications like RDP and proprietary thick clients. Which VPN type provides this capability?",
  "opts": [
   "A. SSL/TLS VPN in clientless mode (browser-based)",
   "B. IPSec VPN in tunnel mode with a full tunnel client",
   "C. Split-tunnel SSL VPN",
   "D. SSH tunneling"
  ],
  "correct": 1,
  "exp": "IPSec VPN in tunnel mode with a full tunnel client encapsulates ALL traffic from the remote device, providing full network-level access to every internal resource — web apps, RDP, thick clients, file shares, databases, and any IP-based service. It creates a virtual network interface on the client that routes all traffic through the tunnel. SSL/TLS VPN clientless mode (A) only supports web-based applications via the browser — no RDP or thick clients. Split-tunnel SSL VPN (C) can provide some network access but routes only designated traffic through the VPN. SSH tunneling (D) forwards individual ports but doesn't provide full network access. Full tunnel IPSec = complete network-level remote access."
 },
 {
  "id": 281,
  "type": "mcq",
  "domain": 3,
  "obj": "3.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A network engineer deploys an IDS sensor on a mirrored (SPAN) port that receives a copy of all traffic crossing the core switch. The IDS generates alerts but cannot stop attacks in progress. The security team wants to actively block malicious traffic. What change is needed?",
  "opts": [
   "A. Move to an IPS deployed inline (in the traffic path) so it can drop malicious packets before they reach the target",
   "B. Add more IDS sensors on additional SPAN ports",
   "C. Increase the IDS alert threshold to reduce false positives",
   "D. Configure the IDS to send RST packets to terminate connections"
  ],
  "correct": 0,
  "exp": "The fundamental difference: IDS is passive (monitors a copy of traffic, detects and alerts) while IPS is active (sits inline in the traffic path, detects and blocks). An IDS on a SPAN port sees traffic after it has already been forwarded — it cannot prevent delivery. An IPS is deployed inline between network segments, inspecting every packet in real-time and dropping malicious ones before they reach the destination. More IDS sensors (B) increase visibility but still cannot block. Reducing thresholds (C) addresses false positives, not blocking capability. Sending RST packets (D) is a reactive measure that may not stop all attacks and is unreliable. IDS = detect and alert. IPS = detect and prevent."
 },
 {
  "id": 282,
  "type": "multi",
  "domain": 3,
  "obj": "3.2",
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "An organization is deploying a web application that must handle 50,000 concurrent users. The security architect recommends a load balancer. Which TWO security benefits does a load balancer provide beyond distributing traffic?",
  "opts": [
   "A. SSL/TLS offloading — terminates encrypted sessions and reduces backend server CPU load",
   "B. Automatic OS patching of backend servers",
   "C. DDoS mitigation — absorbing volumetric attacks and distributing traffic across multiple servers",
   "D. Full disk encryption on all backend servers",
   "E. Automatic code review of the web application"
  ],
  "correct": [0, 2],
  "exp": "Load balancers provide several security benefits beyond traffic distribution: (A) SSL/TLS offloading — the load balancer handles the computationally expensive TLS handshake and encryption/decryption, freeing backend servers to focus on application logic. It also centralizes certificate management. (C) DDoS mitigation — load balancers can absorb and distribute volumetric attacks across server pools, implement rate limiting, and integrate with DDoS protection services. They also hide backend server IPs from direct attack. OS patching (B), disk encryption (D), and code review (E) are not load balancer functions. Additional load balancer security features: health checks (detecting compromised servers), connection limiting, and HTTP header inspection."
 },
 {
  "id": 283,
  "type": "mcq",
  "domain": 3,
  "obj": "3.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company classifies its data into four tiers: Public, Internal, Confidential, and Restricted. An employee shares a document labeled \"Confidential\" on a public-facing website. Which data handling failure occurred?",
  "opts": [
   "A. Data was not encrypted at rest",
   "B. Data was shared in violation of its classification-based handling requirements",
   "C. The classification label was incorrect and should have been Public",
   "D. The website lacked a valid TLS certificate"
  ],
  "correct": 1,
  "exp": "Data classification defines handling requirements for each tier. Confidential data has specific controls: restricted access, encryption requirements, and prohibited sharing outside the organization. Posting it publicly violates the classification policy regardless of whether it's encrypted or the site has TLS. The classification itself may be correct — the failure is in handling, not labeling. Encryption at rest (A) doesn't matter if the data is publicly accessible. Changing the label to Public (C) would be incorrect since the data is genuinely confidential. A valid TLS cert (D) protects data in transit but doesn't address unauthorized disclosure. Classification without enforcement = security theater."
 },
 {
  "id": 285,
  "type": "mcq",
  "domain": 3,
  "obj": "3.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A European company stores customer data in a US-based cloud data centre. A new regulation requires all EU citizen data to be stored and processed exclusively within EU borders. The company must move the data to an EU region to comply. Which concept does this regulation enforce?",
  "opts": [
   "A. Data minimization",
   "B. Data sovereignty",
   "C. Data retention",
   "D. Data deduplication"
  ],
  "correct": 1,
  "exp": "Data sovereignty means that data is subject to the laws and governance of the country where it is physically stored. When a regulation requires EU citizen data to remain within EU borders, it enforces data sovereignty — the data must be stored and processed in jurisdictions with adequate data protection laws (GDPR). Cloud providers offer region-specific storage to address this. Data minimization (A) is about collecting only necessary data. Data retention (C) defines how long data is kept. Data deduplication (D) eliminates redundant copies for storage efficiency. Data sovereignty is closely related to data residency (contractual requirement for where data is stored) and geolocation (knowing where data physically resides)."
 },
 {
  "id": 286,
  "type": "mcq",
  "domain": 3,
  "obj": "3.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A healthcare organization must protect patient records (PHI) stored in a database. The security team implements AES-256 encryption for the database files on disk, TLS 1.3 for all connections to the database server, and role-based access controls limiting queries to authorized clinical staff. Which data states are protected by these three controls respectively?",
  "opts": [
   "A. All three protect data at rest",
   "B. AES-256 protects data at rest, TLS 1.3 protects data in transit, RBAC protects data in use",
   "C. AES-256 protects data in transit, TLS 1.3 protects data at rest, RBAC protects data in use",
   "D. All three protect data in transit"
  ],
  "correct": 1,
  "exp": "The three data states and their corresponding controls: Data at rest (stored on disk) — protected by AES-256 encryption of database files. If the disk is stolen, data is unreadable without the key. Data in transit (moving across the network) — protected by TLS 1.3 encrypting the connection between clients and the database server. Data in use (being accessed/processed) — protected by RBAC ensuring only authorized clinical staff can query patient records. This three-state model is fundamental to Security+. AES-256 for disk encryption is at-rest, not in-transit (C is reversed). Comprehensive data protection requires controls addressing all three states simultaneously."
 },
 {
  "id": 287,
  "type": "mcq",
  "domain": 3,
  "obj": "3.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company's legal department identifies that certain source code constitutes a trade secret. The code provides a significant competitive advantage and is not publicly known. Which data protection measure is MOST critical for trade secrets specifically?",
  "opts": [
   "A. Publishing the code on a public repository with a copyright notice",
   "B. Strict access controls, NDAs, and ensuring the information is never disclosed outside authorized personnel",
   "C. Registering the trade secret with the patent office",
   "D. Encrypting the code with a publicly shared key"
  ],
  "correct": 1,
  "exp": "Trade secrets derive their value from being secret — once disclosed, protection is lost forever (unlike patents or copyrights which have legal protections after disclosure). Protection requires: strict access controls (need-to-know basis), NDAs (legal agreements preventing disclosure), physical and digital security measures, employee training, and monitoring for unauthorized access. Publishing (A) destroys the trade secret immediately. Trade secrets cannot be registered (C) — patents require public disclosure in exchange for legal protection, which is the opposite of trade secret strategy. A publicly shared key (D) provides no confidentiality. Trade secret protection = maintaining secrecy through administrative, technical, and legal controls."
 },
 {
  "id": 288,
  "type": "mcq",
  "domain": 3,
  "obj": "3.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A data analyst needs to perform statistical analysis on a customer database containing names, Social Security numbers, and purchase history. The analyst only needs purchase patterns — not individual identities. Which technique provides useful analytics data while protecting PII?",
  "opts": [
   "A. Full database encryption with the decryption key given to the analyst",
   "B. Data masking or anonymization — removing/replacing PII fields while preserving purchase data",
   "C. Granting the analyst full database read access with an NDA",
   "D. Moving the database to a different server"
  ],
  "correct": 1,
  "exp": "Data masking/anonymization removes or replaces PII (names, SSNs) with fictitious or generalized values while preserving the analytical value of non-sensitive fields (purchase amounts, dates, categories). The analyst can perform statistical analysis on purchase patterns without ever seeing individual identities. This implements data minimization — providing only the data needed for the specific purpose. Full encryption with key access (A) gives the analyst access to all PII after decryption. An NDA (C) is a legal control but still exposes PII unnecessarily, violating least privilege. Moving the database (D) changes location but not access. Masking/anonymization = privacy-preserving analytics."
 },
 {
  "id": 289,
  "type": "multi",
  "domain": 3,
  "obj": "3.3",
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "A financial services firm must comply with regulations requiring that customer financial records be protected both at rest and in transit. The compliance team identifies two specific controls that must be implemented. Which TWO controls address these requirements?",
  "opts": [
   "A. AES-256 encryption for database storage and file systems",
   "B. Requiring employees to use strong passwords",
   "C. TLS 1.2 or higher for all network communications carrying customer data",
   "D. Implementing a clean desk policy",
   "E. Installing motion sensors in the server room"
  ],
  "correct": [0, 2],
  "exp": "The two data states specified require: (A) Data at rest — AES-256 encryption protects stored data in databases and file systems. If storage media is stolen or improperly decommissioned, data remains unreadable. AES-256 is the industry standard for at-rest encryption in regulated environments. (C) Data in transit — TLS 1.2+ encrypts data moving across networks, preventing eavesdropping and man-in-the-middle attacks. Regulations like PCI-DSS, GLBA, and SOX require both. Strong passwords (B) are an authentication control, not data protection. Clean desk policy (D) is a physical security control. Motion sensors (E) are physical security. At rest = encryption (AES-256). In transit = encryption (TLS 1.2+)."
 },
 {
  "id": 290,
  "type": "mcq",
  "domain": 3,
  "obj": "3.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security architect is evaluating virtualization risks. A researcher demonstrates an exploit where malicious code running inside a virtual machine escapes the VM and executes code on the host hypervisor, potentially affecting all other VMs on the same host. What is this attack called?",
  "opts": [
   "A. Container breakout",
   "B. VM escape (virtual machine escape)",
   "C. Privilege escalation within the guest OS",
   "D. Side-channel attack"
  ],
  "correct": 1,
  "exp": "VM escape is an attack where code running inside a guest VM breaks out of the virtual environment and interacts directly with the hypervisor or host OS. This is one of the most severe virtualization threats because it compromises the isolation boundary — the attacker can potentially access all other VMs on the same host, read their memory, or take control of the hypervisor. Container breakout (A) is similar but specific to container environments. Privilege escalation within the guest (C) stays inside the VM boundary. Side-channel attacks (D) leak information through timing, cache, or power analysis but don't directly execute code on the host. Mitigations: keep hypervisors patched, minimize hypervisor attack surface, use hardware-assisted virtualization."
 },
 {
  "id": 291,
  "type": "mcq",
  "domain": 3,
  "obj": "3.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An automotive manufacturer uses embedded systems in vehicle engine control units (ECUs). These systems run firmware that controls fuel injection timing and must respond within microseconds. The firmware cannot be modified after deployment without a specialized reflashing process. Which characteristic makes embedded systems uniquely challenging to secure?",
  "opts": [
   "A. They use TCP/IP networking which is inherently insecure",
   "B. They have limited computational resources, fixed-function firmware, long lifecycles, and often cannot be patched through standard update mechanisms",
   "C. They run Windows operating systems that are frequently targeted",
   "D. They store large volumes of personally identifiable information"
  ],
  "correct": 1,
  "exp": "Embedded systems present unique security challenges: limited CPU/memory (cannot run security agents), fixed-function firmware (designed for one purpose, not general computing), extremely long lifecycles (vehicles run 15-20 years), and patching requires specialized processes (firmware reflashing, often requiring physical access). The real-time constraints mean security patches must be thoroughly tested to ensure they don't introduce timing issues. Not all embedded systems use TCP/IP (A). Most don't run Windows (C). ECUs typically don't store PII (D). Security approaches: secure boot, code signing, hardware security modules (HSM), and physical isolation. The inability to patch easily makes secure design from the start critical."
 },
 {
  "id": 292,
  "type": "mcq",
  "domain": 3,
  "obj": "3.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security engineer is configuring a web content filter for the corporate network. The filter is set to block categories including gambling, malware, adult content, and social media during business hours. An employee reports that a legitimate cloud-based project management tool is being blocked. What is the MOST likely cause and appropriate resolution?",
  "opts": [
   "A. The tool is malware disguised as a legitimate application — block it permanently",
   "B. The tool's domain is miscategorized by the web filter — submit a recategorization request and add it to the allow list after verification",
   "C. Disable the web content filter entirely to avoid blocking legitimate tools",
   "D. The employee should use a personal device to access the tool instead"
  ],
  "correct": 1,
  "exp": "Web content filters categorize websites into groups and block/allow based on policy. Miscategorization is common, especially for newer SaaS tools that may be grouped under generic categories like 'uncategorized' or incorrectly classified. The proper resolution: verify the tool is legitimate and business-required, submit a recategorization request to the filter vendor, and add the specific domain to an allow list. Assuming it's malware (A) without investigation is premature. Disabling the filter entirely (C) removes protection for everyone. Using personal devices (D) creates shadow IT and bypasses corporate security controls. Web filter management requires ongoing tuning — maintaining allow/block lists is a normal operational task."
 },
 {
  "id": 293,
  "type": "multi",
  "domain": 3,
  "obj": "3.1",
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "A company is evaluating whether to use containers or traditional virtual machines for their new microservices deployment. The security team is comparing the isolation models. Which TWO statements accurately describe security differences between containers and VMs?",
  "opts": [
   "A. VMs provide stronger isolation because each VM runs its own OS kernel with a hypervisor boundary",
   "B. Containers provide stronger isolation than VMs because they use process-level separation",
   "C. Containers share the host OS kernel, meaning a kernel vulnerability could affect all containers on the host",
   "D. VMs are faster to deploy and therefore more secure than containers",
   "E. Containers and VMs provide identical security isolation boundaries"
  ],
  "correct": [0, 2],
  "exp": "VMs and containers have fundamentally different isolation models: (A) VMs run separate OS kernels on a hypervisor — the isolation boundary is the hypervisor, which is a much stronger boundary. Each VM is fully independent. (C) Containers share the host kernel — all containers on a host use the same Linux/Windows kernel. A kernel exploit in one container can potentially affect all containers and the host. This is why container security requires: minimal base images, running as non-root, read-only filesystems, seccomp profiles, and kernel hardening. Containers are NOT more secure than VMs (B) in terms of isolation. VMs are not faster to deploy (D) — containers are. They are not identical (E). Trade-off: containers offer efficiency and speed; VMs offer stronger isolation."
 },
 {
  "id": 294,
  "type": "mcq",
  "domain": 3,
  "obj": "3.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company's legal team informs the CISO that certain data is subject to a litigation hold and must not be deleted, modified, or overwritten until the legal matter is resolved — even if the data would normally be purged under the retention policy. Which data type consideration does this represent?",
  "opts": [
   "A. Data sovereignty requiring geographic storage restrictions",
   "B. Legal hold — data preservation requirements that override standard retention policies",
   "C. Data minimization requiring deletion of unnecessary data",
   "D. Trade secret protection requiring access restrictions"
  ],
  "correct": 1,
  "exp": "A legal hold (litigation hold) is a directive to preserve all data relevant to pending or anticipated litigation, audit, or investigation. It overrides normal data retention and deletion policies — data that would normally be purged must be preserved in its current state. Failure to comply can result in spoliation sanctions, adverse inference, or contempt of court. Data sovereignty (A) concerns geographic storage location. Data minimization (C) is the opposite — deleting unnecessary data, which a legal hold prevents. Trade secret protection (D) is about controlling access to proprietary information. Legal holds require coordination between legal, IT, and security teams to identify, preserve, and protect relevant data across all systems — email, file shares, databases, backups, and cloud storage."
 },
 {
  "id": 321,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A network monitor shows traffic moving between two virtual machines in the same VLAN. Which term best describes this traffic flow?",
  "opts": [
   "A. North-south traffic",
   "B. East-west traffic",
   "C. Egress traffic",
   "D. Ingress traffic"
  ],
  "correct": 1,
  "exp": "East-west traffic refers to data moving laterally within a data center or network (server-to-server). North-south traffic (A) refers to data moving between the internal network and the outside world (client-to-server)."
 },
 {
  "id": 322,
  "obj": "3.3",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization uses RAID 10 for its critical database. Which combination of performance and redundancy features is provided by RAID 10?",
  "opts": [
   "A. Striping with parity",
   "B. Mirroring only",
   "C. A stripe of mirrors",
   "D. Parity without striping"
  ],
  "correct": 2,
  "exp": "RAID 10 (or RAID 1+0) is a 'stripe of mirrors.' It provides the high performance of striping (RAID 0) and the high redundancy of mirroring (RAID 1). It requires a minimum of 4 drives."
 },
 {
  "id": 323,
  "obj": "3.1",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company wants to hire an external firm to manage its firewall rules, monitor its SIEM, and respond to alerts 24/7. Which type of service provider is this?",
  "opts": [
   "A. MSP (Managed Service Provider)",
   "B. MSSP (Managed Security Service Provider)",
   "C. SaaS Provider",
   "D. IaaS Provider"
  ],
  "correct": 1,
  "exp": "An MSSP (Managed Security Service Provider) specializes specifically in outsourcing security functions like monitoring, management of security devices, and incident response."
 },
 {
  "id": 324,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security engineer is deploying a solution that sits in front of a web server to handle SSL/TLS termination and balance traffic across multiple nodes. Which technology is being used?",
  "opts": [
   "A. Forward Proxy",
   "B. Reverse Proxy",
   "C. DNS Sinkhole",
   "D. Air gap"
  ],
  "correct": 1,
  "exp": "A reverse proxy sits in front of backend servers. It can handle encryption (SSL offloading), caching, and load balancing. A forward proxy (A) handles requests on behalf of clients (users) going out to the internet."
 },
 {
  "id": 325,
  "obj": "3.3",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Which RAID level can survive the simultaneous failure of two drives without losing data?",
  "opts": [
   "A. RAID 0",
   "B. RAID 1",
   "C. RAID 5",
   "D. RAID 6"
  ],
  "correct": 3,
  "exp": "RAID 6 uses dual parity and can tolerate the loss of up to two drives simultaneously. RAID 5 (C) can only tolerate one drive failure."
 },
 {
  "id": 356,
  "obj": "3.1",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A startup provisions virtual machines in the cloud, configures its own firewalls, and installs custom middleware and database software. The cloud provider only manages the hypervisor and physical hardware. Which cloud service model does this describe?",
  "opts": [
   "A. Infrastructure as a Service (IaaS)",
   "B. Platform as a Service (PaaS)",
   "C. Software as a Service (SaaS)",
   "D. Function as a Service (FaaS)"
  ],
  "correct": 0,
  "exp": "(A) is correct. IaaS gives the customer control over VMs, networking, storage, OS, and everything above the hypervisor, while the provider manages physical hardware and virtualization. (B) PaaS would also manage the OS, middleware, and runtime. (C) SaaS delivers a fully managed application. (D) FaaS is a serverless execution model where the provider manages all infrastructure."
 },
 {
  "id": 357,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A network switch is configured so that it learns the MAC address of the first device connected to a port and will disable the port if any other MAC address is detected. What is this feature called?",
  "opts": [
   "A. VLAN Tagging",
   "B. Port Security (Sticky MAC)",
   "C. Spanning Tree Protocol",
   "D. Quality of Service (QoS)"
  ],
  "correct": 1,
  "exp": "Port security with 'sticky' MAC addresses is a Layer 2 control that prevents unauthorized devices from plugging into network ports by binding the port to a specific hardware address."
 },
 {
  "id": 358,
  "obj": "3.3",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company has two data centers. In normal operations, Data Center A handles all traffic. If Data Center A fails, Data Center B is configured to automatically take over. What is this configuration called?",
  "opts": [
   "A. Active-Active",
   "B. Active-Passive",
   "C. RAID 0",
   "D. Cold Site"
  ],
  "correct": 1,
  "exp": "In an Active-Passive (or Active-Standby) configuration, one node is primary and handles traffic, while the other remains idle but ready to take over if the primary fails."
 },
 {
  "id": 359,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization wants to converge their network security functions (like WAF, Firewall, and Secure Web Gateway) into a single, unified cloud-delivered service for all remote and branch users. Which architecture is this?",
  "opts": [
   "A. SASE (Secure Access Service Edge)",
   "B. SDN (Software-Defined Networking)",
   "C. Hybrid Cloud",
   "D. Air Gap"
  ],
  "correct": 0,
  "exp": "SASE combines WAN capabilities (like SD-WAN) with cloud-native security functions (Firewall-as-a-Service, CASB, ZTNA) to provide secure access regardless of location."
 },
 {
  "id": 360,
  "obj": "3.3",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security engineer is implementing a technology that allows a CPU to process sensitive data in an isolated environment that is invisible to the rest of the Operating System. Which concept is this?",
  "opts": [
   "A. Full Disk Encryption",
   "B. Data at Rest",
   "C. Trusted Execution Environment (TEE) / Confidential Computing",
   "D. Hashing"
  ],
  "correct": 2,
  "exp": "A TEE provides a secure area inside a processor. It ensures that 'data in use' remains protected from even a compromised OS or hypervisor."
 },
 {
  "id": 361,
  "obj": "3.1",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Which cloud deployment model is shared between several organizations with similar concerns (such as security requirements, compliance, or jurisdiction)?",
  "opts": [
   "A. Public Cloud",
   "B. Community Cloud",
   "C. Hybrid Cloud",
   "D. Private Cloud"
  ],
  "correct": 1,
  "exp": "A Community Cloud is a collaborative effort in which infrastructure is shared between several organizations from a specific community with common concerns (security, compliance, etc.)."
 },
 {
  "id": 362,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Which of the following would be the BEST choice for providing security at the network layer (Layer 3) between two remote offices over the internet?",
  "opts": [
   "A. WPA3",
   "B. TLS",
   "C. IPSec VPN",
   "D. SSH"
  ],
  "correct": 2,
  "exp": "IPSec (Internet Protocol Security) is a suite of protocols for securing network communications at the IP layer (Layer 3). It is the standard for site-to-site VPNs."
 },
 {
  "id": 363,
  "obj": "3.3",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security engineer is configuring a server cluster. They want all servers in the cluster to handle incoming requests simultaneously to maximize throughput and performance. Which configuration is this?",
  "opts": [
   "A. Active-Active",
   "B. Active-Passive",
   "C. RAID 1",
   "D. Hot Site"
  ],
  "correct": 0,
  "exp": "In an Active-Active configuration, all nodes in the cluster are operational and processing traffic at the same time, providing both availability and increased performance (load balancing)."
 },
 {
  "id": 364,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization is updating its network management protocol to ensure that communication between monitoring systems and network devices is both encrypted and authenticated. Which protocol should they use?",
  "opts": [
   "A. SNMPv1",
   "B. SNMPv2c",
   "C. SNMPv3",
   "D. Telnet"
  ],
  "correct": 2,
  "exp": "SNMPv3 added essential security features: authentication (verifying the source) and encryption (privacy of management traffic). Previous versions sent 'communities' in plaintext."
 },
 {
  "id": 365,
  "obj": "3.3",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A development team needs access to a copy of the production database for testing purposes, but regulations prohibit exposing actual customer Social Security Numbers. The team requests that SSNs appear in the format XXX-XX-1234, showing only the last four digits. Which technique should be applied to the test environment data?",
  "opts": [
   "A. Data Loss Prevention (DLP)",
   "B. Data masking",
   "C. Data tokenization",
   "D. Full-disk encryption"
  ],
  "correct": 1,
  "exp": "(B) is correct. Data masking replaces sensitive data with realistic but obfuscated values, such as replacing most digits of an SSN with 'X' characters while preserving the format. This allows developers to work with representative data without exposing real PII. (A) DLP monitors and prevents unauthorized data transfers but does not transform data for test environments. (C) Tokenization replaces data with random tokens that map back to the original value through a token vault, which differs from the partial-reveal format described. (D) Full-disk encryption protects data at rest on storage media but does not alter the data seen by application users."
 },
 {
  "id": 396,
  "obj": "3.1",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company stores its main web application in a public cloud but keeps its legacy mainframe database in its own on-premises data center. Which deployment model is this?",
  "opts": [
   "A. Public",
   "B. Hybrid",
   "C. Private",
   "D. Community"
  ],
  "correct": 1,
  "exp": "Hybrid cloud is a combination of public cloud services and on-premises (private) infrastructure working together."
 },
 {
  "id": 397,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A SOC analyst notices a significant spike in traffic flowing from several internal database servers out to external IP addresses on the internet. Which traffic flow classification BEST describes this activity?",
  "opts": [
   "A. East-West traffic",
   "B. North-South traffic",
   "C. Multicast traffic",
   "D. Broadcast traffic"
  ],
  "correct": 1,
  "exp": "(B) is correct. North-south traffic flows between the internal network and external networks such as the internet. Internal servers communicating outbound to external IPs is a classic example. (A) East-west traffic moves laterally between servers within the same data center. (C) Multicast traffic is sent to a group of subscribers, which is a delivery method, not a directional classification. (D) Broadcast traffic is sent to all hosts on a network segment, also not a directional classification."
 },
 {
  "id": 398,
  "obj": "3.3",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization wants to protect user privacy. They replace all names in a dataset with a unique 'ID Number'. They keep a separate, highly secured 'lookup table' that can link the ID back to the name if needed. What is this?",
  "opts": [
   "A. Anonymization",
   "B. Pseudo-anonymization",
   "C. Data Minimization",
   "D. Hashing"
  ],
  "correct": 1,
  "exp": "Pseudo-anonymization replaces identifying data with aliases but allows for the data to be 're-identified' using a separate key or table. Full anonymization (A) is irreversible."
 },
 {
  "id": 399,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A network engineer is configuring a firewall. They want to ensure that if a packet does not match any of the specifically defined rules, it is automatically dropped. Which rule should be at the bottom of the ACL?",
  "opts": [
   "A. Permit Any Any",
   "B. Implicit Deny",
   "C. SNMP v3 Trap",
   "D. Log Alert"
  ],
  "correct": 1,
  "exp": "The Implicit Deny is an unwritten rule (or a manually added one at the end) that blocks all traffic not explicitly allowed. This is a core part of the Least Privilege principle."
 },
 {
  "id": 400,
  "obj": "3.3",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Which RAID configuration uses exactly two disks to provide exact duplicates of data, ensuring that if one drive fails, the system continues to run?",
  "opts": [
   "A. RAID 0",
   "B. RAID 1",
   "C. RAID 5",
   "D. RAID 6"
  ],
  "correct": 1,
  "exp": "RAID 1 is mirroring. It duplicates data across two drives. It provides high redundancy but no performance gain from striping."
 },
 {
  "id": 431,
  "obj": "3.1",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "In which cloud service model is the customer MOST responsible for managing and patching the Operating System?",
  "opts": [
   "A. SaaS",
   "B. PaaS",
   "C. IaaS",
   "D. SECaaS"
  ],
  "correct": 2,
  "exp": "Infrastructure as a Service (IaaS) gives the customer control over virtual machines. The customer is responsible for the OS, apps, and data. In PaaS (B), the provider manages the OS."
 },
 {
  "id": 432,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A firewall is monitoring traffic between the corporate HQ and a branch office across the internet. Which term describes this traffic direction?",
  "opts": [
   "A. East-West",
   "B. North-South",
   "C. Lateral",
   "D. Internal"
  ],
  "correct": 1,
  "exp": "North-South traffic flows between the internal network and external networks (like the internet). East-West traffic flows between servers within the data center."
 },
 {
  "id": 433,
  "obj": "3.3",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization uses a RAID 5 array for its file server. One drive fails and the administrator begins a rebuild with a hot spare. During the rebuild process, a second drive in the array fails. What is the outcome?",
  "opts": [
   "A. The array continues operating normally using the remaining parity data",
   "B. The rebuild pauses until the second failed drive is replaced, then resumes",
   "C. Complete data loss occurs because RAID 5 can only tolerate one simultaneous drive failure",
   "D. The array switches to a degraded RAID 0 mode and continues serving data"
  ],
  "correct": 2,
  "exp": "(C) is correct. RAID 5 uses single distributed parity, so it can tolerate only one drive failure at a time. If a second drive fails before the rebuild completes, the array is destroyed and all data is lost. (A) is incorrect because RAID 5 has no mechanism to survive two simultaneous failures. (B) is incorrect because the array cannot simply pause; it has already lost fault tolerance. (D) is incorrect because RAID arrays do not dynamically switch levels on failure."
 },
 {
  "id": 434,
  "obj": "3.1",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security auditor finds that the actual state of a cloud environment differs significantly from the Terraform templates used to deploy it. What is this phenomenon called?",
  "opts": [
   "A. Immutability",
   "B. Configuration Drift",
   "C. Orchestration",
   "D. Normalization"
  ],
  "correct": 1,
  "exp": "Configuration drift occurs when manual changes or updates cause a system to diverge from its original baseline or its Infrastructure as Code (IaC) definition."
 },
 {
  "id": 435,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A firewall administrator creates a rule to block all traffic from a known malicious internal IP address 10.0.1.50. However, the rule is placed below a broader rule that reads 'PERMIT ALL from 10.0.0.0/16.' Users report that the malicious host can still reach network resources. What is the MOST likely cause?",
  "opts": [
   "A. The firewall does not support IP-based blocking",
   "B. The malicious host is using a VPN to bypass the firewall",
   "C. Firewall rules are processed top-down and the broader permit rule matches first, so the block rule is never evaluated",
   "D. The implicit deny rule at the bottom is overriding both rules"
  ],
  "correct": 2,
  "exp": "(C) is correct. Firewalls evaluate rules from top to bottom and apply the first matching rule. Because the broad 'PERMIT ALL from 10.0.0.0/16' rule appears above the specific block rule, traffic from 10.0.1.50 matches the permit rule first and is allowed through. The block rule is never reached. (A) is incorrect because all firewalls support IP-based rules. (B) is incorrect because there is no evidence of VPN use. (D) is incorrect because the implicit deny only applies to traffic that matches no explicit rule."
 },
 {
  "id": 436,
  "obj": "3.3",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization assigns sensitivity labels to all corporate information: Public, Internal, Confidential, and Restricted. Customer PII is labelled Confidential, while trade secrets are labelled Restricted. Each label carries specific handling and access requirements. What process is this organization performing?",
  "opts": [
   "A. Data retention",
   "B. Data classification",
   "C. Data masking",
   "D. Data minimization"
  ],
  "correct": 1,
  "exp": "(B) is correct. Data classification is the process of assigning sensitivity labels to data so that appropriate security controls and handling procedures can be applied based on the value and sensitivity of the information. (A) Data retention defines how long data must be stored before deletion. (C) Data masking replaces sensitive data with obfuscated values for non-production use. (D) Data minimization limits the collection and storage of data to only what is necessary for a stated purpose."
 },
 {
  "id": 437,
  "obj": "3.1",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company already operates its own SIEM and firewall infrastructure. They need a provider that will actively hunt for threats in their environment, perform deep investigation of alerts, and provide guided remediation steps — not just passively monitor logs. Which service BEST meets this requirement?",
  "opts": [
   "A. Managed Security Service Provider (MSSP)",
   "B. Managed Detection and Response (MDR)",
   "C. Internet Service Provider (ISP)",
   "D. Managed Service Provider (MSP)"
  ],
  "correct": 1,
  "exp": "(B) is correct. MDR goes beyond traditional monitoring by providing active threat hunting, in-depth alert investigation, and guided or hands-on remediation. MDR providers act as an extension of the security team rather than just forwarding alerts. (A) An MSSP typically focuses on monitoring, log management, and alerting but generally does not perform active threat hunting or deep investigation. (C) An ISP provides network connectivity, not security services. (D) An MSP manages general IT infrastructure, not specialized security operations."
 },
 {
  "id": 438,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A load balancer is configured to handle the heavy workload of decrypting incoming HTTPS traffic before passing it to backend web servers in plaintext. Which feature is being used?",
  "opts": [
   "A. Port Mirroring",
   "B. SSL/TLS Termination (Offloading)",
   "C. DNS Sinkholing",
   "D. Port Security"
  ],
  "correct": 1,
  "exp": "SSL/TLS termination (offloading) allows the load balancer to handle the decryption, reducing the CPU load on the actual web servers."
 },
 {
  "id": 439,
  "obj": "3.3",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company wants a backup strategy that is very fast to back up each day, even if it makes the restoration process slower and more complex. Which backup type should they use?",
  "opts": [
   "A. Full",
   "B. Differential",
   "C. Incremental",
   "D. Snapshot"
  ],
  "correct": 2,
  "exp": "Incremental backups only save data changed since the LAST backup (of any type). They are fastest to perform but require the full backup plus ALL incrementals to restore."
 },
 {
  "id": 440,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization implements 802.1X. When a user connects their laptop to an Ethernet port, the laptop presents credentials to the switch. In this architecture, what role is the laptop performing?",
  "opts": [
   "A. Authenticator",
   "B. Supplicant",
   "C. Authentication Server",
   "D. Proxy"
  ],
  "correct": 1,
  "exp": "In 802.1X, the Supplicant is the client device (laptop), the Authenticator is the switch/AP, and the Authentication Server is typically a RADIUS server."
 },
 {
  "id": 476,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization needs visibility into which cloud applications employees are using, the ability to enforce DLP policies on data uploaded to SaaS platforms, and detection of anomalous user behavior across all cloud services. Which solution BEST addresses all of these requirements?",
  "opts": [
   "A. Next-Generation Firewall (NGFW)",
   "B. Security Information and Event Management (SIEM)",
   "C. Cloud Access Security Broker (CASB)",
   "D. Virtual Private Network (VPN)"
  ],
  "correct": 2,
  "exp": "(C) is correct. A CASB sits between users and cloud service providers to provide visibility into shadow IT, enforce data loss prevention policies on cloud-bound data, and detect anomalous user behavior across SaaS applications. (A) An NGFW inspects network traffic but lacks deep integration with SaaS application APIs for visibility and DLP enforcement. (B) A SIEM aggregates and correlates logs but does not enforce inline DLP policies on cloud uploads. (D) A VPN encrypts traffic between endpoints but provides no cloud application visibility or policy enforcement."
 },
 {
  "id": 477,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Instead of allowing a VPN to provide broad access to the entire internal network, a company implements a solution that only grants access to specific applications after verifying user identity and device health. What is this?",
  "opts": [
   "A. NAC",
   "B. ZTNA (Zero Trust Network Access)",
   "C. Split Tunneling",
   "D. Air Gap"
  ],
  "correct": 1,
  "exp": "ZTNA provides granular, application-level access based on identity and context, rather than network-level access provided by traditional VPNs."
 },
 {
  "id": 478,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security architect divides a large flat network into hundreds of small, isolated segments to prevent lateral movement of malware. What is this technique called?",
  "opts": [
   "A. VLAN tagging",
   "B. Microsegmentation",
   "C. Load balancing",
   "D. Port security"
  ],
  "correct": 1,
  "exp": "Microsegmentation is a method of creating secure zones in data centers and cloud environments to isolate workloads and protect them individually."
 },
 {
  "id": 479,
  "obj": "3.1",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "In a hybrid cloud model, who is responsible for the physical security of the on-premises hardware?",
  "opts": [
   "A. The Cloud Provider",
   "B. The Customer",
   "C. Managed Service Provider",
   "D. Shared responsibility between both"
  ],
  "correct": 1,
  "exp": "In any model involving on-premises infrastructure, the customer is always responsible for the physical security of that hardware."
 },
 {
  "id": 480,
  "obj": "3.3",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A video editing workstation uses RAID 0 to maximize read and write performance across four drives. The system administrator warns the team that this configuration provides zero redundancy. If any single drive in the array fails, what is the result?",
  "opts": [
   "A. Only the data on the failed drive is lost; remaining drives retain their portions",
   "B. The array degrades but continues to function with reduced performance",
   "C. Total data loss, because RAID 0 stripes data across disks without parity or mirroring",
   "D. The array automatically rebuilds using parity blocks from the surviving drives"
  ],
  "correct": 2,
  "exp": "(C) is correct. RAID 0 stripes data across all drives with no redundancy, parity, or mirroring. If any single drive fails, the entire array is lost because each drive holds only fragments of every file. (A) is incorrect because data is interleaved across all drives, so losing one drive means no complete file can be recovered. (B) is incorrect because RAID 0 cannot operate in a degraded state. (D) is incorrect because RAID 0 has no parity data to rebuild from."
 },
 {
  "id": 481,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company wants to prevent data leakage to unsanctioned cloud applications. They deploy a tool that intercepts cloud traffic to enforce security policies and monitor usage. What is this?",
  "opts": [
   "A. Firewall",
   "B. CASB (Cloud Access Security Broker)",
   "C. SWG",
   "D. IDS"
  ],
  "correct": 1,
  "exp": "CASBs provide visibility and control over cloud application usage, enforcing security policies like DLP and access control."
 },
 {
  "id": 482,
  "obj": "3.3",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization replicates its data across two different geographic regions to ensure that a natural disaster in one region does not cause permanent data loss. What is this called?",
  "opts": [
   "A. Snapshotting",
   "B. Geo-redundancy",
   "C. RAID 6",
   "D. Load balancing"
  ],
  "correct": 1,
  "exp": "Geo-redundancy involves storing data in multiple, distant locations to provide resilience against regional disasters."
 },
 {
  "id": 483,
  "obj": "3.1",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A DevOps team uses Terraform templates stored in a Git repository to deploy all cloud infrastructure. Every change must go through a pull request review and automated validation pipeline before being applied. What is the PRIMARY security benefit of this approach?",
  "opts": [
   "A. It eliminates the need for network segmentation in the cloud",
   "B. It provides consistent, auditable, and repeatable deployments that prevent unauthorized configuration changes",
   "C. It replaces the need for identity and access management controls",
   "D. It guarantees zero downtime during infrastructure changes"
  ],
  "correct": 1,
  "exp": "(B) is correct. Infrastructure as Code (IaC) stored in version control provides a single source of truth, full audit history of every change, peer review through pull requests, and automated testing — all of which prevent unauthorized or inconsistent configuration changes. (A) IaC does not eliminate the need for network segmentation. (C) IAM controls are still required regardless of IaC usage. (D) IaC does not inherently guarantee zero downtime; that requires additional architectural patterns like blue-green deployments."
 },
 {
  "id": 484,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A network security solution detects requests for known malicious domains and redirects them to a safe 'parking page' to prevent C2 communication. What is this?",
  "opts": [
   "A. Reverse Proxy",
   "B. DNS Sinkhole",
   "C. Load Balancer",
   "D. Honeypot"
  ],
  "correct": 1,
  "exp": "A DNS sinkhole provides false DNS responses to malicious domains, effectively disabling their ability to communicate."
 },
 {
  "id": 485,
  "obj": "3.3",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A DLP system is configured to block any outgoing email that contains an attachment with more than 10 credit card numbers. Which data state is being protected?",
  "opts": [
   "A. Data at rest",
   "B. Data in motion",
   "C. Data in use",
   "D. Data residency"
  ],
  "correct": 1,
  "exp": "Data in motion (or data in transit) refers to data moving over a network, such as an email being sent."
 },
 {
  "id": 486,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization needs a firewall that can inspect encrypted TLS traffic, identify applications regardless of the port number they use, and integrate threat intelligence feeds for real-time blocking of known malicious indicators. Which device BEST meets these requirements?",
  "opts": [
   "A. Stateless packet-filtering firewall",
   "B. Circuit-level gateway",
   "C. Next-Generation Firewall (NGFW)",
   "D. Web Application Firewall (WAF)"
  ],
  "correct": 2,
  "exp": "(C) is correct. An NGFW combines traditional firewall capabilities with deep packet inspection, TLS decryption, application-layer awareness regardless of port, and integrated threat intelligence feeds. (A) A stateless packet filter only examines headers and cannot inspect encrypted traffic or identify applications. (B) A circuit-level gateway validates TCP handshakes but lacks deep inspection. (D) A WAF protects web applications specifically and does not provide broad network-level application identification or threat-feed integration."
 },
 {
  "id": 487,
  "obj": "3.3",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A system is designed so that if the primary server fails, a secondary server automatically takes over its IP address and continues processing requests. What is this called?",
  "opts": [
   "A. Backup",
   "B. Failover",
   "C. Snapshot",
   "D. RAID"
  ],
  "correct": 1,
  "exp": "Failover is the automatic switching to a redundant or standby computer server, system, hardware component or network upon the failure of the previously active application."
 },
 {
  "id": 488,
  "obj": "3.1",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company uses AWS, Azure, and Google Cloud. They struggle to maintain consistent security policies because each provider has its own tools and terminologies. What is this called?",
  "opts": [
   "A. Hybrid Cloud",
   "B. Multi-cloud silos / complexity",
   "C. Private Cloud",
   "D. Infrastructure as code"
  ],
  "correct": 1,
  "exp": "Multi-cloud refers to using multiple public clouds. Silos and complexity arise when security teams cannot manage them holistically."
 },
 {
  "id": 489,
  "obj": "3.2",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An administrator needs a firewall that automatically allows inbound response packets for connections that were initiated from inside the network, without requiring a separate inbound permit rule for each return flow. The firewall must track active TCP sessions and their states. Which type of firewall meets this requirement?",
  "opts": [
   "A. Stateless packet-filtering firewall",
   "B. Stateful inspection firewall",
   "C. Web Application Firewall (WAF)",
   "D. Circuit-level proxy"
  ],
  "correct": 1,
  "exp": "(B) is correct. A stateful firewall maintains a state table that tracks active connections. When an internal host initiates an outbound connection, the firewall automatically allows the corresponding return traffic without needing an explicit inbound rule. (A) A stateless packet filter evaluates each packet independently with no session awareness, requiring explicit rules for both directions. (C) A WAF inspects HTTP/HTTPS traffic for web application attacks, not general session tracking. (D) A circuit-level proxy validates session establishment but does not provide the same dynamic session-tracking capabilities as a stateful firewall."
 },
 {
  "id": 490,
  "obj": "3.1",
  "type": "mcq",
  "domain": 3,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "What is the primary attack surface concern for 'Serverless' (FaaS) applications?",
  "opts": [
   "A. OS Patching",
   "B. Event-data injection and insecure function code",
   "C. Physical hardware theft",
   "D. Hypervisor escape"
  ],
  "correct": 1,
  "exp": "In serverless, the provider manages the OS. The customer's primary risk is the security of the function code and how it handles input data from events."
 },
 {
  "id": 800,
  "type": "mcq",
  "domain": 3,
  "obj": "3.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A hospital deploys a Type 1 (bare-metal) hypervisor on its servers to host multiple virtual machines for its EHR system, lab system, and billing application. A security auditor asks why Type 1 was chosen over Type 2. Which response BEST explains the security advantage?",
  "opts": [
   "A. Type 1 hypervisors include built-in antivirus that protects all guest VMs automatically",
   "B. Type 1 hypervisors run directly on hardware without an underlying OS, reducing the attack surface compared to Type 2 which runs on top of a host OS",
   "C. Type 1 hypervisors encrypt all VM disk images by default while Type 2 does not",
   "D. Type 1 hypervisors allow unlimited snapshots while Type 2 limits them to five"
  ],
  "correct": 1,
  "exp": "Type 1 (bare-metal) hypervisors like VMware ESXi, Microsoft Hyper-V, and Xen run directly on the physical hardware with no host OS underneath. This reduces the attack surface because there is no general-purpose OS layer that could introduce vulnerabilities. Type 2 hypervisors (VMware Workstation, VirtualBox) run on top of a host OS (Windows, Linux, macOS), inheriting all of that OS's vulnerabilities and attack surface. In production and enterprise environments, Type 1 is preferred for security and performance. Type 1 does not include built-in AV (A), does not automatically encrypt disks (C), and snapshot limits (D) are not the differentiator."
 },
 {
  "id": 801,
  "type": "mcq",
  "domain": 3,
  "obj": "3.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A DevOps team provisions all infrastructure through version-controlled Ansible playbooks. When a developer needs a configuration change, they submit a pull request that must be reviewed and approved before merging. Once merged, the pipeline automatically applies the change. Which security benefit does this workflow PRIMARILY provide?",
  "opts": [
   "A. It eliminates the need for network firewalls since all changes are automated",
   "B. It provides an auditable change history with peer review, preventing unauthorized or unreviewed infrastructure modifications",
   "C. It encrypts all infrastructure configurations at rest using AES-256",
   "D. It guarantees zero downtime during deployments"
  ],
  "correct": 1,
  "exp": "Using Infrastructure as Code with version control and pull request workflows provides: an auditable trail of every infrastructure change (who changed what, when, and why), mandatory peer review before changes are applied (catching misconfigurations and security issues), and the ability to roll back to a known-good state. This is a governance and change management control. It does not eliminate the need for firewalls (A), does not inherently encrypt configurations (C), and does not guarantee zero downtime (D). The key security value is accountability, traceability, and prevention of unapproved changes — core principles of change management."
 },
 {
  "id": 802,
  "type": "mcq",
  "domain": 3,
  "obj": "3.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A manufacturing company connects its SCADA network to the corporate IT network so that managers can view production dashboards from their desktops. A security consultant strongly recommends placing a unidirectional security gateway (data diode) between the two networks. What does this device do?",
  "opts": [
   "A. It encrypts all traffic between the OT and IT networks using IPSec",
   "B. It physically enforces one-way data flow — allowing data out of the SCADA network for monitoring but preventing any traffic from entering the SCADA network from IT",
   "C. It acts as a load balancer distributing SCADA traffic across multiple IT servers",
   "D. It provides mutual TLS authentication between OT and IT devices"
  ],
  "correct": 1,
  "exp": "A unidirectional security gateway (data diode) is a hardware-enforced device that allows data to flow in only one direction — typically from the OT/SCADA network outward to the IT network. This means production data and dashboards can be sent to IT for monitoring, but no traffic can flow back into the SCADA network. Even if the IT network is fully compromised, attackers cannot send commands or malware into the OT environment because the hardware physically prevents inbound data flow. This is stronger than a firewall (which is software-configurable and can be misconfigured). Data diodes are used in critical infrastructure, military, and nuclear facilities. They do not encrypt (A), load balance (C), or perform mTLS (D)."
 },
 {
  "id": 803,
  "type": "multi",
  "domain": 3,
  "obj": "3.1",
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "A company is adopting a serverless architecture on AWS Lambda. The security team needs to understand the new shared responsibility boundaries. Which TWO security responsibilities shift ENTIRELY to the cloud provider in a serverless model compared to IaaS?",
  "opts": [
   "A. Operating system patching and hardening",
   "B. Application code security and input validation",
   "C. Runtime environment management and scaling infrastructure",
   "D. Data classification and access control policies",
   "E. Encryption key management for customer-managed keys"
  ],
  "correct": [0, 2],
  "exp": "In serverless/FaaS, the cloud provider takes full responsibility for: (A) OS patching and hardening — the customer never sees or manages the underlying OS, unlike IaaS where OS patching is the customer's job. (C) Runtime environment and scaling — the provider manages the execution environment, language runtimes, and auto-scaling infrastructure. The customer retains responsibility for: application code security (B) — insecure function code is still the customer's problem, data classification (D) — the customer always owns data governance, and customer-managed encryption keys (E) — if the customer chooses to manage their own keys, that remains their responsibility. The serverless shared responsibility model shifts more infrastructure burden to the provider but the customer must still secure their code and data."
 },
 {
  "id": 804,
  "type": "mcq",
  "domain": 3,
  "obj": "3.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A financial services company requires that all traffic between its on-premises data center and AWS VPC be transmitted over a dedicated, private connection — not over the public internet — to meet regulatory requirements for data in transit. Which connectivity option should the network team implement?",
  "opts": [
   "A. AWS Site-to-Site VPN over the public internet",
   "B. AWS Direct Connect — a dedicated private network connection between the data center and AWS",
   "C. An SSL/TLS VPN client on each user's workstation",
   "D. A publicly accessible S3 bucket with server-side encryption"
  ],
  "correct": 1,
  "exp": "AWS Direct Connect provides a dedicated, private network connection from the customer's data center to AWS. Traffic never traverses the public internet, which satisfies regulatory requirements for private connectivity, reduces latency, and provides consistent bandwidth. Similar services exist from other providers: Azure ExpressRoute and Google Cloud Interconnect. A site-to-site VPN (A) encrypts traffic but still routes it over the public internet. An SSL VPN client (C) is for individual user remote access, not data center connectivity. A public S3 bucket (D) is a data storage misconfiguration risk. For regulated industries requiring private connectivity, Direct Connect or equivalent dedicated connections are the standard solution."
 },
 {
  "id": 805,
  "type": "mcq",
  "domain": 3,
  "obj": "3.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst reviews firewall logs and notices that an internal server on the accounting VLAN is sending DNS queries directly to an external DNS server on the internet, bypassing the corporate DNS resolver. This behavior was not observed before. What is the MOST likely security concern?",
  "opts": [
   "A. The server needs a firmware update to fix a DNS bug",
   "B. The server may be compromised and using DNS tunneling to exfiltrate data or communicate with a C2 server",
   "C. The corporate DNS resolver is overloaded and the server is load balancing its queries",
   "D. The server is performing legitimate DNSSEC validation that requires direct external queries"
  ],
  "correct": 1,
  "exp": "DNS tunneling is a technique where attackers encode data within DNS queries and responses to exfiltrate information or maintain command-and-control communication. It is effective because DNS traffic is often allowed through firewalls without deep inspection. An internal server suddenly bypassing the corporate DNS resolver to query external DNS directly is a strong indicator of compromise. Normal corporate configurations route all DNS through internal resolvers for visibility and control. The security team should immediately investigate the server, block direct outbound DNS (port 53) from non-DNS servers at the firewall, and force all DNS through the corporate resolver. DNS tunneling detection is a key function of DNS security solutions and next-gen firewalls."
 },
 {
  "id": 806,
  "type": "mcq",
  "domain": 3,
  "obj": "3.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company wants to implement 802.1X on all wired switch ports. However, several network printers and IP cameras do not support 802.1X authentication. The security team still wants these devices on the network. Which approach BEST maintains security while accommodating these devices?",
  "opts": [
   "A. Disable 802.1X entirely since some devices cannot support it",
   "B. Configure MAC Authentication Bypass (MAB) for non-802.1X devices and place them on a restricted VLAN with limited network access",
   "C. Connect the printers and cameras to an unmanaged switch to bypass the authentication",
   "D. Assign static IP addresses to the devices so the switch can identify them by IP"
  ],
  "correct": 1,
  "exp": "MAC Authentication Bypass (MAB) is a fallback mechanism for devices that cannot perform 802.1X authentication. The switch identifies the device by its MAC address and, after verifying it against an approved list, places it on a restricted VLAN with only the access it needs (e.g., printers can communicate with the print server, cameras with the NVR). This maintains 802.1X for capable devices while accommodating IoT and legacy devices. Disabling 802.1X (A) removes security for all devices. An unmanaged switch (C) creates an uncontrolled network segment. Static IPs (D) do not provide authentication — IP addresses can be spoofed. MAB + restricted VLAN = the standard compensating control for non-802.1X devices."
 },
 {
  "id": 807,
  "type": "mcq",
  "domain": 3,
  "obj": "3.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "During a penetration test, the tester connects a rogue switch to a network port and establishes a trunk link with the production switch, gaining access to multiple VLANs. Which Layer 2 attack is being demonstrated, and what is the PRIMARY mitigation?",
  "opts": [
   "A. ARP poisoning — mitigate with dynamic ARP inspection",
   "B. VLAN hopping via switch spoofing — mitigate by disabling DTP and setting all user-facing ports to access mode",
   "C. MAC flooding — mitigate with port security limiting MAC addresses per port",
   "D. DHCP starvation — mitigate with DHCP snooping"
  ],
  "correct": 1,
  "exp": "VLAN hopping via switch spoofing occurs when an attacker connects a rogue switch (or configures a device) to negotiate a trunk link using DTP (Dynamic Trunking Protocol). Once a trunk is established, the attacker receives tagged traffic from all VLANs on that trunk, bypassing VLAN segmentation. Mitigation: disable DTP on all user-facing ports (switchport nonegotiate), set ports to access mode (switchport mode access), and explicitly assign VLANs. ARP poisoning (A) manipulates ARP tables for MitM attacks. MAC flooding (C) overwhelms the switch CAM table to force broadcast behavior. DHCP starvation (D) exhausts the DHCP address pool. Each is a distinct Layer 2 attack with its own specific mitigation."
 },
 {
  "id": 808,
  "type": "mcq",
  "domain": 3,
  "obj": "3.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company deploys a Secure Web Gateway (SWG) that all employee internet traffic must pass through. The SWG performs URL filtering, malware scanning, and enforces acceptable use policies. An employee attempts to access a known phishing site and receives a block page. Which security function did the SWG perform?",
  "opts": [
   "A. Intrusion prevention by dropping malicious packets at the network layer",
   "B. URL categorization and reputation-based filtering to block access to a known-malicious site",
   "C. Endpoint detection and response by quarantining the malware on the user's device",
   "D. Email gateway filtering by stripping the phishing link from an email"
  ],
  "correct": 1,
  "exp": "A Secure Web Gateway (SWG) is a proxy that inspects all web traffic (HTTP/HTTPS) between users and the internet. It maintains a database of categorized URLs and reputation scores. When a user attempts to access a site categorized as phishing, malware, or violating acceptable use policy, the SWG blocks the request and presents a block page. SWGs operate at the application layer for web traffic — they are not network-layer IPS (A), endpoint agents (C), or email gateways (D). SWGs are a key component of SASE architectures and are distinct from firewalls (which operate at lower layers) and CASBs (which focus on cloud application control). SWG = web-specific proxy security."
 },
 {
  "id": 809,
  "type": "multi",
  "domain": 3,
  "obj": "3.2",
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "A security architect is implementing defense in depth for a corporate network. The strategy must include controls at multiple layers to protect against a single point of failure. Which TWO combinations represent controls at DIFFERENT layers of a defense-in-depth strategy?",
  "opts": [
   "A. A network firewall at the perimeter AND a host-based firewall on each server",
   "B. Two identical network firewalls from the same vendor deployed side by side",
   "C. Endpoint anti-malware software AND network-based intrusion prevention",
   "D. Two copies of the same antivirus product installed on the same server",
   "E. Adding a second power supply to the firewall appliance"
  ],
  "correct": [0, 2],
  "exp": "Defense in depth uses multiple, overlapping security controls at different layers so that if one control fails, others still protect the asset. (A) Network firewall (perimeter/network layer) + host-based firewall (endpoint layer) = two different layers. If an attacker bypasses the network firewall, the host-based firewall provides another barrier. (C) Endpoint anti-malware (endpoint layer) + network IPS (network layer) = two different layers. Malware missed by the network IPS might be caught by endpoint protection and vice versa. Two identical firewalls (B) and duplicate antivirus (D) are redundancy, not defense in depth — they operate at the same layer with the same technology. A second power supply (E) is availability/redundancy, not a security control layer."
 },
 {
  "id": 810,
  "type": "mcq",
  "domain": 3,
  "obj": "3.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company performs a full backup on Sunday, then differential backups every night Monday through Saturday. A server crashes on Thursday morning. Which backup sets are needed to restore to Wednesday night's state?",
  "opts": [
   "A. Sunday full + Monday differential + Tuesday differential + Wednesday differential",
   "B. Sunday full + Wednesday differential only",
   "C. Wednesday differential only",
   "D. Sunday full + all incremental backups from Monday through Wednesday"
  ],
  "correct": 1,
  "exp": "Differential backups capture all changes since the LAST FULL backup — not since the last backup of any type. Wednesday's differential contains every change made since Sunday's full backup (Monday's changes + Tuesday's changes + Wednesday's changes are all included). Therefore, restoration requires only two sets: the Sunday full backup (baseline) plus the Wednesday differential. This is the key advantage of differential over incremental: faster and simpler restores. Incremental backups (D) only capture changes since the last backup of any type, requiring the full backup plus every incremental in sequence. The trade-off is that differentials grow larger each night as they accumulate more changes since the last full backup."
 },
 {
  "id": 811,
  "type": "mcq",
  "domain": 3,
  "obj": "3.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A database administrator needs to securely destroy data on solid-state drives (SSDs) that previously stored classified information before the drives are disposed of. The admin's supervisor says degaussing will be sufficient. Why is this approach INADEQUATE for SSDs?",
  "opts": [
   "A. Degaussing only works on optical media like CDs and DVDs",
   "B. SSDs use flash memory chips (NAND) that store data electronically, not magnetically — degaussing has no effect on them",
   "C. Degaussing SSDs causes them to overheat and release toxic fumes",
   "D. Degaussing only erases the first sector of the drive, leaving the rest intact"
  ],
  "correct": 1,
  "exp": "Degaussing uses a powerful magnetic field to erase data on magnetic media (HDDs, tapes). SSDs store data in NAND flash memory cells using electrical charges, not magnetic states. A degausser has zero effect on SSD data. For SSDs, approved destruction methods include: cryptographic erasure (if the drive supports hardware encryption — destroy the encryption key), the ATA Secure Erase command (vendor-specific), or physical destruction (shredding, disintegration, incineration). Physical destruction is the most reliable method for classified data on SSDs because wear-leveling algorithms may leave data remnants in areas not accessible through normal commands. This is a commonly tested distinction on Security+."
 },
 {
  "id": 812,
  "type": "mcq",
  "domain": 3,
  "obj": "3.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A cloud architect designs a system where the application tier runs in US-East-1 and automatically fails over to US-West-2 if the primary region becomes unavailable. Both regions are actively synchronized. A stakeholder asks what happens if both regions fail simultaneously. The architect explains this is extremely unlikely because each region has independent power, cooling, and networking. Which resilience concept does this multi-region design implement?",
  "opts": [
   "A. Load balancing within a single data center",
   "B. Geographic dispersal to eliminate single points of failure at the regional level",
   "C. RAID-6 across multiple cloud regions",
   "D. Cold site provisioning for disaster recovery"
  ],
  "correct": 1,
  "exp": "Geographic dispersal (also called geographic redundancy or multi-region deployment) places infrastructure in physically separate locations to eliminate regional single points of failure. Natural disasters, power grid failures, or network outages typically affect one geographic area — by running in two distant regions with active synchronization, the system survives a complete regional outage. This is a higher level of resilience than multi-AZ (multiple data centers within one region). Load balancing within one DC (A) does not protect against regional failure. RAID (C) is a disk-level technology, not a cloud architecture pattern. A cold site (D) has high RTO because infrastructure must be provisioned on demand. Active-active multi-region = the highest standard for cloud resilience."
 },
 {
  "id": 813,
  "type": "mcq",
  "domain": 3,
  "obj": "3.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company's data retention policy states that financial records must be retained for seven years and then securely destroyed. An IT administrator discovers that backup tapes from nine years ago containing financial records still exist in offsite storage. What risk does this create?",
  "opts": [
   "A. No risk — keeping data longer than required provides additional protection",
   "B. Increased liability — the organization may be compelled to produce outdated records during litigation, and the data represents an unnecessary breach target",
   "C. Improved compliance — exceeding the retention period demonstrates good faith",
   "D. Reduced storage costs because older tapes are cheaper to maintain"
  ],
  "correct": 1,
  "exp": "Retaining data beyond the required retention period creates several risks: legal liability (the organization can be compelled to search and produce these records during e-discovery, even if they should have been destroyed), increased breach impact (more data to steal if the storage facility is compromised), compliance violations (some regulations penalize over-retention as well as under-retention), and unnecessary storage costs. Data retention policies define both the minimum retention period AND the maximum — data should be securely destroyed when the retention period expires. Failure to follow destruction schedules is a common audit finding. The principle: retain what you must, destroy what you should, protect what you keep."
 },
 {
  "id": 814,
  "type": "multi",
  "domain": 3,
  "obj": "3.3",
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "A software company wants to ensure the integrity and authenticity of its application updates delivered to customers. Which TWO controls should be implemented in the software distribution process?",
  "opts": [
   "A. Code signing — digitally sign all update packages with the company's private key so customers can verify the publisher and detect tampering",
   "B. Distribute updates exclusively via unencrypted HTTP for maximum compatibility",
   "C. Secure hash verification — publish SHA-256 checksums alongside updates so customers can verify file integrity after download",
   "D. Allow customers to modify the update package before installation to customize features",
   "E. Store the code signing private key in a public GitHub repository for transparency"
  ],
  "correct": [0, 2],
  "exp": "Secure software distribution requires: (A) Code signing — the developer signs the update with their private key. The customer's system verifies the signature using the developer's public key, confirming both authenticity (it came from the legitimate publisher) and integrity (it has not been modified). This prevents supply chain attacks. (C) Hash verification — publishing SHA-256 checksums allows customers to independently verify the downloaded file matches the original. If an attacker modifies the file during download (MitM) or on a mirror, the hash will not match. Using unencrypted HTTP (B) exposes downloads to MitM modification. Allowing modification (D) defeats integrity controls. Publishing private keys (E) would allow anyone to sign malicious updates as the legitimate publisher — private keys must remain secret."
 },
 {
  "id": 815,
  "type": "mcq",
  "domain": 3,
  "obj": "3.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A logistics company uses GPS trackers on its fleet of delivery trucks. Each tracker is a small device with a cellular modem, a microcontroller, and 256 KB of RAM. The security team wants to ensure the GPS data transmitted to headquarters cannot be intercepted or spoofed. Which constraint makes securing these devices fundamentally different from securing a standard server?",
  "opts": [
   "A. The devices lack internet connectivity and cannot be reached remotely",
   "B. The devices have severely constrained computational resources, making full TLS stacks and traditional cryptographic operations impractical without lightweight alternatives",
   "C. The devices run Windows Server and can use standard enterprise security tools",
   "D. The devices are only used indoors where physical security eliminates the need for encryption"
  ],
  "correct": 1,
  "exp": "Resource-constrained IoT devices with limited CPU, RAM (256 KB), and power budgets cannot run full-featured TLS libraries, complex PKI operations, or standard enterprise security agents designed for servers with gigabytes of RAM. Instead, lightweight cryptographic protocols (DTLS, CoAP with OSCORE, or constrained versions of TLS) and purpose-built IoT security frameworks are needed. The devices DO have cellular connectivity (A is wrong), do NOT run Windows Server (C is wrong), and ARE used outdoors on trucks (D is wrong). Understanding resource constraints and their impact on security implementation is critical for IoT architecture decisions — you must choose security controls appropriate for the device's capabilities."
 },
 {
  "id": 816,
  "type": "mcq",
  "domain": 3,
  "obj": "3.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company uses Terraform to define all its AWS infrastructure. The security policy requires that no server can ever be modified in place — if a change is needed, the existing server must be destroyed and a new one built from the updated template. Which IaC principle does this enforce?",
  "opts": [
   "A. Elasticity — automatically scaling resources based on demand",
   "B. Immutable infrastructure — servers are never modified after deployment, only replaced",
   "C. Multitenancy — sharing infrastructure among multiple customers",
   "D. Serverless computing — eliminating server management entirely"
  ],
  "correct": 1,
  "exp": "Immutable infrastructure means that once a server is deployed, it is never modified (no SSH to apply patches, no manual configuration changes). Any change requires building a new server from the updated IaC template and destroying the old one. Security benefits: eliminates configuration drift (servers always match the template), ensures consistency (every server is identical and reproducible), simplifies auditing (the template IS the documentation), and prevents persistent threats (malware cannot survive a server replacement). Elasticity (A) is about scaling capacity. Multitenancy (C) is about shared infrastructure. Serverless (D) eliminates server management but is a different model entirely. Immutability + IaC = the foundation of secure cloud infrastructure."
 },
 {
  "id": 817,
  "type": "mcq",
  "domain": 3,
  "obj": "3.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization's security policy requires that all outbound web traffic from employee workstations passes through a centralized inspection point before reaching the internet. The solution must cache frequently accessed content, log all URLs visited, and enforce acceptable use policies. Which device fulfills this role?",
  "opts": [
   "A. Reverse proxy server",
   "B. Forward proxy server",
   "C. Network-based IDS",
   "D. DNS root server"
  ],
  "correct": 1,
  "exp": "A forward proxy sits between internal clients (employee workstations) and the internet. All outbound web requests pass through the proxy, which can: cache content (reducing bandwidth), log all visited URLs (providing visibility), enforce acceptable use policies (blocking prohibited categories), and scan downloads for malware. This is distinct from a reverse proxy (A), which sits in front of servers to protect them from inbound traffic. A forward proxy protects clients going outbound; a reverse proxy protects servers from inbound requests. An IDS (C) monitors traffic but does not proxy or cache it. A DNS root server (D) resolves domain names at the top of the DNS hierarchy. Forward proxy = outbound traffic inspection and control for client devices."
 },
 {
  "id": 818,
  "type": "mcq",
  "domain": 3,
  "obj": "3.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A government agency requires that its classified network has absolutely no physical or logical connection to the internet or any other unclassified network. Removable media is strictly controlled, and data transfers require a manual review process. Which network architecture does this describe?",
  "opts": [
   "A. DMZ with dual firewalls",
   "B. Air-gapped network",
   "C. Software-defined network with microsegmentation",
   "D. VPN with full tunnel configuration"
  ],
  "correct": 1,
  "exp": "An air-gapped network is physically isolated from all other networks — there is no cable, no wireless connection, and no logical path to the internet or any unclassified system. Data can only enter or leave through carefully controlled removable media with manual approval processes. Air gaps are used for classified military systems, nuclear facility controls, and critical infrastructure where the highest level of isolation is required. A DMZ (A) is connected to both the internet and internal network by design. SDN with microsegmentation (C) provides logical isolation but still shares physical infrastructure. A full-tunnel VPN (D) routes traffic through a network — it requires connectivity, not isolation. Air gap = the strongest form of network isolation, trading convenience for maximum security."
 },
 {
  "id": 819,
  "type": "multi",
  "domain": 3,
  "obj": "3.3",
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "A healthcare organization is planning its business continuity strategy. The CISO must define metrics to measure the organization's tolerance for downtime and data loss after a disaster. Which TWO metrics are used to quantify these tolerances?",
  "opts": [
   "A. RTO (Recovery Time Objective) — the maximum acceptable time to restore operations after a disruption",
   "B. MTBF (Mean Time Between Failures) — the average time a system operates before failing",
   "C. RPO (Recovery Point Objective) — the maximum acceptable amount of data loss measured in time",
   "D. IOPS (Input/Output Operations Per Second) — the storage performance benchmark",
   "E. SLA (Service Level Agreement) — the contractual uptime percentage with a vendor"
  ],
  "correct": [0, 2],
  "exp": "Business continuity planning uses two primary metrics: (A) RTO — defines how quickly systems must be restored. An RTO of 4 hours means the organization can tolerate up to 4 hours of downtime. This drives decisions about hot vs. warm vs. cold sites. (C) RPO — defines how much data loss is acceptable. An RPO of 1 hour means the organization can tolerate losing up to 1 hour of data, driving decisions about backup frequency (hourly backups, continuous replication). MTBF (B) measures hardware reliability, not recovery tolerance. IOPS (D) measures storage performance. SLA (E) defines vendor obligations but is not the organization's internal tolerance metric. RTO answers 'how long can we be down?' and RPO answers 'how much data can we lose?' — together they define the recovery strategy and budget."
 },

 {
  id: 4000,
  type: 'firewall',
  domain: 3,
  obj: '3.2',
  badge: '⚙ SIM',
  badgeClass: 'pbq-b',
  stem: 'A company hosts a public web server in a DMZ. Configure each firewall rule below — set Allow, Block, or Drop to enforce the correct network security policy.',
  rules: [
    { desc: 'Public HTTP traffic to web server', src: 'Internet', dst: 'DMZ-WebSrv', port: '80', proto: 'TCP', opts: ['Allow','Block','Drop'], correct: 'Allow' },
    { desc: 'Public HTTPS traffic to web server', src: 'Internet', dst: 'DMZ-WebSrv', port: '443', proto: 'TCP', opts: ['Allow','Block','Drop'], correct: 'Allow' },
    { desc: 'Direct SSH from internet to web server', src: 'Internet', dst: 'DMZ-WebSrv', port: '22', proto: 'TCP', opts: ['Allow','Block','Drop'], correct: 'Block' },
    { desc: 'Web server queries internal database', src: 'DMZ-WebSrv', dst: 'DB-Internal', port: '3306', proto: 'TCP', opts: ['Allow','Block','Drop'], correct: 'Allow' },
    { desc: 'Admin SSH from internal subnet to DMZ', src: '10.0.0.0/24', dst: 'DMZ-WebSrv', port: '22', proto: 'TCP', opts: ['Allow','Block','Drop'], correct: 'Allow' },
    { desc: 'Telnet from any source to any destination', src: 'Any', dst: 'Any', port: '23', proto: 'TCP', opts: ['Allow','Block','Drop'], correct: 'Drop' }
  ],
  exp: 'HTTP (80) and HTTPS (443) must be Allowed inbound — the web server is public-facing. Direct SSH from the internet is Blocked — admins should reach it via a jump host or VPN from the internal network only. The web server needs database access (3306) to function, so that is Allowed. Admin SSH from the internal trusted subnet is Allowed as a controlled management path. Telnet (23) is plaintext and should be Dropped at the perimeter entirely — no response is returned, making the service appear non-existent.'
 },

 {
  id: 4001,
  type: 'firewall',
  domain: 3,
  obj: '3.2',
  badge: '⚙ SIM',
  badgeClass: 'pbq-b',
  stem: 'A security engineer is hardening the firewall for remote access. Set each rule to Allow, Block, or Drop — permit only secure approved channels and eliminate insecure protocols.',
  rules: [
    { desc: 'SSL VPN clients to VPN gateway', src: 'RemoteUsers', dst: 'VPN-GW', port: '443', proto: 'TCP', opts: ['Allow','Block','Drop'], correct: 'Allow' },
    { desc: 'OpenVPN clients to VPN gateway', src: 'RemoteUsers', dst: 'VPN-GW', port: '1194', proto: 'UDP', opts: ['Allow','Block','Drop'], correct: 'Allow' },
    { desc: 'Telnet from remote users to internal', src: 'RemoteUsers', dst: 'Internal', port: '23', proto: 'TCP', opts: ['Allow','Block','Drop'], correct: 'Drop' },
    { desc: 'FTP from remote users to file server', src: 'RemoteUsers', dst: 'FileServer', port: '21', proto: 'TCP', opts: ['Allow','Block','Drop'], correct: 'Block' },
    { desc: 'RDP via established VPN tunnel', src: 'VPN-Pool', dst: 'Internal', port: '3389', proto: 'TCP', opts: ['Allow','Block','Drop'], correct: 'Allow' },
    { desc: 'Direct RDP from internet (bypassing VPN)', src: 'Internet', dst: 'Internal', port: '3389', proto: 'TCP', opts: ['Allow','Block','Drop'], correct: 'Block' }
  ],
  exp: 'SSL VPN (443/TCP) and OpenVPN (1194/UDP) are the approved encrypted tunnels — both Allowed. Telnet (23) transmits credentials in plaintext and must be Dropped — silently discarded so no service discovery is possible. FTP (21) is insecure and Blocked — require SFTP or FTPS instead. RDP (3389) from the VPN pool is Allowed because the user already authenticated through the VPN. Direct RDP from the internet is Blocked — exposed RDP is one of the most common ransomware entry points and must never be permitted directly.'
 },

 {
  id: 4002,
  type: 'firewall',
  domain: 3,
  obj: '3.2',
  badge: '⚙ SIM',
  badgeClass: 'pbq-b',
  stem: 'A company is implementing zero-trust micro-segmentation. Configure each rule to enforce least-privilege access between internal network segments — set Allow, Block, or Drop.',
  rules: [
    { desc: 'HR subnet to Finance subnet (any port)', src: 'HR-Subnet', dst: 'Finance-Subnet', port: 'Any', proto: 'Any', opts: ['Allow','Block','Drop'], correct: 'Block' },
    { desc: 'Dev environment to Production database', src: 'Dev-Subnet', dst: 'Prod-DB', port: '3306', proto: 'TCP', opts: ['Allow','Block','Drop'], correct: 'Block' },
    { desc: 'IT Admin subnet SSH to all servers', src: 'IT-Admin', dst: 'All-Servers', port: '22', proto: 'TCP', opts: ['Allow','Block','Drop'], correct: 'Allow' },
    { desc: 'Corporate users outbound HTTPS', src: 'Corporate', dst: 'Internet', port: '443', proto: 'TCP', opts: ['Allow','Block','Drop'], correct: 'Allow' },
    { desc: 'Guest WiFi to corporate internal network', src: 'GuestWiFi', dst: 'Corporate', port: 'Any', proto: 'Any', opts: ['Allow','Block','Drop'], correct: 'Drop' },
    { desc: 'App servers sending logs to SIEM', src: 'App-Servers', dst: 'SIEM', port: '514', proto: 'UDP', opts: ['Allow','Block','Drop'], correct: 'Allow' }
  ],
  exp: 'Zero trust enforces least-privilege between every segment. HR to Finance is Blocked — different data classification, no business need. Dev to Prod DB is Blocked — developers must never have direct access to production data. IT Admin SSH is the authorised management path (Allowed). Outbound HTTPS is Allowed for normal business. Guest WiFi is Dropped from all internal access — Drop (not Block) so the network appears invisible to guest devices. SIEM syslog (514/UDP) from app servers is Allowed — the security monitoring infrastructure must receive logs from everywhere.'
 },

 {
  id: 4003,
  type: 'cat',
  domain: 3,
  obj: '3.2',
  badge: '⚙ PBQ',
  badgeClass: 'pbq-b',
  stem: 'A security architect must design wireless access for a healthcare campus. Drag each wireless component into the tier where it correctly belongs.',
  categories: ['WPA3-Enterprise (802.1X)', 'WPA2-Personal (PSK)', 'Insecure — Disable'],
  items: ['RADIUS Server', 'Pre-Shared Key', 'EAP-TLS Certificate Auth', 'WPS Push-Button', 'AES-CCMP Encryption', 'TKIP Encryption', '802.1X Port Authentication', 'Per-User Unique Credentials'],
  correctMap: {
    'WPA3-Enterprise (802.1X)': ['RADIUS Server', 'EAP-TLS Certificate Auth', 'AES-CCMP Encryption', '802.1X Port Authentication', 'Per-User Unique Credentials'],
    'WPA2-Personal (PSK)': ['Pre-Shared Key'],
    'Insecure — Disable': ['WPS Push-Button', 'TKIP Encryption']
  },
  exp: 'WPA3-Enterprise uses 802.1X with a RADIUS server, EAP-TLS certificate authentication, AES-CCMP encryption, and issues unique credentials per user — required for HIPAA-compliant and enterprise environments. WPA2-Personal uses a single Pre-Shared Key shared by all users, offering no individual accountability (fine for home, not enterprise). WPS has known critical vulnerabilities including the Pixie Dust attack and brute-forcing of its 8-digit PIN — disable it on all access points. TKIP is a deprecated encryption protocol replaced by AES-CCMP; WPA3 does not support TKIP at all.'
 }
];
