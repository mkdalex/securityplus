// ═══════════════════════════════════════════════════════
// ACRONYM DICTIONARY & INTERACTIVE GUESS-TO-REVEAL
// ═══════════════════════════════════════════════════════

const ACR_DICT = {
  // --- Identity & Access ---
  AAA:   { full: 'Authentication Authorization Accounting', desc: 'Framework that controls who gets in, what they can do, and logs what they did' },
  ABAC:  { full: 'Attribute-Based Access Control', desc: 'Grants access based on user/resource attributes like department, time of day, or location' },
  ACL:   { full: 'Access Control List', desc: 'Rules that define which users or traffic are allowed or denied access to a resource' },
  CAC:   { full: 'Common Access Card', desc: 'Smart card used by DoD personnel for physical and logical authentication' },
  CHAP:  { full: 'Challenge-Handshake Authentication Protocol', desc: 'Authenticates users with a three-way handshake without sending passwords in cleartext' },
  DAC:   { full: 'Discretionary Access Control', desc: 'Resource owner decides who gets access — most flexible but least secure model' },
  EAP:   { full: 'Extensible Authentication Protocol', desc: 'Framework for wireless and point-to-point authentication — supports multiple auth methods' },
  HOTP:  { full: 'HMAC-Based One-Time Password', desc: 'Generates one-time codes using a counter value — code stays valid until used' },
  IAM:   { full: 'Identity and Access Management', desc: 'Systems and policies that manage digital identities and control resource access' },
  IdP:   { full: 'Identity Provider', desc: 'Service that stores and verifies user identity — the trust source in federated auth' },
  KDC:   { full: 'Key Distribution Center', desc: 'Issues tickets in Kerberos authentication — contains the AS and TGS' },
  LDAP:  { full: 'Lightweight Directory Access Protocol', desc: 'Queries and modifies directory services like Active Directory — uses port 389/636' },
  MAC:   { full: 'Mandatory Access Control', desc: 'System enforces access using labels and clearance levels — users cannot override' },
  MFA:   { full: 'Multi-Factor Authentication', desc: 'Requires two or more factor types: something you know, have, are, or somewhere you are' },
  OAUTH: { full: 'Open Authorization', desc: 'Lets apps access resources on behalf of a user without sharing credentials' },
  OTP:   { full: 'One-Time Password', desc: 'Password valid for a single login session or transaction' },
  PAM:   { full: 'Privileged Access Management', desc: 'Controls and monitors access for admin and root-level accounts' },
  PAP:   { full: 'Password Authentication Protocol', desc: 'Sends credentials in cleartext — insecure, only use when nothing else is available' },
  PIV:   { full: 'Personal Identity Verification', desc: 'Federal smart card standard for physical and logical access to government systems' },
  RADIUS:{ full: 'Remote Authentication Dial-In User Service', desc: 'Centralizes authentication for VPN, wireless, and network access — encrypts only the password' },
  RBAC:  { full: 'Role-Based Access Control', desc: 'Assigns permissions to roles, then assigns users to roles — simplifies large-scale management' },
  SAML:  { full: 'Security Assertion Markup Language', desc: 'XML-based protocol for exchanging authentication data between IdP and service provider' },
  SSO:   { full: 'Single Sign-On', desc: 'Log in once, access multiple applications without re-authenticating' },
  TOTP:  { full: 'Time-Based One-Time Password', desc: 'Generates codes that expire every 30-60 seconds — used by authenticator apps' },

  // --- Cryptography & PKI ---
  AES:   { full: 'Advanced Encryption Standard', desc: 'Symmetric block cipher — current standard, uses 128/192/256-bit keys' },
  CBC:   { full: 'Cipher Block Chaining', desc: 'Block cipher mode where each block is XORed with the previous ciphertext block' },
  CCMP:  { full: 'Counter Mode CBC-MAC Protocol', desc: 'Encryption protocol used by WPA2 — based on AES, replaced TKIP' },
  CRL:   { full: 'Certificate Revocation List', desc: 'Published list of certificates that have been revoked before their expiration date' },
  CSR:   { full: 'Certificate Signing Request', desc: 'Message sent to a CA to request a signed digital certificate' },
  DES:   { full: 'Data Encryption Standard', desc: 'Legacy 56-bit symmetric cipher — considered insecure, replaced by AES' },
  DSA:   { full: 'Digital Signature Algorithm', desc: 'Creates digital signatures for authentication and integrity verification' },
  ECC:   { full: 'Elliptic Curve Cryptography', desc: 'Asymmetric encryption using smaller keys for equivalent strength — efficient for mobile' },
  FDE:   { full: 'Full Disk Encryption', desc: 'Encrypts the entire drive so data is unreadable without the decryption key' },
  GCM:   { full: 'Galois Counter Mode', desc: 'Block cipher mode providing both encryption and authentication — fast and parallelizable' },
  HMAC:  { full: 'Hash-Based Message Authentication Code', desc: 'Combines a hash function with a secret key to verify integrity and authenticity' },
  HSM:   { full: 'Hardware Security Module', desc: 'Tamper-resistant physical device that stores and manages cryptographic keys' },
  KEK:   { full: 'Key Encryption Key', desc: 'A key used specifically to encrypt other keys during key distribution' },
  OCSP:  { full: 'Online Certificate Status Protocol', desc: 'Checks certificate revocation status in real-time instead of downloading the full CRL' },
  PEM:   { full: 'Privacy Enhanced Mail', desc: 'Base64-encoded format for storing certificates and keys — the -----BEGIN CERTIFICATE----- files' },
  PFS:   { full: 'Perfect Forward Secrecy', desc: 'Generates unique session keys so compromising one key does not expose past sessions' },
  PGP:   { full: 'Pretty Good Privacy', desc: 'Encrypts and signs emails and files using a web-of-trust model instead of a CA' },
  PKI:   { full: 'Public Key Infrastructure', desc: 'Framework of CAs, certificates, and policies that manages trust for asymmetric encryption' },
  RSA:   { full: 'Rivest Shamir Adleman', desc: 'Asymmetric algorithm used for encryption and digital signatures — relies on factoring large primes' },
  SHA:   { full: 'Secure Hash Algorithm', desc: 'Produces a fixed-length hash for integrity verification — SHA-256 is the current standard' },
  TPM:   { full: 'Trusted Platform Module', desc: 'Chip on the motherboard that stores encryption keys and verifies platform integrity at boot' },

  // --- Network Security ---
  AH:    { full: 'Authentication Header', desc: 'IPSec protocol that provides integrity and authentication but not encryption' },
  ARP:   { full: 'Address Resolution Protocol', desc: 'Maps IP addresses to MAC addresses on a local network — vulnerable to spoofing' },
  DHCP:  { full: 'Dynamic Host Configuration Protocol', desc: 'Automatically assigns IP addresses and network config to devices — can be spoofed' },
  DMZ:   { full: 'Demilitarized Zone', desc: 'Network segment between internal and external networks for public-facing servers' },
  DNS:   { full: 'Domain Name System', desc: 'Translates domain names to IP addresses — target for poisoning and hijacking attacks' },
  ESP:   { full: 'Encapsulating Security Payload', desc: 'IPSec protocol that provides encryption, integrity, and authentication for packets' },
  FTP:   { full: 'File Transfer Protocol', desc: 'Transfers files in cleartext on ports 20/21 — use SFTP or FTPS instead' },
  FTPS:  { full: 'FTP Secure', desc: 'FTP encrypted with TLS — adds confidentiality to file transfers' },
  HTTP:  { full: 'Hypertext Transfer Protocol', desc: 'Unencrypted web traffic on port 80 — always prefer HTTPS' },
  HTTPS: { full: 'Hypertext Transfer Protocol Secure', desc: 'HTTP encrypted with TLS on port 443 — provides confidentiality and integrity' },
  ICMP:  { full: 'Internet Control Message Protocol', desc: 'Used for ping and traceroute — can be abused for reconnaissance and DDoS' },
  IKE:   { full: 'Internet Key Exchange', desc: 'Negotiates security associations and keys for IPSec VPN tunnels' },
  IMAP:  { full: 'Internet Message Access Protocol', desc: 'Retrieves email from a server while keeping messages synced — port 143/993' },
  IPSec: { full: 'Internet Protocol Security', desc: 'Encrypts and authenticates IP traffic — used in site-to-site and remote-access VPNs' },
  L2TP:  { full: 'Layer 2 Tunneling Protocol', desc: 'Creates VPN tunnels but has no built-in encryption — always paired with IPSec' },
  MPLS:  { full: 'Multiprotocol Label Switching', desc: 'Routes traffic using labels instead of IP lookups — used in carrier WANs' },
  MTU:   { full: 'Maximum Transmission Unit', desc: 'Largest packet size a network link can carry — fragmentation issues cause connectivity problems' },
  NAC:   { full: 'Network Access Control', desc: 'Checks device health and identity before granting network access' },
  NAT:   { full: 'Network Address Translation', desc: 'Maps private IPs to public IPs — hides internal network structure from the internet' },
  NFC:   { full: 'Near Field Communication', desc: 'Short-range wireless for contactless payments and access cards — range under 10 cm' },
  NTP:   { full: 'Network Time Protocol', desc: 'Synchronizes clocks across systems — critical for log correlation and Kerberos auth' },
  POP:   { full: 'Post Office Protocol', desc: 'Downloads email from server and typically deletes it — port 110/995' },
  PPTP:  { full: 'Point-to-Point Tunneling Protocol', desc: 'Legacy VPN protocol with known vulnerabilities — do not use' },
  PSK:   { full: 'Pre-Shared Key', desc: 'Shared secret configured on both sides before communication — used in WPA and VPNs' },
  RDP:   { full: 'Remote Desktop Protocol', desc: 'Remote access to Windows desktops on port 3389 — frequent target for brute force attacks' },
  RFID:  { full: 'Radio Frequency Identification', desc: 'Wireless identification using tags and readers — used for badges and inventory tracking' },
  SCP:   { full: 'Secure Copy Protocol', desc: 'Transfers files encrypted over SSH — secure alternative to FTP' },
  SDN:   { full: 'Software-Defined Networking', desc: 'Separates the control plane from the data plane — enables centralized programmable network management' },
  SFTP:  { full: 'Secure File Transfer Protocol', desc: 'File transfer over SSH — encrypts both commands and data on port 22' },
  SMTP:  { full: 'Simple Mail Transfer Protocol', desc: 'Sends email between servers on port 25/587 — needs SPF/DKIM/DMARC to prevent spoofing' },
  SNMP:  { full: 'Simple Network Management Protocol', desc: 'Monitors and manages network devices — v3 adds encryption, v1/v2c send community strings in cleartext' },
  SSH:   { full: 'Secure Shell', desc: 'Encrypted remote access and command execution on port 22 — replaces Telnet' },
  SSL:   { full: 'Secure Sockets Layer', desc: 'Deprecated encryption protocol replaced by TLS — all versions have known vulnerabilities' },
  TCP:   { full: 'Transmission Control Protocol', desc: 'Connection-oriented transport ensuring reliable, ordered delivery — uses three-way handshake' },
  TLS:   { full: 'Transport Layer Security', desc: 'Encrypts data in transit — successor to SSL, used in HTTPS, email, and VPNs' },
  UDP:   { full: 'User Datagram Protocol', desc: 'Connectionless transport with no guaranteed delivery — faster but unreliable' },
  VLAN:  { full: 'Virtual Local Area Network', desc: 'Logically segments a physical network — isolates broadcast domains for security' },
  VoIP:  { full: 'Voice over Internet Protocol', desc: 'Voice calls over IP networks — vulnerable to eavesdropping and vishing' },
  VPC:   { full: 'Virtual Private Cloud', desc: 'Isolated virtual network within a public cloud environment' },
  VPN:   { full: 'Virtual Private Network', desc: 'Encrypted tunnel over untrusted networks — site-to-site or remote-access' },
  WAP:   { full: 'Wireless Access Point', desc: 'Connects wireless clients to a wired network — should use WPA3 or WPA2-Enterprise' },

  // --- Security Tools & Infrastructure ---
  CASB:  { full: 'Cloud Access Security Broker', desc: 'Sits between users and cloud services to enforce security policies and visibility' },
  DLP:   { full: 'Data Loss Prevention', desc: 'Inspects data in transit, at rest, and in use to block unauthorized exfiltration' },
  EDR:   { full: 'Endpoint Detection and Response', desc: 'Monitors endpoints for suspicious behavior, provides investigation and response capabilities' },
  FIM:   { full: 'File Integrity Monitoring', desc: 'Detects unauthorized changes to critical system files by comparing hashes' },
  HIDS:  { full: 'Host-Based Intrusion Detection System', desc: 'Monitors a single host for suspicious activity — analyzes logs, file changes, and processes' },
  HIPS:  { full: 'Host-Based Intrusion Prevention System', desc: 'Detects and blocks malicious activity on a single host in real-time' },
  IDS:   { full: 'Intrusion Detection System', desc: 'Monitors traffic or systems for malicious activity and alerts — does not block' },
  IPS:   { full: 'Intrusion Prevention System', desc: 'Monitors and actively blocks detected threats inline — sits in the traffic path' },
  MDM:   { full: 'Mobile Device Management', desc: 'Enforces security policies on mobile devices — remote wipe, encryption, app control' },
  NGFW:  { full: 'Next-Generation Firewall', desc: 'Combines traditional firewall with IPS, application awareness, and deep packet inspection' },
  NIDS:  { full: 'Network-Based Intrusion Detection System', desc: 'Monitors network traffic for suspicious patterns — passive, alert-only' },
  NIPS:  { full: 'Network-Based Intrusion Prevention System', desc: 'Monitors network traffic and blocks malicious packets inline' },
  SIEM:  { full: 'Security Information and Event Management', desc: 'Aggregates logs from all sources, correlates events, and generates alerts for analysts' },
  SOAR:  { full: 'Security Orchestration Automation and Response', desc: 'Automates incident response playbooks and coordinates tools to reduce response time' },
  SOC:   { full: 'Security Operations Center', desc: 'Team and facility that monitors, detects, and responds to security incidents 24/7' },
  UEM:   { full: 'Unified Endpoint Management', desc: 'Manages all endpoint types from one console — extends MDM to laptops and IoT' },
  UTM:   { full: 'Unified Threat Management', desc: 'All-in-one security appliance combining firewall, IDS/IPS, antivirus, and content filtering' },
  WAF:   { full: 'Web Application Firewall', desc: 'Filters HTTP traffic to block SQL injection, XSS, and other Layer 7 attacks' },
  WIDS:  { full: 'Wireless Intrusion Detection System', desc: 'Monitors wireless spectrum for rogue access points and unauthorized connections' },
  WIPS:  { full: 'Wireless Intrusion Prevention System', desc: 'Detects and actively deauthenticates rogue wireless devices' },
  XDR:   { full: 'Extended Detection and Response', desc: 'Correlates data across endpoints, network, and cloud for unified threat detection' },
  SWG:   { full: 'Secure Web Gateway', desc: 'Filters outbound web traffic to block malicious sites and enforce acceptable use' },

  // --- Threats & Attacks ---
  APT:   { full: 'Advanced Persistent Threat', desc: 'Sophisticated, long-term attack by well-funded actors — typically nation-states' },
  CSRF:  { full: 'Cross-Site Request Forgery', desc: 'Tricks an authenticated user\'s browser into making unwanted requests to a trusted site' },
  CVE:   { full: 'Common Vulnerabilities and Exposures', desc: 'Standardized IDs for publicly known security vulnerabilities — e.g. CVE-2024-1234' },
  CVSS:  { full: 'Common Vulnerability Scoring System', desc: 'Rates vulnerability severity on a 0-10 scale — used to prioritize patching' },
  DDoS:  { full: 'Distributed Denial of Service', desc: 'Overwhelms a target with traffic from many compromised systems simultaneously' },
  DoS:   { full: 'Denial of Service', desc: 'Floods a target to make it unavailable — single source, unlike DDoS' },
  IoC:   { full: 'Indicator of Compromise', desc: 'Evidence that a breach occurred — unusual traffic, file hashes, suspicious IPs' },
  MITM:  { full: 'Man-in-the-Middle', desc: 'Attacker intercepts and potentially alters communication between two parties' },
  PUP:   { full: 'Potentially Unwanted Program', desc: 'Software that may be unwanted but is not clearly malware — adware, toolbars' },
  RAT:   { full: 'Remote Access Trojan', desc: 'Malware that gives an attacker full remote control of the victim\'s system' },
  SQL:   { full: 'Structured Query Language', desc: 'Database query language — SQL injection exploits unsanitized input to manipulate queries' },
  TTP:   { full: 'Tactics Techniques and Procedures', desc: 'Describes how threat actors operate — used in frameworks like MITRE ATT&CK' },
  XSS:   { full: 'Cross-Site Scripting', desc: 'Injects malicious scripts into web pages viewed by other users' },

  // --- Governance, Risk & Compliance ---
  ALE:   { full: 'Annualized Loss Expectancy', desc: 'Expected yearly cost of a risk — calculated as SLE x ARO' },
  ARO:   { full: 'Annualized Rate of Occurrence', desc: 'How many times a threat is expected to occur per year' },
  AUP:   { full: 'Acceptable Use Policy', desc: 'Defines what employees are allowed to do with company systems and data' },
  BCP:   { full: 'Business Continuity Plan', desc: 'Procedures to maintain critical operations during and after a disaster' },
  BIA:   { full: 'Business Impact Analysis', desc: 'Identifies critical business functions and the impact of losing them — drives RTO/RPO decisions' },
  BPA:   { full: 'Business Partnership Agreement', desc: 'Formal agreement defining responsibilities and expectations between business partners' },
  CISO:  { full: 'Chief Information Security Officer', desc: 'Executive responsible for the organization\'s overall security posture and strategy' },
  COOP:  { full: 'Continuity of Operations Plan', desc: 'Government-specific plan for maintaining essential functions during emergencies' },
  DPO:   { full: 'Data Protection Officer', desc: 'Role required by GDPR to oversee data protection compliance' },
  DRP:   { full: 'Disaster Recovery Plan', desc: 'Steps to restore IT systems and data after a disaster — focused on technical recovery' },
  EULA:  { full: 'End User License Agreement', desc: 'Legal contract between software vendor and user defining usage terms' },
  GDPR:  { full: 'General Data Protection Regulation', desc: 'EU law governing personal data protection — applies to any org handling EU citizen data' },
  GRC:   { full: 'Governance Risk and Compliance', desc: 'Integrated approach to aligning security with business objectives, risk tolerance, and regulations' },
  HIPAA: { full: 'Health Insurance Portability and Accountability Act', desc: 'US law protecting medical records and health information — requires PHI safeguards' },
  ISA:   { full: 'Interconnection Security Agreement', desc: 'Documents security requirements when connecting two organizations\' IT systems' },
  MOU:   { full: 'Memorandum of Understanding', desc: 'Non-binding agreement outlining intentions between parties — less formal than a contract' },
  MSA:   { full: 'Master Service Agreement', desc: 'Umbrella contract governing terms for all future work between two parties' },
  NDA:   { full: 'Non-Disclosure Agreement', desc: 'Legal contract preventing disclosure of confidential information' },
  PCI:   { full: 'Payment Card Industry', desc: 'PCI DSS sets security standards for organizations that handle credit card data' },
  PHI:   { full: 'Protected Health Information', desc: 'Any health data that can identify an individual — regulated by HIPAA' },
  PII:   { full: 'Personally Identifiable Information', desc: 'Data that can identify a person — name, SSN, biometrics, email address' },
  ROI:   { full: 'Return on Investment', desc: 'Measures the financial benefit of a security investment relative to its cost' },
  RPO:   { full: 'Recovery Point Objective', desc: 'Maximum acceptable data loss measured in time — how far back you restore from' },
  RTO:   { full: 'Recovery Time Objective', desc: 'Maximum acceptable downtime — how fast systems must be restored after failure' },
  SLA:   { full: 'Service Level Agreement', desc: 'Contract defining expected performance metrics like uptime, response time, and penalties' },
  SLE:   { full: 'Single Loss Expectancy', desc: 'Dollar cost of a single occurrence of a risk — used to calculate ALE' },
  SOW:   { full: 'Statement of Work', desc: 'Defines specific deliverables, timelines, and costs for a project or engagement' },

  // --- Cloud & Architecture ---
  API:   { full: 'Application Programming Interface', desc: 'Defines how software components interact — must be secured with auth and rate limiting' },
  BYOD:  { full: 'Bring Your Own Device', desc: 'Employees use personal devices for work — requires MDM and clear security policies' },
  COPE:  { full: 'Corporate-Owned Personally Enabled', desc: 'Company owns the device but allows limited personal use' },
  CYOD:  { full: 'Choose Your Own Device', desc: 'Employee picks from a list of approved company-owned devices' },
  IaaS:  { full: 'Infrastructure as a Service', desc: 'Cloud provides VMs, storage, and networking — customer manages OS and up' },
  ICS:   { full: 'Industrial Control System', desc: 'Manages physical processes in manufacturing and utilities — often legacy and hard to patch' },
  IoT:   { full: 'Internet of Things', desc: 'Network-connected devices like cameras and sensors — massive attack surface, weak defaults' },
  MTBF:  { full: 'Mean Time Between Failures', desc: 'Average time a repairable system runs before failing — higher is better' },
  MTTF:  { full: 'Mean Time to Failure', desc: 'Average lifespan of a non-repairable component before it fails' },
  MTTR:  { full: 'Mean Time to Repair', desc: 'Average time to fix a failed system and restore service — lower is better' },
  NAS:   { full: 'Network-Attached Storage', desc: 'File-level storage device accessible over the network — simpler than a SAN' },
  PaaS:  { full: 'Platform as a Service', desc: 'Cloud provides the runtime environment — customer only manages code and data' },
  RAID:  { full: 'Redundant Array of Independent Disks', desc: 'Combines multiple drives for redundancy or performance — RAID 1 mirrors, RAID 5 stripes with parity' },
  RTOS:  { full: 'Real-Time Operating System', desc: 'OS that processes data with guaranteed timing — used in embedded and industrial systems' },
  SaaS:  { full: 'Software as a Service', desc: 'Cloud delivers the full application — provider manages everything, customer just uses it' },
  SAN:   { full: 'Storage Area Network', desc: 'High-speed block-level storage network — used for databases and mission-critical apps' },
  SCADA: { full: 'Supervisory Control and Data Acquisition', desc: 'Monitors and controls industrial equipment remotely — common target in critical infrastructure attacks' },
  VDI:   { full: 'Virtual Desktop Infrastructure', desc: 'Hosts user desktops on centralized servers — easier to secure and manage' },

  // --- Mail & DNS Security ---
  DKIM:  { full: 'DomainKeys Identified Mail', desc: 'Adds a digital signature to emails so recipients can verify the sender\'s domain' },
  DMARC: { full: 'Domain-Based Message Authentication Reporting and Conformance', desc: 'Ties SPF and DKIM together with a policy telling receivers what to do with failures' },
  SPF:   { full: 'Sender Policy Framework', desc: 'DNS record listing which servers are authorized to send email for your domain' },

  // --- Wireless ---
  SSID:  { full: 'Service Set Identifier', desc: 'The broadcast name of a wireless network — hiding it is not real security' },
  TKIP:  { full: 'Temporal Key Integrity Protocol', desc: 'Legacy WPA encryption — deprecated, replaced by CCMP/AES in WPA2' },
  WEP:   { full: 'Wired Equivalent Privacy', desc: 'Broken wireless encryption — easily cracked in minutes, never use' },
  WPA:   { full: 'Wi-Fi Protected Access', desc: 'Wireless security protocol — WPA3 with SAE is current standard' },
  SAE:   { full: 'Simultaneous Authentication of Equals', desc: 'WPA3 key exchange that resists offline dictionary attacks — replaces PSK handshake' },

  // --- Frameworks & Standards ---
  CSIRT: { full: 'Computer Security Incident Response Team', desc: 'Dedicated team that handles security incidents — detection through recovery' },
  ISAC:  { full: 'Information Sharing and Analysis Center', desc: 'Industry-specific groups that share threat intelligence between organizations' },
  NIST:  { full: 'National Institute of Standards and Technology', desc: 'US agency that publishes security frameworks, guidelines, and standards' },
  OSINT: { full: 'Open-Source Intelligence', desc: 'Gathering intelligence from publicly available sources — social media, DNS, public records' },
  OWASP: { full: 'Open Web Application Security Project', desc: 'Publishes the Top 10 web application security risks — industry standard reference' },
  SCAP:  { full: 'Security Content Automation Protocol', desc: 'Suite of standards for automating vulnerability management and compliance checking' },
  STIX:  { full: 'Structured Threat Information Expression', desc: 'Standardized language for describing cyber threat intelligence data' },
  TAXII: { full: 'Trusted Automated Exchange of Intelligence Information', desc: 'Transport protocol for sharing STIX threat intelligence between organizations' },

  // --- Misc Security ---
  CAPTCHA:{ full: 'Completely Automated Public Turing Test to Tell Computers and Humans Apart', desc: 'Challenge that distinguishes humans from bots — prevents automated attacks' },
  CERT:  { full: 'Computer Emergency Response Team', desc: 'Coordinates response to cybersecurity incidents — often government-affiliated' },
  CIA:   { full: 'Confidentiality Integrity Availability', desc: 'The three pillars of information security — every control maps back to these' },
  DEP:   { full: 'Data Execution Prevention', desc: 'Prevents code from running in memory regions marked as non-executable — stops buffer overflows' },
  DFIR:  { full: 'Digital Forensics and Incident Response', desc: 'Investigates breaches, preserves evidence, and contains threats' },
  GPO:   { full: 'Group Policy Object', desc: 'Active Directory mechanism for centrally managing Windows settings and security policies' },
  IRP:   { full: 'Incident Response Plan', desc: 'Documented procedures for detecting, containing, eradicating, and recovering from incidents' },
  MSSP:  { full: 'Managed Security Service Provider', desc: 'Third-party that manages and monitors an organization\'s security infrastructure' },
  NOC:   { full: 'Network Operations Center', desc: 'Team and facility monitoring network health, performance, and availability' },
  SDLC:  { full: 'Software Development Life Cycle', desc: 'Phases of software development — security should be integrated at every stage' },
  UAT:   { full: 'User Acceptance Testing', desc: 'End users verify the system meets requirements before production deployment' },
  UPS:   { full: 'Uninterruptible Power Supply', desc: 'Battery backup that provides power during outages — gives time for clean shutdown' },
  UEFI:  { full: 'Unified Extensible Firmware Interface', desc: 'Modern firmware replacing BIOS — supports Secure Boot to prevent rootkits' },
};

// Skip very short / ambiguous acronyms that cause false positives
const ACR_SKIP = new Set(['OR','AN','IT','IS','IF','AT','AS','TO','IN','ON','NO','DO','UP','SO','AP','HA','IV','IP','IR','OT','CA']);

// Session memory: acronyms the user has correctly guessed this session
const acrGuessed = new Set();

// ═══════════════════════════════════════════════════════
// SCAN & HIGHLIGHT
// ═══════════════════════════════════════════════════════

// Build a regex that matches dictionary keys as whole words, longest-first
const _acrKeys = Object.keys(ACR_DICT)
  .filter(k => !ACR_SKIP.has(k) && k.length >= 2)
  .sort((a, b) => b.length - a.length);
const _acrRe = new RegExp('\\b(' + _acrKeys.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')\\b', 'g');

function highlightAcronyms(root) {
  if (!root) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      // skip inside buttons, inputs, selects, and already-wrapped acronym spans
      const p = node.parentElement;
      if (!p) return NodeFilter.FILTER_REJECT;
      if (p.closest('button, input, select, textarea, .acr')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);

  for (const tn of textNodes) {
    const text = tn.textContent;
    _acrRe.lastIndex = 0;
    if (!_acrRe.test(text)) continue;

    // Build replacement fragment
    const frag = document.createDocumentFragment();
    let last = 0;
    _acrRe.lastIndex = 0;
    let m;
    while ((m = _acrRe.exec(text)) !== null) {
      const acr = m[1];
      // Check it's actually in dict (case-sensitive key lookup)
      const key = _acrKeys.find(k => k === acr);
      if (!key) continue;

      if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));

      const span = document.createElement('span');
      span.className = 'acr' + (acrGuessed.has(key) ? ' acr-known' : '');
      span.dataset.acr = key;
      span.textContent = acr;
      span.addEventListener('click', openAcrPopup);
      frag.appendChild(span);
      last = m.index + m[0].length;
    }
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    if (last > 0) tn.parentNode.replaceChild(frag, tn);
  }
}

// ═══════════════════════════════════════════════════════
// POPUP — GUESS TO REVEAL
// ═══════════════════════════════════════════════════════

let _acrPopup = null; // current popup element

function openAcrPopup(e) {
  e.stopPropagation();
  closeAcrPopup();

  const span = e.currentTarget;
  const key = span.dataset.acr;
  const entry = ACR_DICT[key];
  if (!entry) return;
  const full = entry.full;
  const desc = entry.desc;

  // Already guessed this session — show expansion directly
  if (acrGuessed.has(key)) {
    showSolvedPopup(span, key, full, desc);
    return;
  }

  const words = full.split(' ');
  // Track revealed positions per word: start with first letter only
  const revealed = words.map(w => {
    const r = new Array(w.length).fill(false);
    r[0] = true;
    return r;
  });

  const popup = document.createElement('div');
  popup.className = 'acr-popup';

  const renderMask = () => words.map((w, wi) =>
    w.split('').map((ch, ci) => revealed[wi][ci] ? ch : '_').join('')
  ).join(' ');

  // Header
  const hdr = document.createElement('div');
  hdr.className = 'acr-popup-hdr';
  hdr.textContent = key;
  popup.appendChild(hdr);

  // Masked expansion
  const mask = document.createElement('div');
  mask.className = 'acr-popup-mask';
  mask.textContent = renderMask();
  popup.appendChild(mask);

  // Description (hidden until solved)
  const descEl = document.createElement('div');
  descEl.className = 'acr-popup-desc';
  descEl.textContent = desc;
  descEl.style.display = 'none';
  popup.appendChild(descEl);

  // Input
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'acr-popup-input';
  input.placeholder = 'Type the full expansion...';
  input.autocomplete = 'off';
  input.spellcheck = false;
  popup.appendChild(input);

  // Bottom row: hint button + feedback
  const bot = document.createElement('div');
  bot.className = 'acr-popup-bot';
  const hintBtn = document.createElement('button');
  hintBtn.className = 'acr-popup-hint';
  hintBtn.textContent = 'Hint';
  const fb = document.createElement('div');
  fb.className = 'acr-popup-fb';
  bot.appendChild(hintBtn);
  bot.appendChild(fb);
  popup.appendChild(bot);

  // Position popup near the acronym
  document.body.appendChild(popup);
  positionPopup(popup, span);
  _acrPopup = popup;

  // Focus input
  setTimeout(() => input.focus(), 50);

  const solve = () => {
    acrGuessed.add(key);
    markKnown(key);
    mask.textContent = full;
    mask.classList.add('acr-popup-solved');
    descEl.style.display = '';
    input.disabled = true;
    hintBtn.disabled = true;
  };

  // --- Hint logic ---
  hintBtn.addEventListener('click', (ev) => {
    ev.stopPropagation();
    // Reveal one random hidden letter per word
    for (let wi = 0; wi < words.length; wi++) {
      const hidden = [];
      for (let ci = 0; ci < words[wi].length; ci++) {
        if (!revealed[wi][ci]) hidden.push(ci);
      }
      if (hidden.length > 0) {
        revealed[wi][hidden[Math.floor(Math.random() * hidden.length)]] = true;
      }
    }
    mask.textContent = renderMask();

    // Check if fully revealed by hints
    const allRevealed = words.every((_, wi) => revealed[wi].every(Boolean));
    if (allRevealed) {
      solve();
      fb.textContent = full;
      fb.className = 'acr-popup-fb solved';
    }
  });

  // --- Guess logic ---
  input.addEventListener('input', () => {
    const guess = input.value.trim();
    if (!guess) { fb.textContent = ''; fb.className = 'acr-popup-fb'; return; }

    const normalize = s => s.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (normalize(guess) === normalize(full)) {
      // Correct!
      solve();
      fb.textContent = 'Correct!';
      fb.className = 'acr-popup-fb solved';
      input.value = full;
    } else {
      // Show word-by-word match feedback
      const guessWords = guess.split(/\s+/);
      const matchCount = words.filter((w, i) =>
        guessWords[i] && guessWords[i].toLowerCase() === w.toLowerCase()
      ).length;
      if (guessWords.length >= 2 && matchCount > 0) {
        fb.textContent = matchCount + ' of ' + words.length + ' words correct';
        fb.className = 'acr-popup-fb partial';
      } else {
        fb.textContent = '';
        fb.className = 'acr-popup-fb';
      }
    }
  });

  // Close on click outside
  setTimeout(() => {
    document.addEventListener('click', _closeOnOutside);
  }, 10);
}

function showSolvedPopup(span, key, full, desc) {
  const popup = document.createElement('div');
  popup.className = 'acr-popup acr-popup-mini';

  const hdr = document.createElement('div');
  hdr.className = 'acr-popup-hdr';
  hdr.textContent = key;
  popup.appendChild(hdr);

  const exp = document.createElement('div');
  exp.className = 'acr-popup-mask acr-popup-solved';
  exp.textContent = full;
  popup.appendChild(exp);

  const descEl = document.createElement('div');
  descEl.className = 'acr-popup-desc';
  descEl.textContent = desc;
  popup.appendChild(descEl);

  document.body.appendChild(popup);
  positionPopup(popup, span);
  _acrPopup = popup;

  setTimeout(() => {
    document.addEventListener('click', _closeOnOutside);
  }, 10);
}

function positionPopup(popup, anchor) {
  const rect = anchor.getBoundingClientRect();
  const pw = popup.offsetWidth;
  const ph = popup.offsetHeight;

  let left = rect.left + rect.width / 2 - pw / 2;
  let top = rect.bottom + 8;

  // Keep within viewport
  if (left < 8) left = 8;
  if (left + pw > window.innerWidth - 8) left = window.innerWidth - pw - 8;
  if (top + ph > window.innerHeight - 8) top = rect.top - ph - 8; // flip above

  popup.style.left = left + 'px';
  popup.style.top = top + 'px';
}

function closeAcrPopup() {
  if (_acrPopup) { _acrPopup.remove(); _acrPopup = null; }
  document.removeEventListener('click', _closeOnOutside);
}

function _closeOnOutside(e) {
  if (_acrPopup && !_acrPopup.contains(e.target) && !e.target.closest('.acr')) {
    closeAcrPopup();
  }
}

function markKnown(key) {
  document.querySelectorAll(`.acr[data-acr="${key}"]`).forEach(el => el.classList.add('acr-known'));
}
