const Q_D4 = [
 {
  "id": 1,
  "obj": "4.2",
  "type": "order",
  "domain": 4,
  "badge": "PBQ · Drag & Drop",
  "badgeClass": "pbq-b",
  "stem": "A SOC analyst has just confirmed that ransomware is actively encrypting files on multiple servers. Using the CompTIA incident response lifecycle, arrange the response phases into the correct order from first to last.",
  "items": [
   "Recovery",
   "Lessons Learned",
   "Containment",
   "Identification",
   "Eradication",
   "Preparation"
  ],
  "correctOrder": [
   "Preparation",
   "Identification",
   "Containment",
   "Eradication",
   "Recovery",
   "Lessons Learned"
  ],
  "exp": "IR Lifecycle: Preparation (done before any incident — tools, runbooks, training) → Identification (confirming the incident has occurred) → Containment (stop spread — isolate affected hosts, kill network segments) → Eradication (remove malware, patch the vector, clean systems) → Recovery (restore from clean backups, verify systems, return to production) → Lessons Learned (post-incident review: what happened, what worked, what to improve). On the real exam this is asked as scenario context — \"ransomware detected, what is the NEXT step\" — so knowing the order cold is essential."
 },
 {
  "id": 53,
  "obj": "4.3",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A SIEM alert fires indicating 47 consecutive failed login attempts against an administrator account from the same IP address in 3 minutes, followed by a successful authentication. Which incident classification is MOST appropriate?",
  "opts": [
   "A. False positive — account lockout policies would have prevented this",
   "B. Brute force attack resulting in successful compromise — treat as active incident",
   "C. Password spraying — escalate to the vulnerability team",
   "D. Phishing — escalate to the email security team"
  ],
  "correct": 1,
  "exp": "47 failed attempts + 1 successful = successful brute force attack. The successful login after rapid consecutive failures is the critical indicator — the attacker found the correct password. This should be treated as an active compromise: isolate the account, reset credentials, investigate what was accessed during the authenticated session, and initiate IR. It is NOT a false positive — if lockout was configured, the attack would have stopped; the success indicates either lockout wasn't configured or the attacker evaded it. Password spraying uses few attempts across many accounts to avoid lockout — this is many attempts against one account. Phishing involves deception, not brute force."
 },
 {
  "id": 54,
  "obj": "4.5",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A forensic investigator is handed a seized laptop and needs to acquire its contents for analysis. Before imaging, the investigator connects a write blocker between the laptop drive and the forensic workstation. Why?",
  "opts": [
   "A. To speed up the imaging process",
   "B. To prevent the forensic workstation from modifying the evidence drive during acquisition",
   "C. To encrypt the forensic image during creation",
   "D. To verify the chain of custody documentation"
  ],
  "correct": 1,
  "exp": "A write blocker (hardware or software) allows read access to the evidence drive while physically or logically preventing any write operations to it. Without a write blocker, the forensic workstation's OS might write to the drive (updating timestamps, creating swap files, mounting the filesystem) — which would alter evidence and potentially render it inadmissible. Write blockers ensure the evidence drive remains in its original state throughout acquisition. Imaging speed is a hardware performance factor. Encryption of the image is handled separately. Chain of custody is documentation — not a function of a write blocker. Evidence preservation = write blocker."
 },
 {
  "id": 55,
  "obj": "4.5",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst is investigating a compromised host and needs to collect volatile evidence before powering it down. Which piece of evidence should be collected FIRST?",
  "opts": [
   "A. Hard disk image",
   "B. Event logs from the Windows Event Viewer",
   "C. CPU register contents and active RAM",
   "D. Network connection state (netstat output)"
  ],
  "correct": 2,
  "exp": "The order of volatility principle: collect most volatile data first as it is lost soonest. CPU register contents and RAM (active memory) are the most volatile — they are lost the instant power is removed. RAM may contain running processes, decryption keys, active network connections, cleartext credentials, and evidence of in-memory malware. The order from most to least volatile: CPU/registers → RAM → Network state/ARP/routing tables → Running processes → Hard disk → Optical media → Archival. Hard disk (A) is the least volatile and should be imaged last. Event logs (B) are on the hard disk. Network state (D) is volatile but less so than RAM."
 },
 {
  "id": 57,
  "obj": "4.3",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security operations centre deploys a system that automatically receives SIEM alerts, enriches them with threat intelligence context, and executes a playbook that blocks suspicious IPs at the firewall, disables the affected user account in Active Directory, and creates a ServiceNow ticket — all without analyst intervention. Which technology enables this automated response?",
  "opts": [
   "A. SIEM",
   "B. IDS/IPS",
   "C. SOAR",
   "D. Endpoint Detection and Response (EDR)"
  ],
  "correct": 2,
  "exp": "SOAR (Security Orchestration, Automation, and Response) automates multi-step security workflows via playbooks. It integrates multiple security and IT tools (SIEM, firewall, Active Directory, ticketing systems) and executes coordinated responses automatically. Key SOAR capabilities: ingestion of alerts, automated enrichment, playbook execution, cross-tool orchestration. SIEM (A) aggregates and correlates logs, generates alerts — but requires human analysts to respond. IDS/IPS (B) detects/blocks network threats inline but doesn't orchestrate enterprise-wide responses. EDR (D) monitors and responds to endpoint threats. SOAR = the automation and orchestration layer."
 },
 {
  "id": 58,
  "obj": "4.6",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company runs a penetration test. During the test, the tester is given network diagrams, a list of IP ranges, and a low-privileged domain account. They are told which systems are in scope. Which type of test is this?",
  "opts": [
   "A. Black-box test",
   "B. Grey-box test",
   "C. White-box test",
   "D. Red team exercise"
  ],
  "correct": 1,
  "exp": "Grey-box testing provides the tester with partial information about the target — enough to be realistic and efficient without full insider knowledge. Network diagrams, IP ranges, and a low-privileged account simulate a scenario where an attacker has obtained some internal access or information (e.g., compromised a contractor account). Black-box provides zero prior knowledge. White-box provides complete information (source code, full credentials, architecture docs). A red team exercise is a comprehensive multi-phase simulation — typically longer duration, combining physical, social engineering, and technical attacks. Partial information + defined scope + low-privilege account = grey-box."
 },
 {
  "id": 59,
  "obj": "4.2",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An analyst reviewing endpoint logs finds that a PowerShell command was executed using <code>-ExecutionPolicy Bypass</code> and <code>-EncodedCommand</code> flags with a long Base64-encoded string. No corresponding scheduled task or user action is associated with the execution. What does this MOST likely indicate?",
  "opts": [
   "A. A legitimate IT automation script with secure encoding",
   "B. PowerShell remoting being used by the systems administrator",
   "C. A living-off-the-land attack using built-in tools to execute malicious code",
   "D. A failed PowerShell remoting connection"
  ],
  "correct": 2,
  "exp": "\"Living off the land\" (LotL) attacks use legitimate, built-in system tools (PowerShell, WMI, certutil, mshta) to execute malicious code — avoiding detection by not dropping additional malware files that AV might detect. <code>-ExecutionPolicy Bypass</code> bypasses PowerShell execution restrictions. <code>-EncodedCommand</code> + Base64 obfuscates the payload to evade string-based detection. No user association = the command was likely triggered by malware already on the system. This is a very common attack technique and heavily tested on Security+. Legitimate IT scripts exist but wouldn't bypass execution policy in this way. Threat hunters specifically look for these PowerShell flags."
 },
 {
  "id": 60,
  "obj": "2.2",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A help desk technician reports that a user called claiming to be the CFO, saying they are locked out of their account and need it unlocked immediately before an important board meeting. The technician cannot verify the caller's identity through the normal verification process. What should the technician do?",
  "opts": [
   "A. Unlock the account immediately — the CFO's request takes priority",
   "B. Politely decline to bypass verification procedures regardless of the caller's claimed identity",
   "C. Ask the CFO to email their request and unlock it after receiving the email",
   "D. Escalate to a manager to approve the exception"
  ],
  "correct": 1,
  "exp": "Social engineering (specifically pretexting + impersonation) is most effective when urgency and authority are combined. The \"important meeting\" creates time pressure to bypass procedures; the claimed executive identity creates authority pressure. Security procedures exist precisely because attackers pose as executives — the verification process should never be bypassed regardless of claimed identity. Asking for an email (C) is slightly better but the attacker could also send a spoofed email. Escalating to a manager (D) transfers the social engineering pressure to the manager. The correct answer is: follow the verification procedure every time, without exceptions, regardless of claimed authority or urgency."
 },
 {
  "id": 61,
  "obj": "4.3",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A user's account shows login activity from Melbourne at 8:00 AM AEST and then from Tokyo at 8:45 AM AEST on the same day. The security team confirms the user is in the Melbourne office. Which type of alert does a modern identity platform generate for this?",
  "opts": [
   "A. Privilege escalation alert",
   "B. Impossible travel alert",
   "C. Anomalous data access alert",
   "D. Lateral movement alert"
  ],
  "correct": 1,
  "exp": "Impossible travel (geographic velocity anomaly) detects when the same account logs in from two geographic locations within a time window that is physically impossible. Melbourne to Tokyo in 45 minutes is not achievable by commercial aviation. This strongly indicates credential theft — an attacker in Tokyo is using stolen credentials while the legitimate user is in Melbourne. This is a core UEBA (User and Entity Behaviour Analytics) detection. Privilege escalation concerns gaining elevated permissions. Data access anomalies concern unusual file or data access patterns. Lateral movement is traversal between internal systems. Geographic impossibility = impossible travel."
 },
 {
  "id": 62,
  "obj": "4.3",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security team deploys a server on the network that is not part of any production service and has no legitimate business users. It is configured to appear as an attractive target with fake sensitive files. Any interaction with this server is immediately flagged as suspicious. What is this called?",
  "opts": [
   "A. Sandbox",
   "B. DMZ server",
   "C. Honeypot",
   "D. Canary token"
  ],
  "correct": 2,
  "exp": "A honeypot is a decoy system designed to attract and detect attackers. Because it has zero legitimate users or functions, ANY interaction with it is inherently malicious or unauthorised — producing extremely low false-positive rates. Honeypots provide intelligence on attacker techniques (TTPs), detect internal threats, and provide early warning of network intrusions. A sandbox is an isolated environment for safely executing suspicious code. A DMZ server is a legitimate internet-facing server in a protected network segment. A canary token is a digital tripwire (a fake file, URL, or credential) that alerts when accessed — similar concept but smaller scale."
 },
 {
  "id": 63,
  "obj": "4.5",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An analyst receives an alert from the SIEM: a domain admin account logged in at 2:30 AM on a Saturday, accessed and exported the entire customer database, then logged out. The domain admin says they were asleep. What should the analyst do FIRST?",
  "opts": [
   "A. Disable the domain admin account and escalate to the IR team",
   "B. Email the domain admin asking them to confirm what they were doing",
   "C. Wait until Monday to investigate during business hours",
   "D. Run a vulnerability scan on the domain controller"
  ],
  "correct": 0,
  "exp": "This alert exhibits multiple high-severity IOCs: off-hours access, data exfiltration of the entire customer database, and the legitimate admin denying involvement — strongly indicating credential compromise. The FIRST action is immediate containment: disable the account to prevent further access, then escalate to the incident response team. Emailing the admin (B) is already done — they denied it. Waiting (C) allows continued access and exfiltration. Running a vulnerability scan (D) is a post-incident investigation step. In IR: identify → contain → eradicate. Containment (disabling the account) is the immediate priority when active exfiltration is suspected."
 },
 {
  "id": 64,
  "obj": "4.1",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst is examining a Windows host for evidence of persistence. They check the registry and find an unfamiliar executable path under <code>HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run</code>. What does this location indicate?",
  "opts": [
   "A. The executable is a legitimate Windows system service",
   "B. The executable is configured to run automatically when any user logs in",
   "C. The executable has elevated privileges and runs as SYSTEM",
   "D. The executable was recently downloaded from the internet"
  ],
  "correct": 1,
  "exp": "The Windows Registry Run key <code>HKLM\\...\\Run</code> (HKEY_LOCAL_MACHINE) configures programs to execute automatically at user logon — for ALL users on the machine. This is one of the most common persistence mechanisms used by malware (trojans, RATs, backdoors). The corresponding user-specific key is <code>HKCU\\...\\Run</code> (HKEY_CURRENT_USER) which runs for the logged-in user only. HKLM requires admin/system privileges to write, suggesting the malware escalated privileges. Running as SYSTEM is a separate configuration. Internet download history is tracked in browser metadata. Run keys = persistence through logon autostart."
 },
 {
  "id": 65,
  "obj": "4.1",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation wants to implement role-based access control for their cloud infrastructure. Instead of creating separate IAM user accounts for each developer, they want developers' applications to programmatically access cloud resources securely without long-lived credentials. Which approach is MOST appropriate?",
  "opts": [
   "A. Embed IAM user access keys in application configuration files",
   "B. Share a single IAM user account with a rotating password among developers",
   "C. Use IAM roles with temporary credentials assigned to application instances",
   "D. Store credentials in a shared cloud storage bucket accessible to the team"
  ],
  "correct": 2,
  "exp": "IAM roles with temporary credentials (STS tokens) is the AWS/Azure/GCP best practice for application-to-service authentication. The application instance is assigned a role (not a user account), and the cloud provider automatically rotates short-lived temporary credentials. No long-lived credentials need to be stored anywhere. Embedding access keys (A) in config files is a critical security failure — keys are frequently committed to source control and exposed. Shared accounts (B) violate individual accountability and least privilege. Credentials in shared storage (D) is highly vulnerable. IAM roles = no stored secrets, automatic rotation, least privilege."
 },
 {
  "id": 66,
  "obj": "4.3",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst is asked to find all log entries from a server where the HTTP status code was 500 and the request was a POST method, within a 2-million-line log file. Which command BEST achieves this?",
  "opts": [
   "A. <code>ls -la access.log</code>",
   "B. <code>grep \"POST\" access.log | grep \" 500 \"</code>",
   "C. <code>cat access.log | tail -500</code>",
   "D. <code>find / -name access.log</code>"
  ],
  "correct": 1,
  "exp": "Piping grep commands filters log files efficiently. <code>grep \"POST\" access.log</code> returns all lines containing POST. Piping to <code>grep \" 500 \"</code> further filters for 500 status codes. The result is only lines matching both criteria. This is a fundamental Linux log analysis skill tested on Security+. <code>ls -la</code> lists file properties. <code>tail -500</code> shows the last 500 lines — not filtering by content. <code>find</code> locates files by name. Security analysts frequently use grep, awk, sed, and piping for log triage in real-world SOC work — CompTIA specifically tests basic command-line log analysis skills."
 },
 {
  "id": 67,
  "obj": "4.2",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "After a security incident, a company implements several changes to prevent recurrence. One change involves reviewing what happened, identifying gaps, and updating runbooks. Which phase of the incident response lifecycle does this activity belong to?",
  "opts": [
   "A. Containment",
   "B. Eradication",
   "C. Recovery",
   "D. Lessons Learned"
  ],
  "correct": 3,
  "exp": "Lessons Learned (also called Post-Incident Activity) is the final phase of the IR lifecycle. It involves a post-mortem review: what happened, what worked, what didn't, what should change. Outputs include updated runbooks/playbooks, new detection rules, security control improvements, and training updates. This phase is critical for continuous improvement of the security programme. Containment limits the spread of the incident. Eradication removes the threat (malware, backdoors, compromised accounts). Recovery restores systems to normal operations. Lessons Learned comes after all operational phases are complete."
 },
 {
  "id": 68,
  "obj": "4.3",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security engineer is reviewing the output of <code>netstat -an</code> on a Windows server and finds a connection showing state <code>ESTABLISHED</code> on local port 3389 from an external IP address not in any approved remote access list. What does this indicate and what should be done?",
  "opts": [
   "A. Normal — port 3389 is always open on Windows servers",
   "B. Port 3389 is RDP — an unauthorised external RDP connection is active; isolate the host immediately",
   "C. Port 3389 is LDAP — an unauthorised directory query is in progress",
   "D. Port 3389 is HTTPS — a web application is receiving external traffic normally"
  ],
  "correct": 1,
  "exp": "Port 3389 = RDP (Remote Desktop Protocol). An ESTABLISHED connection on 3389 from an unauthorised external IP indicates an active, live RDP session from an unknown source — this is a critical security incident. RDP brute force and exploitation is one of the most common attack vectors. Immediate action: isolate the host from the network to prevent further access or lateral movement, then investigate what was accessed. Port 389 = LDAP. Port 636 = LDAPS. Port 443 = HTTPS. Knowing your ports: 3389 = RDP, 22 = SSH, 23 = Telnet, 21 = FTP, 25 = SMTP, 53 = DNS, 80 = HTTP, 443 = HTTPS, 445 = SMB, 1433 = MSSQL, 3306 = MySQL."
 },
 {
  "id": 69,
  "obj": "4.3",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company is preparing for a security audit and needs to demonstrate that its security controls are operating effectively, not just documented. What type of assessment evaluates whether controls are actually functioning as designed?",
  "opts": [
   "A. Vulnerability scan",
   "B. Policy review",
   "C. Control effectiveness assessment / security audit",
   "D. Risk assessment"
  ],
  "correct": 2,
  "exp": "A control effectiveness assessment (security audit) tests whether implemented controls are actually working as intended. It verifies design effectiveness (controls are correctly designed to address the risk) and operational effectiveness (controls are actually being applied). This is distinct from a risk assessment (which identifies and evaluates risks), a policy review (which checks documentation), and a vulnerability scan (which finds technical weaknesses). Audits may include configuration reviews, log analysis, interviews, and testing. SOC 2, ISO 27001, and PCI-DSS all require evidence of control effectiveness — not just policy documentation."
 },
 {
  "id": 70,
  "obj": "4.2",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A user reports their computer is running slow. An analyst connects remotely and notices a process called <code>svchost32.exe</code> consuming 90% CPU and making outbound connections to an unknown IP. The analyst checks and finds the legitimate Windows process is <code>svchost.exe</code>. What technique has the malware used?",
  "opts": [
   "A. Process injection",
   "B. Masquerading (process name spoofing)",
   "C. DLL side-loading",
   "D. Rootkit installation"
  ],
  "correct": 1,
  "exp": "Masquerading is a defence evasion technique where malware names itself to closely resemble a legitimate system process. <code>svchost32.exe</code> vs <code>svchost.exe</code> is a classic example. Casual inspection might miss the extra characters. Defenders look for: processes in unexpected locations (legitimate svchost.exe runs from System32), unexpected parent processes, processes with similar but not identical names to system files. Process injection injects malicious code into a legitimate running process. DLL side-loading exploits application DLL loading order. Rootkits operate at kernel level to conceal themselves. Name spoofing of a system process = masquerading."
 },
 {
  "id": 71,
  "obj": "4.1",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation implements a policy requiring that all employee access to production systems is logged, that those logs are sent to a separate, read-only log server, and that no one who has access to production also has access to modify the logs. Which security principle does this implement?",
  "opts": [
   "A. Least privilege",
   "B. Non-repudiation and log integrity through separation of duties",
   "C. Defense in depth",
   "D. Data minimisation"
  ],
  "correct": 1,
  "exp": "Sending logs to a separate read-only server and ensuring production admins cannot modify logs implements two principles: Non-repudiation (logs prove what actions were taken and by whom — administrators cannot claim they didn't perform an action because they can't delete the log evidence) and Separation of duties (the people who administer systems cannot also tamper with the audit trail of those actions). Together, this creates trustworthy audit logs. Least privilege limits permissions to minimum needed. Defense in depth uses multiple layered controls. Data minimisation collects only necessary data. Immutable logs + SoD = audit integrity."
 },
 {
  "id": 73,
  "obj": "4.9",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A developer commits code to a git repository. An automated pipeline runs static analysis, checks for hardcoded secrets, scans dependencies for known CVEs, and only deploys to production if all checks pass. Which practice does this represent?",
  "opts": [
   "A. Blue team operations",
   "B. Shift-left security / DevSecOps",
   "C. Red team continuous testing",
   "D. Security information and event management"
  ],
  "correct": 1,
  "exp": "Shift-left security means moving security testing and controls earlier in the software development lifecycle (SDLC) — \"left\" on the timeline toward development, rather than testing at the end. DevSecOps integrates security into the DevOps pipeline: SAST (static analysis), secret scanning, SCA (software composition analysis for CVEs), DAST, and IaC scanning all running automatically in the CI/CD pipeline. This catches vulnerabilities when they are cheapest to fix — during development. Blue team is defensive operations responding to threats. Red team simulates attackers. SIEM is a log aggregation and alerting platform. Automated security in CI/CD pipeline = shift-left / DevSecOps."
 },
 {
  "id": 74,
  "obj": "4.2",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst notices that a user's account, which normally accesses 50-100 files per day in a specific project folder, has accessed 4,000 files across multiple departments in the past hour and has attempted to copy them to an external USB drive. Which tool would have been MOST effective at both detecting and automatically preventing the USB transfer?",
  "opts": [
   "A. Antivirus solution",
   "B. Network-based IDS",
   "C. DLP with endpoint agent",
   "D. SIEM correlation rule"
  ],
  "correct": 2,
  "exp": "Endpoint DLP (Data Loss Prevention) with an agent monitors data in use — specifically controlling transfers to removable media, email attachments, cloud uploads, and print operations. An endpoint DLP agent can detect the bulk file access anomaly AND prevent the USB transfer in real time, blocking the exfiltration attempt. Antivirus (A) scans for malware — not data movement policies. Network IDS (B) sees network traffic but cannot see USB transfers (which bypass the network). A SIEM correlation rule (D) can detect the anomaly and alert — but cannot by itself block the physical USB transfer. Only endpoint DLP combines detection AND prevention of physical data exfiltration."
 },
 {
  "id": 75,
  "obj": "4.5",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A digital forensics investigator is preparing evidence from a corporate breach to be presented in legal proceedings. Throughout the investigation, all evidence transfers have been logged, signed for, and stored in tamper-evident packaging. What is this process called?",
  "opts": [
   "A. Evidence integrity verification",
   "B. Chain of custody",
   "C. Legal hold",
   "D. Non-repudiation logging"
  ],
  "correct": 1,
  "exp": "Chain of custody is the chronological documentation that records who has collected, handled, transferred, stored, and accessed evidence. It proves that evidence has not been tampered with between collection and courtroom presentation. Any break in the chain can lead to evidence being ruled inadmissible. Chain of custody requires: documentation of each handler, timestamps, storage conditions, and tamper-evident packaging. Evidence integrity (A) is maintained through hashing. Legal hold (C) is a directive to preserve potentially relevant information for litigation. Non-repudiation logging proves who performed actions — a component of chain of custody but not the overall process."
 },
 {
  "id": 76,
  "obj": "4.7",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation deploys an email security gateway that evaluates each incoming email using SPF, DKIM, and DMARC checks. An email claiming to be from <code>ceo@company.com</code> fails the DMARC check. What does this indicate?",
  "opts": [
   "A. The email contains malware attachments",
   "B. The email was sent from an unauthorised server not listed in the domain's SPF record",
   "C. The email recipient's inbox is full",
   "D. The email was encrypted with an invalid certificate"
  ],
  "correct": 1,
  "exp": "DMARC (Domain-based Message Authentication, Reporting, and Conformance) validates that the sending server is authorised to send email on behalf of the domain (using SPF — Sender Policy Framework) and/or that the email signature matches the domain (DKIM — DomainKeys Identified Mail). A DMARC failure means the email did not pass SPF or DKIM alignment — indicating it was sent from a server NOT authorised by the domain owner. This is a strong indicator of email spoofing or a phishing attack impersonating the CEO's domain. The email should be quarantined or rejected per the DMARC policy. DMARC does not detect malware, inbox status, or certificate issues."
 },
 {
  "id": 77,
  "obj": "4.1",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company implements a policy that all privileged administrator accounts must be separate from regular user accounts. Administrators must use their standard user account for email and browsing and only use their privileged account when performing administrative tasks. Which security principle does this enforce?",
  "opts": [
   "A. Dual control",
   "B. Privilege account separation / least privilege",
   "C. Mandatory access control",
   "D. Time-based access restrictions"
  ],
  "correct": 1,
  "exp": "Privileged account separation (a subset of least privilege) requires that elevated accounts are separate identities from daily-use accounts. This limits exposure of admin credentials — an administrator browsing the web with a standard account cannot have their admin session hijacked by a browser exploit. If a phishing attack compromises the daily account, the attacker doesn't automatically gain privileged access. This is implemented via PAM (Privileged Access Management) solutions. Dual control requires two people to perform an action. MAC uses sensitivity labels. Time-based restrictions limit when access is permitted. Separate privileged accounts = account hygiene best practice."
 },
 {
  "id": 149,
  "type": "mcq",
  "domain": 4,
  "obj": "4.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A user leaves the company. Their manager requests access to the departed employee's email and files \"just in case.\" The IT team grants the manager full access to the former employee's account without any formal process. What security risk does this create?",
  "opts": [
   "A. The manager now has excessive privileges beyond their job role, violating least privilege",
   "B. The former employee's data will be deleted",
   "C. The manager's own account becomes vulnerable",
   "D. GDPR requires all employee data to be immediately deleted upon departure"
  ],
  "correct": 0,
  "exp": "Granting ad-hoc access to another user's account without a formal access review process violates least privilege and creates an audit risk. The manager may not need access to everything in the account, and this access should be time-limited, approved, and logged. Proper offboarding procedures include: disabling the account, archiving email per retention policy, and granting access only to specific necessary items with documented approval. Informal privilege grants also complicate forensic investigations if the former employee was involved in an incident. Least privilege + documented access grants + formal offboarding = the correct framework."
 },
 {
  "id": 150,
  "type": "mcq",
  "domain": 4,
  "obj": "4.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation implements SAML-based SSO so employees can access Salesforce, Slack, and Workday with their Active Directory credentials. When an employee's AD account is disabled, they immediately lose access to all three applications. Which identity concept enables this centralised access revocation?",
  "opts": [
   "A. Multi-factor authentication",
   "B. Federated identity with a centralised identity provider (IdP)",
   "C. Privileged access management",
   "D. Attribute-based access control"
  ],
  "correct": 1,
  "exp": "Federated identity allows multiple services to trust a single Identity Provider (IdP) — in this case, Active Directory / Azure AD. SAML (Security Assertion Markup Language) is the protocol carrying authentication assertions from the IdP to service providers. When the IdP account is disabled, no valid assertions can be issued — access to all federated services is simultaneously revoked. This is the primary operational security benefit of SSO federation: single point of provisioning and deprovisioning. PAM manages privileged accounts specifically. ABAC uses multiple attributes for access decisions. MFA adds factors. Federated IdP = centralised identity lifecycle management."
 },
 {
  "id": 151,
  "type": "mcq",
  "domain": 4,
  "obj": "4.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security engineer deploys an EDR (Endpoint Detection and Response) solution across all corporate workstations. Unlike traditional antivirus, what additional capability does EDR provide?",
  "opts": [
   "A. EDR scans files for known malware signatures only",
   "B. EDR provides continuous endpoint monitoring, behavioural detection, and response capabilities including process kill and isolation",
   "C. EDR replaces the need for a host-based firewall",
   "D. EDR only monitors network traffic to and from the endpoint"
  ],
  "correct": 1,
  "exp": "EDR goes significantly beyond traditional AV: Continuous monitoring of all endpoint activity (processes, file system, registry, network connections). Behavioural detection catches novel threats without signatures. Response capabilities: kill malicious processes, isolate the endpoint from the network, roll back file changes, collect forensic artefacts. Threat hunting integration: analysts can query EDR telemetry across the fleet. Traditional AV = signature-based file scanning. EDR = behavioural monitoring + detection + active response. XDR (Extended Detection and Response) extends EDR across network, cloud, and email. Key EDR vendors: CrowdStrike, SentinelOne, Microsoft Defender for Endpoint."
 },
 {
  "id": 152,
  "type": "mcq",
  "domain": 4,
  "obj": "4.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A SIEM analyst sees this log sequence from three different systems within 60 seconds:\n1. Auth server: Failed login for admin@corp.com from 45.23.11.5 (x15)\n2. Auth server: Successful login for admin@corp.com from 45.23.11.5\n3. File server: admin@corp.com accessed \\\\fileserver\\HR\\Salaries.xlsx\n4. Email gateway: admin@corp.com sent attachment to personal@gmail.com\n\nWhat MOST likely occurred?",
  "opts": [
   "A. The admin was performing legitimate after-hours work",
   "B. A brute force attack succeeded, followed by immediate data exfiltration",
   "C. The admin forgot their password and reset it",
   "D. A phishing simulation was triggered"
  ],
  "correct": 1,
  "exp": "Log correlation tells the story: 15 failed logins = brute force attempt. Successful login from the same external IP = brute force succeeded. Immediate access to sensitive HR salary data = targeted data theft. Email to personal Gmail = exfiltration. The 60-second window and sequence strongly indicate a coordinated, automated attack. A SIEM correlation rule combining these four events would be a high-confidence alert. Immediate response: disable the admin account, block the source IP, preserve logs, notify IR team. This is exactly the type of multi-source log correlation scenario tested on Security+ — ability to reconstruct an attack from disparate log sources."
 },
 {
  "id": 153,
  "type": "mcq",
  "domain": 4,
  "obj": "4.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A vulnerability management team runs a scan and finds 847 vulnerabilities across 200 systems. Leadership asks them to prioritise remediation. Which approach BEST balances security risk and business impact?",
  "opts": [
   "A. Fix all Critical CVSS scores first, then High, Medium, Low regardless of system",
   "B. Prioritise based on CVSS score combined with asset criticality and exploitability — highest-risk, most-exposed systems first",
   "C. Fix vulnerabilities alphabetically by CVE number",
   "D. Address only vulnerabilities with public exploit code available"
  ],
  "correct": 1,
  "exp": "Effective vulnerability prioritisation combines: CVSS base score (severity), asset criticality (a critical vulnerability on a dev test server < the same vulnerability on the payment processor), exploitability (is exploit code available? is it being exploited in the wild? — threat intelligence integration), and network exposure (internet-facing vs internal). A critical CVSS 9.8 on an air-gapped, non-production server may rank lower than a CVSS 7.5 on an internet-facing payment application. CVSS alone (A) ignores context. Alphabetical (C) is meaningless. Exploit-only (D) misses critical vulnerabilities without public PoC. Risk-contextualised prioritisation = industry standard (SSVC, CVSS + threat intel)."
 },
 {
  "id": 154,
  "type": "mcq",
  "domain": 4,
  "obj": "4.5",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "During an incident investigation, a forensic analyst needs to determine the exact commands executed by an attacker on a Linux server. Which log source provides the MOST direct evidence of executed commands?",
  "opts": [
   "A. Firewall logs",
   "B. .bash_history file and auditd logs",
   "C. DNS query logs",
   "D. Network flow (NetFlow) data"
  ],
  "correct": 1,
  "exp": ".bash_history records commands entered in a bash shell (though attackers often clear it — so check auditd). Linux auditd (the audit daemon) can log all executed commands, syscalls, file access, and privilege changes — tamper-resistant when properly configured. The /var/log/audit/audit.log is the definitive command execution record. Firewall logs show network connections, not commands. DNS logs show domain lookups. NetFlow shows connection metadata (IP, port, bytes) — not payload or commands. For forensics: auditd > bash_history (history can be cleared or disabled). auditd should be configured to log execve() syscalls for comprehensive command tracking."
 },
 {
  "id": 155,
  "type": "mcq",
  "domain": 4,
  "obj": "4.6",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company conducts quarterly vulnerability scans but has never performed a penetration test. A security consultant recommends a pen test. How does a penetration test differ from a vulnerability scan?",
  "opts": [
   "A. Vulnerability scans are manual; penetration tests are automated",
   "B. Penetration tests actively exploit vulnerabilities to demonstrate real-world impact; vulnerability scans only identify and report potential weaknesses",
   "C. Penetration tests are cheaper and faster than vulnerability scans",
   "D. Vulnerability scans require more expertise than penetration tests"
  ],
  "correct": 1,
  "exp": "Key differences: Vulnerability scan = automated identification and reporting of known vulnerabilities. No exploitation. Non-intrusive. Fast. Penetration test = human tester actively attempts to exploit vulnerabilities to demonstrate real impact, chain multiple vulnerabilities together, and provide business-context findings (e.g., \"we could access the payroll database\"). It answers: what can an attacker actually DO with these vulnerabilities? Pen tests are more expensive, time-limited, and require expert practitioners. Both are complementary: scans provide broad continuous coverage; pen tests provide depth and business impact context. Vulnerability scanning is a QUANTITY tool; pen testing is a QUALITY tool."
 },
 {
  "id": 156,
  "type": "mcq",
  "domain": 4,
  "obj": "4.7",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst is reviewing SPF, DKIM, and DMARC records for the company's email domain. They find DMARC is set to \"p=none\". What does this mean and what is the risk?",
  "opts": [
   "A. DMARC is disabled — all spoofed emails will be accepted",
   "B. DMARC is in monitoring mode — spoofed emails are reported but not blocked or quarantined",
   "C. DMARC rejects all email from the domain — employees cannot send email",
   "D. DMARC requires all email to be encrypted with TLS"
  ],
  "correct": 1,
  "exp": "DMARC policy values: p=none (monitor mode — SPF/DKIM failures are reported to the domain owner but all email is delivered normally), p=quarantine (failures go to spam/junk), p=reject (failures are not delivered at all). p=none is the recommended starting point to collect data without disrupting mail flow, but if left indefinitely, it provides no protection against domain spoofing. Attackers can spoof the domain freely. Best practice: start with p=none to gather reports, analyse, fix SPF/DKIM alignment, then move to p=quarantine → p=reject. The risk: spoofed emails from your domain will reach recipients without any block."
 },
 {
  "id": 157,
  "type": "mcq",
  "domain": 4,
  "obj": "4.8",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An administrator runs <code>nmap -sV -p- 192.168.1.50</code> and sees port 3306 open and the service identified as MySQL. The server is a web application server and should not be running a database. What should the administrator do?",
  "opts": [
   "A. Nothing — MySQL on port 3306 is standard and expected",
   "B. Investigate why MySQL is running on this web server — it may be misconfigured, a shadow IT install, or an indicator of compromise",
   "C. Block port 3306 at the perimeter firewall only",
   "D. Upgrade the MySQL version immediately"
  ],
  "correct": 1,
  "exp": "An unexpected service on a system is a significant finding. Possible explanations: misconfiguration (database installed on wrong server), shadow IT (developer installed it without approval), or compromise (attacker installed it as a backdoor or exfiltration tool). The correct action is to investigate before taking action — determine how it got there, what data it contains, who has access, and when it was installed (compare against change records). Blocking at the perimeter only (C) doesn't address the root cause. nmap -sV performs service version detection (-sV) across all ports (-p-) — a comprehensive service inventory. Unexpected services = immediate investigation."
 },
 {
  "id": 158,
  "type": "mcq",
  "domain": 4,
  "obj": "4.9",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company implements a process where all code changes must be tested in a staging environment identical to production before being deployed. Deployment to production requires sign-off from both the developer's manager and a security engineer. Which combination of security concepts does this implement?",
  "opts": [
   "A. Least privilege and data minimisation",
   "B. Change management and separation of duties",
   "C. Vulnerability scanning and patch management",
   "D. Incident response and business continuity"
  ],
  "correct": 1,
  "exp": "Change management = the formal process of reviewing, approving, and controlling changes before they reach production (testing in staging, sign-off required). Separation of duties = the deployment requires TWO different approvers (manager + security engineer) — no single person can unilaterally push code to production. This prevents both accidental damage and insider threats. Together they ensure changes are tested, reviewed by multiple independent parties, and documented. This directly maps to secure SDLC practices. Least privilege limits permissions. Patch management is a subset of change management. The combined controls = change management + SoD."
 },
 {
  "id": 170,
  "type": "multi",
  "domain": 4,
  "obj": "4.3",
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "A SOC manager wants to reduce analyst alert fatigue. Currently, analysts receive 2,000 alerts per day but only 50 require action. Which TWO changes would MOST effectively reduce false positives without missing real threats?",
  "opts": [
   "A. Disable all SIEM rules to stop the alerts",
   "B. Tune SIEM correlation rules to reduce noise from known-good activity (e.g. suppress alerts from automated scanning tools)",
   "C. Implement SOAR to automatically investigate and close low-confidence alerts that match known-good patterns",
   "D. Hire more analysts to handle the volume",
   "E. Only alert on Critical severity, ignore all others"
  ],
  "correct": [
   1,
   2
  ],
  "exp": "B: SIEM rule tuning — adding exceptions for known-good sources (authorised scanners, monitoring tools, scheduled tasks) directly reduces false positives at the source without missing real threats. This requires ongoing maintenance. C: SOAR automation — playbooks can auto-investigate low-confidence alerts (check reputation of IP, verify if the process is on a whitelist, correlate with vulnerability data) and close confirmed false positives automatically, freeing analysts for real threats. Disabling rules (A) creates blind spots. Hiring more staff (D) treats symptoms not causes. Ignoring non-critical (E) will miss important events. Tuning + automation = the two-pronged approach to alert fatigue."
 },
 {
  "id": 174,
  "type": "mcq",
  "domain": 4,
  "obj": "4.5",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A forensic analyst is called to examine a server that may have been involved in a data breach. The server is still running. Before imaging the hard drive, the analyst captures a memory dump. Later, the analyst finds evidence in the memory dump that was not present on the disk. What does this demonstrate about the threat actor's technique?",
  "opts": [
   "A. The attacker used full disk encryption",
   "B. The attacker used fileless malware — executing entirely in memory without writing to disk",
   "C. The hard drive was wiped before the analyst arrived",
   "D. The memory dump was corrupted"
  ],
  "correct": 1,
  "exp": "Fileless malware executes entirely in system memory (RAM) using legitimate OS tools (PowerShell, WMI, .NET) — never writing malicious files to disk. Traditional AV scans miss it because there are no malicious files to scan. EDR and memory analysis are required to detect it. The memory dump contains the evidence (malicious process, injected code, C2 connection details) that would disappear on power-off. This is why memory forensics is critical and why RAM is the most volatile and time-sensitive evidence to collect. Fileless attacks are a primary driver of the shift from AV to EDR. Memory forensics = dump memory → analyse processes, network connections, strings, injected code."
 },
 {
  "id": 178,
  "type": "mcq",
  "domain": 4,
  "obj": "4.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company deploys application control (allowlisting) on all servers. Only approved, digitally signed executables from the approved publisher list can run. An attacker gains access and wants to execute their payload. They discover that the IT team uses a script called <code>backup_sync.ps1</code> that runs daily. The attacker modifies this script to include their malicious code. The script runs the next morning. How did the attacker bypass application control?",
  "opts": [
   "A. They exploited a vulnerability in the allowlisting software",
   "B. They modified an already-allowlisted script — script content changes aren't blocked by application control based on file path/publisher",
   "C. They disabled Windows Defender",
   "D. They used a kernel exploit to bypass security software"
  ],
  "correct": 1,
  "exp": "Application control based on file path, publisher, or hash has a weakness: if an attacker can MODIFY an existing allowlisted script (especially interpreted scripts like PowerShell or Python that aren't compiled/signed), the new malicious content runs under the trusted script's allowlisted identity. Hash-based allowlisting would catch this (the hash changes when the file changes) but path/publisher-based allowlisting doesn't check content. This is why: (1) scripts should be hash-controlled, (2) script files should be in read-only directories, (3) PowerShell should run in constrained language mode. This is a real-world bypass technique (T1059 Script execution in MITRE ATT&CK)."
 },
 {
  "id": 295,
  "obj": "4.1",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization wants to implement a policy where remote users can only access the internal HR portal if their device has an active firewall enabled, is running an up-to-date OS, and the user is connecting from a known corporate location. Which technology is BEST suited for enforcing this?",
  "opts": [
   "A. Role-Based Access Control (RBAC)",
   "B. Mandatory Access Control (MAC)",
   "C. Conditional Access / Attribute-Based Access Control (ABAC)",
   "D. Discretionary Access Control (DAC)"
  ],
  "correct": 2,
  "exp": "Conditional Access (often implemented as ABAC) uses attributes such as device health (firewall/OS status), location, and user identity to make dynamic access decisions. This is a core part of Zero Trust. RBAC (A) only considers the user's role. MAC (B) uses labels. DAC (D) allows owners to manage access."
 },
 {
  "id": 296,
  "obj": "4.3",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst is tuning a SIEM to reduce alert fatigue. The analyst notices hundreds of alerts daily for 'Multiple Failed Logins' that are actually caused by a misconfigured service account. Which action is the MOST appropriate way to resolve this?",
  "opts": [
   "A. Disable the correlation rule for all accounts",
   "B. Increase the alert threshold from 5 to 500 attempts",
   "C. Identify and fix the misconfigured service, and add an exception to the rule for that specific account until fixed",
   "D. Ignore the alerts until the service account naturally expires"
  ],
  "correct": 2,
  "exp": "Alert tuning involves identifying the root cause of false positives or noise and adjusting the rules (e.g., adding exceptions or fixing the underlying system) to ensure the SOC focuses on real threats. Disabling the rule (A) or massively increasing thresholds (B) could allow a real brute-force attack to go unnoticed."
 },
 {
  "id": 297,
  "obj": "4.5",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "During a digital forensics investigation, which of the following represents the MOST volatile source of evidence that should be captured first?",
  "opts": [
   "A. Hard disk drive (HDD) image",
   "B. CPU registers and cache",
   "C. System logs on the local disk",
   "D. Network flow data (NetFlow)"
  ],
  "correct": 1,
  "exp": "According to the Order of Volatility, evidence that is lost the fastest when power is removed or as the system continues to run must be captured first. CPU registers and cache are the most volatile, followed by RAM, then temporary file systems/network state, and finally archival data on disk."
 },
 {
  "id": 298,
  "obj": "4.2",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A software development team is integrating security into their CI/CD pipeline. They want to implement a tool that analyzes the application's source code for vulnerabilities like SQL injection and hardcoded secrets without actually executing the code. Which technology should they use?",
  "opts": [
   "A. DAST",
   "B. SAST",
   "C. Penetration testing",
   "D. Fuzzing"
  ],
  "correct": 1,
  "exp": "SAST (Static Analysis) examines the code (source, bytecode, or binaries) at rest without executing it. It is performed early in the SDLC ('shift-left'). DAST (A) requires a running application to test it from the outside. Fuzzing (D) involves sending random data to a running application."
 },
 {
  "id": 299,
  "obj": "4.6",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization wants to prevent attackers from sending spoofed emails that appear to come from its domain. They have implemented SPF and DKIM. Which DMARC policy setting will ensure that any email failing both SPF and DKIM alignment is completely blocked by receiving mail servers?",
  "opts": [
   "A. p=none",
   "B. p=quarantine",
   "C. p=reject",
   "D. p=block"
  ],
  "correct": 2,
  "exp": "The DMARC 'p=reject' policy tells receiving mail servers to outright reject (not deliver) any email that fails alignment checks. 'p=none' (A) is for monitoring only. 'p=quarantine' (B) sends failed emails to the spam/junk folder. 'p=block' (D) is not a valid DMARC tag."
 },
 {
  "id": 300,
  "obj": "4.8",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A network administrator needs to identify which services are running on a server and their specific versions to check for known vulnerabilities. Which nmap command should they use?",
  "opts": [
   "A. nmap -sn",
   "B. nmap -sV",
   "C. nmap -O",
   "D. nmap -sS"
  ],
  "correct": 1,
  "exp": "-sV enables service version detection. -sn (A) is a ping scan (no port scan). -O (C) is for OS fingerprinting. -sS (D) is a TCP SYN (stealth) scan to find open ports, but it doesn't necessarily identify versions."
 },
 {
  "id": 301,
  "obj": "4.9",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security engineer is automating the process of checking production containers for known vulnerabilities in their installed third-party libraries. Which process is being implemented?",
  "opts": [
   "A. Static Analysis (SAST)",
   "B. Software Composition Analysis (SCA)",
   "C. Fuzz testing",
   "D. Dynamic Analysis (DAST)"
  ],
  "correct": 1,
  "exp": "Software Composition Analysis (SCA) focuses on identifying open-source components and third-party libraries within an application and checking them against databases of known vulnerabilities (CVEs). This is critical for managing supply chain risk in containers."
 },
 {
  "id": 302,
  "obj": "4.1",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization wants to ensure that administrators only have elevated privileges for the specific amount of time needed to perform a maintenance task, after which the privileges are automatically revoked. Which concept is this?",
  "opts": [
   "A. Mandatory Access Control",
   "B. Just-in-Time (JIT) Access",
   "C. Shared accounts",
   "D. Permanent privilege escalation"
  ],
  "correct": 1,
  "exp": "Just-in-Time (JIT) Access is a component of Privileged Access Management (PAM) that grants temporary, time-bound elevated permissions to reduce the window of opportunity for credential abuse. MAC (A) uses sensitivity labels. Shared accounts (C) violate individual accountability."
 },
 {
  "id": 308,
  "obj": "4.8",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst needs to check a Linux server for any hidden outbound connections established by a suspected malware process. Which command-line tool provides a list of all active network connections and the process IDs (PIDs) associated with them?",
  "opts": [
   "A. nslookup",
   "B. netstat -tp",
   "C. dig",
   "D. route print"
  ],
  "correct": 1,
  "exp": "netstat (or its modern replacement 'ss') displays active network connections. On Linux, the -p flag shows the process ID (PID) and program name responsible for the connection. -t filters for TCP. nslookup (A) and dig (C) are for DNS queries. route (D) displays the routing table, not active connections."
 },
 {
  "id": 309,
  "obj": "4.3",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization is updating its log management policy. They want to ensure that if a security incident occurs, they have at least 12 months of log data available for forensic reconstruction, even if the primary SIEM storage is full. Which concept should they implement?",
  "opts": [
   "A. Log rotation",
   "B. Log archiving and long-term retention",
   "C. Log aggregation",
   "D. Real-time alerting"
  ],
  "correct": 1,
  "exp": "Log archiving/retention policies define how long data must be kept for legal, regulatory, or forensic purposes. Moving logs to cheaper, long-term storage allows for forensic work a year later. Log rotation (A) often involves deleting old logs to save space, which would violate the 12-month requirement."
 },
 {
  "id": 310,
  "obj": "4.2",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security engineer is hardening a fleet of corporate laptops. They want to ensure that only an authorized administrator can change the boot order or modify low-level hardware settings. Which control should be enabled?",
  "opts": [
   "A. UEFI/BIOS password",
   "B. Operating System password",
   "C. Screen saver lock",
   "D. File-level permissions"
  ],
  "correct": 0,
  "exp": "A BIOS or UEFI password prevents unauthorized users from changing hardware configurations or changing the boot sequence (which could be used to boot into a malicious OS from a USB). OS passwords (B) only protect the software layer, not the hardware layer."
 },
 {
  "id": 326,
  "obj": "4.3",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A SOC manager is creating a document that defines the specific automated steps a SOAR system should take when a phishing email is reported. What is this document called?",
  "opts": [
   "A. Risk Register",
   "B. Playbook",
   "C. Tabletop exercise",
   "D. Chain of custody"
  ],
  "correct": 1,
  "exp": "A playbook (or runbook) in a SOAR/incident response context defines the automated workflow and manual steps needed to respond to a specific threat type."
 },
 {
  "id": 327,
  "obj": "4.5",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A digital forensics expert is preparing to image a 2TB hard drive. They must ensure that the hash of the original drive matches the hash of the image file. Which property does this verify?",
  "opts": [
   "A. Confidentiality",
   "B. Integrity",
   "C. Availability",
   "D. Accountability"
  ],
  "correct": 1,
  "exp": "Hashing is used in forensics to verify integrity — proving that the evidence has not been altered during the collection or imaging process."
 },
 {
  "id": 328,
  "obj": "4.1",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization wants to allow users to sign in to its application using their existing Google or Microsoft accounts. Which technology is best suited for this?",
  "opts": [
   "A. RADIUS",
   "B. OpenID Connect (OIDC) / OAuth 2.0",
   "C. Kerberos",
   "D. LDAP"
  ],
  "correct": 1,
  "exp": "OpenID Connect (built on top of OAuth 2.0) is the modern standard for federated identity and 'social login,' allowing users to authenticate with a central Identity Provider (IdP)."
 },
 {
  "id": 329,
  "obj": "4.2",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A QA team discovers their web application crashes when a form field receives a 10,000-character string of random bytes. This vulnerability was found by an automated tool that systematically generated millions of unexpected inputs over several hours. Which testing technique revealed this?",
  "opts": [
   "A. Regression testing",
   "B. Stress testing",
   "C. Fuzzing",
   "D. Penetration testing"
  ],
  "correct": 2,
  "exp": "Fuzzing (fuzz testing) uses automated tools to generate large volumes of random, malformed, or unexpected inputs to discover crashes, memory leaks, and unhandled exceptions. Regression testing (A) verifies that new code changes have not broken existing functionality. Stress testing (B) evaluates system performance under extreme load — it tests capacity, not input validation vulnerabilities. Penetration testing (D) is a broader methodology that may include fuzzing but also involves manual exploitation and social engineering. The key indicator is the automated generation of millions of unexpected inputs specifically to trigger crashes."
 },
 {
  "id": 330,
  "obj": "4.8",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An analyst needs to query a specific external DNS server (8.8.8.8) to retrieve TXT records for a domain and verify SPF configuration. They need detailed output including TTL values and the authoritative server. Which command is BEST suited?",
  "opts": [
   "A. nslookup -type=TXT example.com 8.8.8.8",
   "B. dig @8.8.8.8 example.com TXT",
   "C. host -t TXT example.com 8.8.8.8",
   "D. whois example.com"
  ],
  "correct": 1,
  "exp": "dig (Domain Information Groper) provides the most detailed DNS query output including TTL, flags, authoritative server, and query time — making it the best tool for DNS troubleshooting and verification. nslookup (A) can query TXT records against a specific server but provides less detail and is considered legacy on Linux. host (C) can also query TXT records but produces simplified output without TTL or authority information. whois (D) queries domain registration data, not DNS records. For detailed DNS analysis and debugging, dig is the standard tool."
 },
 {
  "id": 366,
  "obj": "4.1",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A biometric scanner is frequently rejecting authorized users, forcing them to call the help desk to gain access. Which biometric metric is too high?",
  "opts": [
   "A. False Acceptance Rate (FAR)",
   "B. False Rejection Rate (FRR)",
   "C. Crossover Error Rate (CER)",
   "D. Throughput"
  ],
  "correct": 1,
  "exp": "The False Rejection Rate (FRR or Type I Error) measures how often a biometric system incorrectly rejects a valid user. High FRR leads to user frustration. FAR (A) is when an unauthorized user is accepted."
 },
 {
  "id": 367,
  "obj": "4.2",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An analyst is suspicious of a recently downloaded file. They run the file in an isolated virtual machine that has no network access to see what files or registry keys the program attempts to modify. What is this called?",
  "opts": [
   "A. Fuzzing",
   "B. Static Analysis",
   "C. Sandboxing",
   "D. Penetration Testing"
  ],
  "correct": 2,
  "exp": "Sandboxing provides an isolated environment where code can be executed safely for testing and observation without impacting the rest of the host system or network."
 },
 {
  "id": 368,
  "obj": "4.3",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A SIEM is receiving logs from various firewalls, servers, and applications. The logs use different time formats and field names. The SIEM must convert all these into a standard, unified format for correlation. What is this process called?",
  "opts": [
   "A. Aggregation",
   "B. Normalization",
   "C. Retention",
   "D. Archiving"
  ],
  "correct": 1,
  "exp": "Normalization is the process of converting diverse data into a standard, common format so the SIEM can compare and correlate events across different log sources."
 },
 {
  "id": 369,
  "obj": "4.5",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Which tool is used in a forensic investigation to prevent any modification to a storage device while its contents are being copied?",
  "opts": [
   "A. Hashing utility",
   "B. Write blocker",
   "C. Packet sniffer",
   "D. Port scanner"
  ],
  "correct": 1,
  "exp": "A write blocker is a hardware or software device that allows read access to a drive but physically prevents any writing, ensuring the evidence remains in its original state."
 },
 {
  "id": 370,
  "obj": "4.6",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Before a penetration test begins, the client and the testers sign a document that defines the specific IPs in scope, the times testing can occur, and which tools are prohibited. What is this document called?",
  "opts": [
   "A. Service Level Agreement (SLA)",
   "B. Rules of Engagement (RoE)",
   "C. Business Impact Analysis (BIA)",
   "D. Acceptable Use Policy (AUP)"
  ],
  "correct": 1,
  "exp": "The Rules of Engagement (RoE) define the constraints, boundaries, and expectations for a penetration test to ensure it is conducted safely and legally."
 },
 {
  "id": 371,
  "obj": "4.7",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization wants to improve its email security. They implement a record in their DNS that specifies which IP addresses are authorized to send email on behalf of their domain. What is this record called?",
  "opts": [
   "A. DKIM",
   "B. SPF",
   "C. DMARC",
   "D. MX"
  ],
  "correct": 1,
  "exp": "Sender Policy Framework (SPF) is a DNS-based mechanism that allows domain owners to publish a list of IP addresses or hostnames authorized to send email from that domain."
 },
 {
  "id": 372,
  "obj": "4.8",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst is using a tool to capture and inspect individual network packets to troubleshoot a suspected man-in-the-middle attack. Which tool are they likely using?",
  "opts": [
   "A. nmap",
   "B. Wireshark / tshark",
   "C. netstat",
   "D. nslookup"
  ],
  "correct": 1,
  "exp": "Wireshark (and its CLI version tshark) is a protocol analyzer used to capture and deeply inspect network traffic at the packet level."
 },
 {
  "id": 373,
  "obj": "4.9",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security engineer is writing a script to automate the process of querying an API for threat intelligence. Which language is MOST commonly used for this type of security automation?",
  "opts": [
   "A. C++",
   "B. Python",
   "C. HTML",
   "D. SQL"
  ],
  "correct": 1,
  "exp": "Python is the dominant language for security automation, scripting, and tool development due to its extensive library support and readability."
 },
 {
  "id": 374,
  "obj": "4.1",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization is choosing between TOTP and HOTP for their MFA implementation. The security team is concerned about codes being intercepted and replayed by an attacker. Which is a key security advantage of TOTP over HOTP?",
  "opts": [
   "A. TOTP codes never expire, giving users more time to enter them",
   "B. TOTP does not require a shared secret between client and server",
   "C. TOTP codes automatically expire after a short time window, reducing replay risk",
   "D. TOTP works without any network connectivity or clock synchronization"
  ],
  "correct": 2,
  "exp": "TOTP codes are valid only within a short time window (typically 30 seconds), so even if intercepted, they quickly become useless — significantly reducing replay attack risk. HOTP codes remain valid until used, meaning an intercepted HOTP code could be replayed at any later time. TOTP codes do expire (A is incorrect). Both TOTP and HOTP require a shared secret (B is incorrect). TOTP requires reasonably synchronized clocks between client and server (D is incorrect) — clock drift is actually a TOTP limitation."
 },
 {
  "id": 375,
  "obj": "4.3",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization wants to automate its response to common security alerts, such as automatically blocking an IP address that triggers a brute-force alert. Which technology is needed?",
  "opts": [
   "A. SIEM",
   "B. SOAR",
   "C. DLP",
   "D. IDS"
  ],
  "correct": 1,
  "exp": "SOAR (Security Orchestration, Automation, and Response) platforms allow organizations to automate security workflows and responses through 'playbooks'."
 },
 {
  "id": 401,
  "obj": "4.3",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A SOC analyst investigates a SIEM alert for 'data exfiltration via DNS tunneling.' Analysis reveals the traffic was generated by a legitimate cloud backup agent that uses DNS-based health checks. The detection rule correctly identified anomalous DNS behaviour, but the activity was authorized. What is the correct classification?",
  "opts": [
   "A. True positive",
   "B. False positive",
   "C. True negative",
   "D. Benign true positive"
  ],
  "correct": 3,
  "exp": "A benign true positive (BTP) occurs when a detection rule correctly identifies genuinely anomalous behaviour (the DNS pattern IS unusual), but the activity turns out to be authorized and non-malicious. A true positive (A) would mean the alert correctly identified malicious activity — but the activity was authorized. A false positive (B) would mean the detection rule incorrectly fired — but the rule correctly identified anomalous DNS patterns. A true negative (C) means no alert was generated for benign activity. BTPs indicate the detection logic is sound but needs tuning (e.g., an exception for the backup agent) rather than being fundamentally wrong."
 },
 {
  "id": 402,
  "obj": "4.5",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "During an investigation, a forensic tech forgets to sign the log when moving a hard drive from the evidence locker to the analysis desk. Which forensic requirement has been compromised?",
  "opts": [
   "A. Order of Volatility",
   "B. Chain of Custody",
   "C. Data Integrity",
   "D. Legal Hold"
  ],
  "correct": 1,
  "exp": "Chain of custody is the chronological documentation showing the seizure, custody, control, and transfer of physical or electronic evidence. A break in the chain can make evidence inadmissible in court."
 },
 {
  "id": 403,
  "obj": "4.8",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An incident responder discovers that traffic to a partner API is suddenly routing through an unexpected country. They need to identify every intermediate hop between the company network and the partner's server to find where the route diverges. Which tool provides this visibility?",
  "opts": [
   "A. netstat",
   "B. traceroute",
   "C. pathping",
   "D. arp"
  ],
  "correct": 1,
  "exp": "traceroute (Linux) / tracert (Windows) sends packets with incrementing TTL values to map every hop between source and destination, showing IP addresses and latency at each router. This lets the responder identify exactly where the unexpected routing occurs. netstat (A) shows active connections and listening ports on the local machine, not the route to a remote host. pathping (C) combines ping and traceroute on Windows and could also work, but traceroute is the standard cross-platform tool and the expected CompTIA answer. arp (D) resolves IP-to-MAC addresses on the local subnet only."
 },
 {
  "id": 404,
  "obj": "4.2",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization wants to implement a system where NO software can run unless it is explicitly approved by the security team. What is this approach?",
  "opts": [
   "A. Blocklisting",
   "B. Allowlisting",
   "C. Sandboxing",
   "D. Heuristic scanning"
  ],
  "correct": 1,
  "exp": "Allowlisting (denying by default and only allowing specific items) is much more secure than blocklisting (allowing everything and only blocking known bad items)."
 },
 {
  "id": 405,
  "obj": "4.1",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "In a SAML federation, the entity that authenticates the user and issues the security token is known as the:",
  "opts": [
   "A. Service Provider (SP)",
   "B. Identity Provider (IdP)",
   "C. Relying Party (RP)",
   "D. Token Vault"
  ],
  "correct": 1,
  "exp": "The IdP (Identity Provider) is the central authority that manages user identities and authenticates them. The SP (Service Provider) trusts the IdP to verify the user."
 },
 {
  "id": 441,
  "obj": "4.3",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "SOC analysts are receiving over 500 low-severity and informational alerts per shift from the SIEM. Analysts have started routinely dismissing alerts without investigation, and a genuine credential-stuffing attack was missed for 48 hours. What is this problem called?",
  "opts": [
   "A. False negative rate",
   "B. Alert fatigue",
   "C. Log saturation",
   "D. Detection evasion"
  ],
  "correct": 1,
  "exp": "Alert fatigue occurs when analysts are overwhelmed by a high volume of alerts — especially low-priority or false positive alerts — causing them to become desensitized and miss real incidents. False negative rate (A) measures how often threats go undetected by the system, not analyst behaviour. Log saturation (C) refers to storage or throughput limits being reached, not analyst overwhelm. Detection evasion (D) is an attacker technique to avoid triggering alerts. The solution to alert fatigue includes tuning detection rules, implementing alert prioritisation, and automating responses to low-severity events via SOAR."
 },
 {
  "id": 442,
  "obj": "4.5",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "During incident response, a forensic team has already captured CPU registers, RAM contents, and the current network connection state from a compromised server. According to the order of volatility, which evidence source should be collected LAST because it is the LEAST volatile?",
  "opts": [
   "A. ARP cache",
   "B. Running process list",
   "C. Hard drive image",
   "D. Routing table"
  ],
  "correct": 2,
  "exp": "(C) Hard drive data is the least volatile because it persists even after power loss. According to the order of volatility, it should be collected last. (A) The ARP cache resides in memory and is lost on reboot. (B) The running process list is volatile and changes constantly. (D) The routing table is held in memory and lost when the system powers off."
 },
 {
  "id": 443,
  "obj": "4.1",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization's identity system checks if a device is 'managed' and 'encrypted' before allowing a user to access the cloud ERP. Which concept is this?",
  "opts": [
   "A. Least Privilege",
   "B. Posture Assessment / Conditional Access",
   "C. Role-Based Access",
   "D. Mandatory Access"
  ],
  "correct": 1,
  "exp": "Posture assessment checks the health and security status of a device (encryption, patch level) as a condition for granting access."
 },
 {
  "id": 444,
  "obj": "4.2",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security team runs an automated tool against a deployed staging web application. The tool sends crafted HTTP requests — including SQL injection payloads, XSS vectors, and authentication bypass attempts — and analyzes the application's live responses. Which testing method is this?",
  "opts": [
   "A. SAST",
   "B. DAST",
   "C. Code review",
   "D. Software Composition Analysis"
  ],
  "correct": 1,
  "exp": "DAST (Dynamic Application Security Testing) tests a running application from the outside by sending malicious inputs and observing responses — it does not require access to source code. SAST (A) analyzes source code or binaries without executing them. Code review (C) is a manual process of reading source code. Software Composition Analysis (D) identifies known vulnerabilities in third-party libraries and dependencies. The key indicator is testing a deployed, running application with live HTTP requests — that is DAST."
 },
 {
  "id": 445,
  "obj": "4.6",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Before a penetration test begins, a document is signed that specifies the total cost, expected deliverables, report format, project timeline, and which party is responsible for remediation of findings. What is this document?",
  "opts": [
   "A. Rules of Engagement (RoE)",
   "B. Statement of Work (SOW)",
   "C. Non-Disclosure Agreement (NDA)",
   "D. Master Service Agreement (MSA)"
  ],
  "correct": 1,
  "exp": "A Statement of Work (SOW) defines the commercial and logistical terms of an engagement: cost, deliverables, format, timeline, and responsibilities. The Rules of Engagement (A) define the technical boundaries — scope, allowed tools, testing windows, and escalation procedures — not commercial terms. An NDA (C) protects confidential information shared during the engagement. An MSA (D) is a broader contract governing the overall relationship between parties, not the specifics of a single engagement."
 },
 {
  "id": 446,
  "obj": "4.7",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An administrator receives bounce-back reports indicating their company's domain is being spoofed in phishing campaigns. They want to publish a DNS record that explicitly lists which mail servers are authorized to send email on behalf of their domain, so receiving servers can reject mail from unauthorized sources. Which email authentication standard should they implement first?",
  "opts": [
   "A. DKIM",
   "B. DMARC",
   "C. SPF",
   "D. SMTP-AUTH"
  ],
  "correct": 2,
  "exp": "(C) SPF (Sender Policy Framework) is a DNS TXT record that specifies which IP addresses and mail servers are authorized to send email for a domain. (A) DKIM signs messages with a cryptographic key to verify integrity, but does not list authorized senders. (B) DMARC builds on top of SPF and DKIM to set a policy for failures, but SPF must be implemented first. (D) SMTP-AUTH authenticates users to a mail server but does not advertise authorized senders via DNS."
 },
 {
  "id": 447,
  "obj": "4.8",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Which network analysis tool provides high-level metadata (source IP, destination IP, bytes, duration) about connections without capturing the actual packet payload?",
  "opts": [
   "A. Wireshark",
   "B. Netflow / IPFIX",
   "C. tcpdump",
   "D. nmap"
  ],
  "correct": 1,
  "exp": "Netflow/IPFIX provides flow data (metadata), which is much smaller than full packet captures and is used for large-scale traffic analysis."
 },
 {
  "id": 448,
  "obj": "4.9",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A systems administrator writes a script that runs via cron every night to check disk usage on each partition, compare it against a threshold, and email an alert if any partition exceeds 90%. The script runs natively on the Linux servers without installing any additional interpreters. Which language was MOST likely used?",
  "opts": [
   "A. Python",
   "B. Bash",
   "C. PowerShell",
   "D. JavaScript"
  ],
  "correct": 1,
  "exp": "Bash is the default shell on Linux systems and scripts run natively without additional interpreters — the key clue in the question. Python (A) is widely used for automation but requires the Python interpreter to be installed. PowerShell (C) is primarily a Windows tool and requires installation on Linux. JavaScript (D) requires Node.js runtime. The phrase 'runs natively on Linux servers without additional interpreters' points directly to Bash, which is built into virtually all Linux distributions."
 },
 {
  "id": 449,
  "obj": "4.3",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A SOC team needs a centralized platform that ingests logs from firewalls, endpoint agents, and cloud services, correlates events across all sources in real time, and generates alerts when predefined detection rules are triggered. Which technology meets this requirement?",
  "opts": [
   "A. SOAR",
   "B. SIEM",
   "C. IDS",
   "D. DLP"
  ],
  "correct": 1,
  "exp": "(B) A SIEM (Security Information and Event Management) platform collects and correlates logs from diverse sources and applies detection rules to generate alerts. (A) SOAR automates response workflows but relies on a SIEM or similar tool for initial detection and correlation. (C) An IDS detects threats on a single network segment, not centralized log correlation. (D) DLP prevents data loss, not log aggregation or event correlation."
 },
 {
  "id": 450,
  "obj": "4.1",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "In a SAML federation, after a user authenticates at the identity provider, a SAML assertion is sent to the application the user is trying to access. What is this destination application called in SAML terminology?",
  "opts": [
   "A. Identity Provider (IdP)",
   "B. Service Provider (SP)",
   "C. Certificate Authority (CA)",
   "D. Directory Service"
  ],
  "correct": 1,
  "exp": "In SAML, the Service Provider (SP) — also called the Relying Party — is the application or service that receives the SAML assertion and grants access based on the identity information it contains. The Identity Provider (A) is the entity that authenticates the user and issues the assertion — the question asks about the receiving end, not the issuing end. A Certificate Authority (C) issues digital certificates, unrelated to SAML token flows. A Directory Service (D) like LDAP stores identity data but is not a SAML role."
 },
 {
  "id": 491,
  "obj": "4.3",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A SOC operates over 200 log sources including cloud SaaS applications, on-premises firewalls, VPN concentrators, and endpoint detection agents. All logs are forwarded to a central repository where analysts can search and analyze them. What is this collection process called?",
  "opts": [
   "A. Log aggregation",
   "B. Log normalization",
   "C. Log deduplication",
   "D. Log rotation"
  ],
  "correct": 0,
  "exp": "(A) Log aggregation is the process of collecting and centralizing log data from many diverse sources into a single repository for analysis. (B) Normalization converts different log formats into a common schema but does not describe the collection itself. (C) Deduplication removes duplicate log entries. (D) Log rotation is an archival process that manages log file sizes by compressing or deleting old logs."
 },
 {
  "id": 492,
  "obj": "4.5",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A forensic analyst needs to create an exact bit-for-bit copy of a suspect's hard drive, including deleted files, slack space, and unallocated sectors, so the original drive can be preserved untouched. What is this process called?",
  "opts": [
   "A. File backup",
   "B. Forensic imaging",
   "C. Data carving",
   "D. Drive cloning"
  ],
  "correct": 1,
  "exp": "(B) Forensic imaging creates an exact bit-for-bit replica of a storage device, capturing every sector including deleted data and slack space. (A) A file backup only copies active files, missing deleted data and unallocated space. (C) Data carving is a technique used to recover files from an already-acquired image. (D) Drive cloning creates a usable copy but does not necessarily preserve forensic metadata or chain-of-custody integrity."
 },
 {
  "id": 493,
  "obj": "4.2",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security solution provides detailed telemetry on all running processes, network connections, and file changes on an endpoint, allowing for historical threat hunting. What is this?",
  "opts": [
   "A. Traditional AV",
   "B. EDR",
   "C. Firewall",
   "D. IDS"
  ],
  "correct": 1,
  "exp": "EDR provides deep visibility and automated response capabilities at the endpoint level, far beyond what traditional AV offers."
 },
 {
  "id": 494,
  "obj": "4.8",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An analyst needs to perform a fast port scan by sending only SYN packets and not completing the 3-way handshake. Which nmap flag should they use?",
  "opts": [
   "A. -sT",
   "B. -sS",
   "C. -sU",
   "D. -O"
  ],
  "correct": 1,
  "exp": "-sS performs a TCP SYN (stealth) scan, which is faster and less intrusive than a full connect scan (-sT)."
 },
 {
  "id": 495,
  "obj": "4.3",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A SOAR platform is configured to automatically isolate a host if a 'High' severity malware alert is received from the EDR. What is this automated logic called?",
  "opts": [
   "A. Risk Assessment",
   "B. Playbook",
   "C. Sandbox",
   "D. Policy"
  ],
  "correct": 1,
  "exp": "A playbook defines the automated workflow and response steps for a specific security incident."
 },
 {
  "id": 496,
  "obj": "4.5",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company's legal counsel notifies the IT department that litigation is anticipated. All email server backups, VPN access logs, and security camera footage from the past six months must be preserved immediately and exempted from normal data retention and deletion policies. What is this directive called?",
  "opts": [
   "A. Chain of custody",
   "B. Legal hold",
   "C. Data retention policy",
   "D. eDiscovery order"
  ],
  "correct": 1,
  "exp": "(B) A legal hold (litigation hold) is a directive to preserve all relevant data and suspend routine deletion when litigation is reasonably anticipated. (A) Chain of custody tracks evidence handling but does not mandate preservation. (C) A data retention policy defines how long data is normally kept, not emergency preservation. (D) eDiscovery is the broader process of identifying and producing electronic evidence, but the preservation directive itself is a legal hold."
 },
 {
  "id": 497,
  "obj": "4.7",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization wants to ensure that recipients can verify emails were genuinely sent by the organization and were not modified in transit. The security team implements a system that attaches a cryptographic signature to every outgoing message using a private key, with the corresponding public key published as a DNS TXT record. Which email authentication standard is being used?",
  "opts": [
   "A. SPF",
   "B. S/MIME",
   "C. DKIM",
   "D. DMARC"
  ],
  "correct": 2,
  "exp": "(C) DKIM (DomainKeys Identified Mail) attaches a digital signature to outgoing emails using a private key, and publishes the public key in DNS so recipients can verify authenticity and integrity. (A) SPF lists authorized sending servers but does not sign individual messages. (B) S/MIME provides end-to-end encryption and signing for individual users, not domain-level signing via DNS. (D) DMARC is a policy layer that builds on SPF and DKIM but does not perform signing itself."
 },
 {
  "id": 498,
  "obj": "4.2",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security engineer configures an application control policy that blocks all software except for items explicitly signed by Microsoft. What is this called?",
  "opts": [
   "A. Blocklisting",
   "B. Allowlisting (Publisher-based)",
   "C. Fuzzing",
   "D. Sandboxing"
  ],
  "correct": 1,
  "exp": "Allowlisting only permits explicitly trusted items. This is publisher-based because it trusts the signature rather than a file hash."
 },
 {
  "id": 499,
  "obj": "4.9",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Which technique is commonly used in security automation scripts to obfuscate malicious payloads and evade simple string-based detection?",
  "opts": [
   "A. Hashing",
   "B. Base64 Encoding",
   "C. Salting",
   "D. Encryption"
  ],
  "correct": 1,
  "exp": "Attackers often encode scripts (using Base64) to hide the true nature of their commands from basic text-based scanners."
 },
 {
  "id": 500,
  "obj": "4.4",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Which type of vulnerability scan is more accurate because it logs into the system to see installed software and internal configurations?",
  "opts": [
   "A. Unauthenticated",
   "B. Authenticated / Credentialed",
   "C. Passive",
   "D. External"
  ],
  "correct": 1,
  "exp": "Authenticated scans use credentials to provide a deeper and more accurate view of the target's security state."
 },
 {
  "id": 900,
  "obj": "4.1",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company deploys a PAM (Privileged Access Management) solution that requires administrators to check out credentials from a vault before accessing critical servers. All sessions are recorded, and the credentials are automatically rotated after each use. Which security benefit does credential vaulting with session recording PRIMARILY provide?",
  "opts": [
   "A. It eliminates the need for multi-factor authentication",
   "B. It provides accountability and prevents credential reuse by automatically rotating secrets after each session",
   "C. It replaces the need for network segmentation",
   "D. It encrypts all data at rest on the target servers"
  ],
  "correct": 1,
  "exp": "PAM credential vaulting stores privileged credentials in an encrypted vault, issues them on demand, records the entire session for audit, and rotates the password after check-in. This ensures accountability (session recording proves who did what), prevents credential reuse (automatic rotation invalidates any stolen or copied credentials), and enforces least privilege (admins only access what they check out). MFA is still required as a separate control. Network segmentation and data encryption are independent controls. PAM vaulting = accountability + credential hygiene + audit trail."
 },
 {
  "id": 901,
  "obj": "4.1",
  "type": "multi",
  "domain": 4,
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "An organization is implementing a Zero Trust architecture. Which TWO principles are fundamental to a Zero Trust model?",
  "opts": [
   "A. Implicitly trust all traffic originating from inside the corporate network perimeter",
   "B. Verify every access request continuously, regardless of the user's network location",
   "C. Apply micro-segmentation to limit lateral movement between resources",
   "D. Grant permanent VPN access to all employees as their primary control",
   "E. Rely exclusively on perimeter firewalls for access enforcement"
  ],
  "correct": [
   1,
   2
  ],
  "exp": "Zero Trust operates on the principle of 'never trust, always verify.' Two core tenets: (B) Continuous verification — every access request is authenticated, authorized, and encrypted regardless of whether the user is inside or outside the network. (C) Micro-segmentation — network resources are isolated into small zones so that even if an attacker compromises one segment, lateral movement to other segments is blocked. Implicit trust (A) is the old perimeter model that Zero Trust replaces. Permanent VPN (D) and perimeter-only firewalls (E) are legacy approaches. Zero Trust = continuous verification + micro-segmentation + least privilege."
 },
 {
  "id": 902,
  "obj": "4.2",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "After a ransomware attack, the incident response team completes containment by isolating all affected servers. The team then removes the ransomware binaries, patches the exploited vulnerability, and resets all compromised credentials. Which IR phase are these activities part of?",
  "opts": [
   "A. Identification",
   "B. Containment",
   "C. Eradication",
   "D. Recovery"
  ],
  "correct": 2,
  "exp": "Eradication is the IR phase where the threat is fully removed from the environment. Activities include: removing malware, closing exploited vulnerabilities (patching), resetting compromised accounts, and verifying no backdoors remain. Containment (already completed in this scenario) stops the spread. Recovery (next phase) restores systems to normal operations from clean backups. Identification confirmed the incident. The key distinction: containment = stop the bleeding; eradication = remove the disease; recovery = heal the patient."
 },
 {
  "id": 903,
  "obj": "4.2",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security team conducts a tabletop exercise where key stakeholders walk through a simulated data breach scenario, discussing their roles and decision points without touching any actual systems. What is the PRIMARY purpose of this exercise?",
  "opts": [
   "A. To test the performance of the SIEM under load",
   "B. To validate that the incident response plan is understood and to identify gaps in communication and procedures",
   "C. To replace the need for a penetration test",
   "D. To generate compliance evidence for a vulnerability scan"
  ],
  "correct": 1,
  "exp": "A tabletop exercise is a discussion-based simulation where participants walk through an incident scenario verbally. The goal is to validate the IR plan, test decision-making, identify procedural gaps, and improve inter-team communication — all without any technical testing. It is low-cost and low-risk, making it ideal for regular practice. It does NOT replace technical tests like pen tests or vulnerability scans. Tabletop exercises are specifically called out in CompTIA Security+ under incident response preparation. Common findings include: unclear escalation paths, outdated contact lists, and ambiguous roles. Tabletop = plan validation + communication testing."
 },
 {
  "id": 904,
  "obj": "4.3",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst reviews SIEM data and notices that a single internal workstation is making DNS queries to randomly generated domain names at a rate of 500 queries per minute, with most queries returning NXDOMAIN (non-existent domain). What attack technique does this MOST likely indicate?",
  "opts": [
   "A. DNS zone transfer",
   "B. DGA used by malware for command-and-control communication",
   "C. Legitimate web browsing with a misconfigured DNS resolver",
   "D. DNS cache poisoning targeting the local resolver"
  ],
  "correct": 1,
  "exp": "Domain Generation Algorithms (DGAs) are used by malware to dynamically generate large numbers of pseudo-random domain names as potential C2 (command and control) rendezvous points. The malware queries hundreds of domains; most return NXDOMAIN because only the attacker registers a few at any given time. This makes blocking C2 traffic difficult because the domains constantly change. High-volume DNS queries to random-looking domains with NXDOMAIN responses is a classic DGA indicator. DNS zone transfers (A) copy zone data between servers. Cache poisoning (D) injects false DNS records. Legitimate browsing (C) would not produce random domains at this rate."
 },
 {
  "id": 905,
  "obj": "4.3",
  "type": "multi",
  "domain": 4,
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "A SOC team is deploying a threat intelligence platform to enhance detection capabilities. Which TWO are valid uses of threat intelligence feeds in security operations?",
  "opts": [
   "A. Automatically enriching SIEM alerts with context such as known-malicious IP reputation scores",
   "B. Replacing the need for endpoint protection software entirely",
   "C. Proactively updating firewall blocklists with indicators of compromise (IoCs) from active threat campaigns",
   "D. Eliminating the need for vulnerability scanning",
   "E. Automatically patching all systems based on threat actor reports"
  ],
  "correct": [
   0,
   2
  ],
  "exp": "Threat intelligence feeds provide actionable data about current threats. Two primary operational uses: (A) Alert enrichment — when a SIEM alert fires, the platform automatically checks the involved IPs, domains, and file hashes against threat intel databases, adding context (e.g., 'this IP is associated with APT29') so analysts can prioritize. (C) Proactive blocking — IoCs (malicious IPs, domains, URLs) from threat feeds are automatically pushed to firewalls, proxies, and DNS filters to block known-bad infrastructure before it is encountered. Threat intel does NOT replace endpoint protection (B), vulnerability scanning (D), or patch management (E) — it supplements them. Intelligence-driven defense = enrichment + proactive blocking."
 },
 {
  "id": 906,
  "obj": "4.4",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A vulnerability scan report shows a critical finding: CVE-2024-21762 on an internet-facing VPN appliance with a CVSS score of 9.8 and a note that active exploitation has been observed in the wild. The patch has been available for 30 days. What should the security team do FIRST?",
  "opts": [
   "A. Schedule the patch for the next quarterly maintenance window",
   "B. Apply the patch immediately through emergency change management, as the vulnerability is actively exploited on an internet-facing system",
   "C. Wait for the vendor to release a second patch to ensure stability",
   "D. Disable logging on the VPN appliance to reduce attack surface"
  ],
  "correct": 1,
  "exp": "This is a textbook emergency patching scenario: critical CVSS (9.8), actively exploited in the wild, internet-facing, and the patch exists. Waiting for a quarterly window (A) leaves the organization exposed to a known, actively exploited vulnerability — unacceptable risk. Waiting for a second patch (C) adds unnecessary delay. Disabling logging (D) removes visibility and is counterproductive. Emergency change management procedures exist precisely for this situation: expedited approval, immediate patching, and post-patch validation. The combination of active exploitation + internet-facing + critical severity demands immediate action."
 },
 {
  "id": 907,
  "obj": "4.4",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A vulnerability management team discovers that a legacy manufacturing control system runs Windows XP Embedded and cannot be patched or upgraded due to vendor support constraints. Which is the BEST compensating control to reduce risk?",
  "opts": [
   "A. Install a modern antivirus agent on the Windows XP system",
   "B. Segment the legacy system onto an isolated network with strict firewall rules allowing only necessary traffic",
   "C. Connect the system directly to the internet for remote monitoring",
   "D. Document the risk and take no further action"
  ],
  "correct": 1,
  "exp": "When patching is not possible (legacy systems, vendor constraints, OT/ICS environments), network segmentation is the primary compensating control. Placing the system on an isolated VLAN with strict firewall rules (allow only required protocols/ports to specific hosts) limits the blast radius if the system is compromised. Modern AV (A) often does not support legacy OS versions. Internet exposure (C) dramatically increases risk. Documenting without action (D) accepts risk without mitigation. Additional compensating controls include: application allowlisting, enhanced monitoring/logging, and disabling unnecessary services. Segmentation = the go-to compensating control for unpatchable systems."
 },
 {
  "id": 908,
  "obj": "4.5",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A forensic investigator creates a bit-for-bit image of a suspect's hard drive and then computes SHA-256 hashes of both the original drive and the image. The hashes match. Six months later in court, the defense attorney argues the evidence may have been altered. How does the investigator prove the image is authentic?",
  "opts": [
   "A. By showing the image file size matches the original drive size",
   "B. By presenting the matching SHA-256 hash values documented at the time of acquisition along with the chain of custody log",
   "C. By testifying from memory that the image was not altered",
   "D. By re-imaging the drive in court to demonstrate the process"
  ],
  "correct": 1,
  "exp": "Cryptographic hash verification is the gold standard for forensic evidence integrity. The SHA-256 hash computed at acquisition time serves as a digital fingerprint — any alteration to even a single bit would produce a completely different hash. Combined with chain of custody documentation (proving who handled the evidence and when), this provides legally defensible proof that the evidence is authentic and unaltered. File size alone (A) is insufficient — content could change while size remains the same. Testimony from memory (C) is unreliable. Re-imaging (D) is impractical and the original drive state may have changed. Hash verification + chain of custody = forensic evidence admissibility."
 },
 {
  "id": 909,
  "obj": "4.5",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "During an incident involving a compromised web server, the legal department issues a litigation hold notice to the IT team. What does this require the IT team to do?",
  "opts": [
   "A. Immediately delete all logs older than 30 days to reduce liability",
   "B. Preserve all potentially relevant electronic data and suspend routine data destruction policies for the affected systems",
   "C. Encrypt all server hard drives and ship them to the legal department",
   "D. Restore the web server from backup immediately to resume operations"
  ],
  "correct": 1,
  "exp": "A litigation hold (legal hold) requires the organization to preserve all electronically stored information (ESI) that may be relevant to pending or anticipated litigation. This means: suspending automated data deletion/rotation policies, preserving logs, emails, backups, and system images, and notifying custodians of their preservation obligations. Deleting data (A) after a legal hold is spoliation — destruction of evidence, which carries severe legal penalties. Encrypting and shipping (C) is not the requirement. Restoring from backup (D) could overwrite forensic evidence. Legal hold = preserve everything, destroy nothing, until counsel authorizes release."
 },
 {
  "id": 910,
  "obj": "4.6",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company hires an external security firm to simulate a real-world adversary. The team operates covertly over 3 months, attempting to breach the network using social engineering, physical intrusion, and technical exploitation — without the internal security team's knowledge. Only the CISO and legal counsel are aware. What type of assessment is this?",
  "opts": [
   "A. Vulnerability assessment",
   "B. White-box penetration test",
   "C. Red team engagement",
   "D. Compliance audit"
  ],
  "correct": 2,
  "exp": "A red team engagement simulates a realistic adversary over an extended period using multiple attack vectors (social engineering, physical, technical). A key characteristic is that the defensive team (blue team) is NOT informed — this tests the organization's actual detection and response capabilities under real conditions. Only select executives are aware (typically CISO and legal). This differs from a standard penetration test, which is shorter, more focused, and the security team usually knows it is happening. Vulnerability assessments (A) only identify weaknesses without exploitation. White-box pen tests (B) provide full information to testers. Red team = realistic adversary simulation + blue team unaware."
 },
 {
  "id": 911,
  "obj": "4.6",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "After a penetration test concludes, the testing firm delivers a report showing they were able to pivot from a compromised web server to the internal database containing credit card data. The organization's blue team did not detect the lateral movement. Which BEST describes the follow-up activity where the pen test findings are used to improve the blue team's detection capabilities?",
  "opts": [
   "A. Vulnerability scanning",
   "B. Purple team exercise",
   "C. Bug bounty program",
   "D. Risk acceptance"
  ],
  "correct": 1,
  "exp": "A purple team exercise is a collaborative activity where the red team (attackers) shares their techniques, tactics, and procedures (TTPs) with the blue team (defenders) so the blue team can build or improve detection rules, monitoring, and response capabilities. Unlike a red team engagement where the blue team is unaware, purple teaming is cooperative — the goal is mutual improvement. The pen test findings (undetected lateral movement) become training input for the blue team. Vulnerability scanning (A) identifies weaknesses but does not improve detection. Bug bounties (C) involve external researchers finding bugs. Risk acceptance (D) means doing nothing. Purple team = red + blue collaboration for improved detection."
 },
 {
  "id": 912,
  "obj": "4.7",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security architect is configuring email authentication for the company domain. They want to add a cryptographic signature to all outgoing emails so that receiving servers can verify the email was not modified in transit and was genuinely sent by an authorized server. Which technology provides this capability?",
  "opts": [
   "A. SPF (Sender Policy Framework)",
   "B. DKIM (DomainKeys Identified Mail)",
   "C. STARTTLS",
   "D. S/MIME"
  ],
  "correct": 1,
  "exp": "DKIM adds a digital signature to outgoing email headers using public-key cryptography. The sending server signs the email with a private key; the receiving server retrieves the public key from the sender's DNS TXT record and verifies the signature. This proves: (1) the email was sent by an authorized server that holds the private key, and (2) the email content was not modified in transit. SPF (A) only specifies which IPs can send for the domain — no cryptographic signature. STARTTLS (C) encrypts the SMTP connection between mail servers but does not sign individual messages. S/MIME (D) provides end-to-end email encryption and signing at the user level, not the domain level. DKIM = domain-level email signing + integrity verification."
 },
 {
  "id": 913,
  "obj": "4.7",
  "type": "multi",
  "domain": 4,
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "An organization is hardening its web application firewall (WAF) configuration. Which TWO attack types is a WAF specifically designed to detect and block?",
  "opts": [
   "A. SQL injection attacks embedded in HTTP request parameters",
   "B. ARP spoofing on the local network segment",
   "C. Cross-site scripting (XSS) payloads in form submissions",
   "D. Physical tailgating through secured doors",
   "E. Bluetooth relay attacks against wireless keyboards"
  ],
  "correct": [
   0,
   2
  ],
  "exp": "A Web Application Firewall (WAF) inspects HTTP/HTTPS traffic at Layer 7 (application layer) and applies rules to detect and block web-based attacks. (A) SQL injection — the WAF detects malicious SQL syntax in request parameters, headers, and cookies. (C) Cross-site scripting (XSS) — the WAF identifies script injection attempts in form fields and URL parameters. ARP spoofing (B) is a Layer 2 network attack — invisible to a WAF. Physical tailgating (D) is a physical security issue. Bluetooth attacks (E) are wireless/physical attacks. WAFs protect web applications from OWASP Top 10 threats including SQLi, XSS, CSRF, and file inclusion. WAF = Layer 7 HTTP/HTTPS attack prevention."
 },
 {
  "id": 914,
  "obj": "4.8",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst suspects that a compromised host is exfiltrating data via DNS tunneling. They need to capture and inspect the actual DNS query payloads to confirm. Which tool and approach is MOST appropriate?",
  "opts": [
   "A. Run <code>nmap -sV</code> against the DNS server to check for open ports",
   "B. Use <code>tcpdump -i eth0 port 53 -w dns_capture.pcap</code> to capture DNS traffic, then analyze the payloads in Wireshark",
   "C. Run <code>ping</code> to the suspected C2 domain to check if it resolves",
   "D. Check the ARP table with <code>arp -a</code> for suspicious MAC addresses"
  ],
  "correct": 1,
  "exp": "DNS tunneling encodes data within DNS queries and responses (typically in TXT or CNAME records with unusually long, encoded subdomain names). To confirm this, you need to capture actual DNS packet payloads — tcpdump filtering on port 53 captures all DNS traffic to a pcap file, which can then be opened in Wireshark for deep payload inspection. Look for: unusually long subdomain labels, high entropy in query names, excessive TXT record queries, and high query volume to a single domain. nmap (A) identifies services but does not capture traffic. Ping (C) only tests reachability. ARP (D) shows MAC-to-IP mappings. Packet capture + payload analysis = DNS tunneling confirmation."
 },
 {
  "id": 915,
  "obj": "4.8",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An administrator runs <code>curl -I https://internal-app.company.com</code> and receives a response header showing <code>X-Powered-By: PHP/5.6.40</code> and <code>Server: Apache/2.2.34</code>. Why is this a security concern?",
  "opts": [
   "A. The curl command itself is a vulnerability",
   "B. The response headers reveal specific software versions that attackers can use to search for known exploits targeting those exact versions",
   "C. HTTPS is not supported by these server versions",
   "D. The X-Powered-By header indicates the server is compromised"
  ],
  "correct": 1,
  "exp": "Information disclosure through HTTP response headers is a common misconfiguration. Revealing exact software versions (PHP 5.6.40, Apache 2.2.34) allows attackers to look up known CVEs for those specific versions and craft targeted exploits. Both versions shown are end-of-life and have numerous known vulnerabilities. Server hardening best practices include: removing or obfuscating version information from response headers (ServerTokens Prod in Apache, expose_php = Off in php.ini), and upgrading to supported versions. The curl command (A) is a legitimate tool. HTTPS compatibility (C) is unrelated. The header itself (D) does not indicate compromise — it indicates misconfiguration. Banner disclosure = reconnaissance advantage for attackers."
 },
 {
  "id": 916,
  "obj": "4.9",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A DevOps team stores their infrastructure configurations as code in a Git repository. Before any infrastructure change is deployed, an automated pipeline scans the Terraform templates for security misconfigurations such as publicly accessible S3 buckets and unencrypted databases. What is this practice called?",
  "opts": [
   "A. Dynamic Application Security Testing (DAST)",
   "B. Infrastructure as Code (IaC) scanning",
   "C. Penetration testing",
   "D. Log aggregation"
  ],
  "correct": 1,
  "exp": "Infrastructure as Code (IaC) scanning analyzes infrastructure configuration templates (Terraform, CloudFormation, Ansible, Kubernetes manifests) for security misconfigurations BEFORE deployment. This is a shift-left practice that catches issues like public S3 buckets, unencrypted storage, overly permissive security groups, and missing logging configurations in the code review stage — before they become live vulnerabilities. Tools include Checkov, tfsec, and Bridgecrew. DAST (A) tests running applications. Penetration testing (C) is manual exploitation. Log aggregation (D) collects runtime data. IaC scanning = pre-deployment infrastructure security validation."
 },
 {
  "id": 917,
  "obj": "4.9",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security team discovers that a third-party JavaScript library used in their web application has a known critical vulnerability. The library was included as a dependency two years ago and has not been updated. Which practice would have PREVENTED this situation?",
  "opts": [
   "A. Implementing a Web Application Firewall",
   "B. Continuous Software Composition Analysis (SCA) integrated into the CI/CD pipeline with automated alerts for vulnerable dependencies",
   "C. Running DAST scans against the production environment quarterly",
   "D. Performing annual penetration tests"
  ],
  "correct": 1,
  "exp": "Software Composition Analysis (SCA) continuously monitors all open-source and third-party dependencies in an application against known vulnerability databases (NVD, GitHub Advisory). When integrated into CI/CD, SCA runs on every build and alerts (or blocks deployment) when a dependency has a known CVE. This would have caught the vulnerable library as soon as the CVE was published — not two years later. A WAF (A) might mitigate some exploits but does not fix the root cause. DAST (C) tests the running app but may not identify specific library versions. Annual pen tests (D) are too infrequent. Continuous SCA = proactive supply chain vulnerability management."
 },
 {
  "id": 918,
  "obj": "4.2",
  "type": "multi",
  "domain": 4,
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "During the recovery phase of an incident response, the team needs to restore compromised systems to production. Which TWO actions are essential before declaring the incident fully resolved?",
  "opts": [
   "A. Restore systems from known-good backups that predate the compromise",
   "B. Immediately grant all users their original access permissions without review",
   "C. Verify that restored systems are free of malware and backdoors through scanning and monitoring",
   "D. Skip documentation to speed up the recovery timeline",
   "E. Disable all security monitoring to avoid triggering false alerts during restoration"
  ],
  "correct": [
   0,
   2
  ],
  "exp": "During recovery, two essential actions: (A) Restore from known-good backups — using backups from before the compromise ensures the restored systems do not contain attacker artifacts, backdoors, or corrupted data. The backup date must predate the initial compromise, not just the detection date. (C) Post-restoration verification — after restoring, the team must scan for malware, check for persistence mechanisms, monitor for anomalous activity, and validate system integrity before returning to production. Granting access without review (B) may re-enable compromised accounts. Skipping documentation (D) violates IR best practices. Disabling monitoring (E) creates a blind spot during a critical phase. Clean restore + verification = safe recovery."
 },
 {
  "id": 919,
  "obj": "4.4",
  "type": "mcq",
  "domain": 4,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A vulnerability scan of an internal web application reports a critical SQL injection finding. The development team argues the finding is a false positive because the application uses parameterized queries. What should the security team do NEXT?",
  "opts": [
   "A. Immediately take the application offline based solely on the scan report",
   "B. Validate the finding by manually testing the reported injection point to confirm whether it is a true positive or false positive",
   "C. Ignore the finding entirely because the development team says it is secure",
   "D. Remove the web application from all future vulnerability scans"
  ],
  "correct": 1,
  "exp": "Vulnerability scan findings — especially critical ones — must be validated before taking action. Automated scanners produce false positives, and parameterized queries do generally prevent SQL injection. The correct approach is to manually test the specific injection point (using tools like Burp Suite or sqlmap against a test environment) to confirm the finding. If confirmed, remediate immediately. If false positive, document it and tune the scanner. Taking the app offline (A) without validation is disruptive. Ignoring the finding (C) based on developer assurance alone is risky. Removing from scans (D) creates a permanent blind spot. Validate first, then act = professional vulnerability management."
 },
 {
  "id": 1020,
  "type": "log",
  "domain": 4,
  "obj": "4.5",
  "badge": "PBQ · Log Analysis",
  "badgeClass": "drag-b",
  "stem": "The SOC has received an alert about suspicious activity on the corporate network. As the incident responder, you must examine the logs from each host, classify whether it is Clean, Infected, or the Source of the attack, and identify patient zero.",
  "machines": [
   {
    "name": "WS-PC04",
    "role": "Workstation",
    "logs": [
     "[08:31:12] User dthompson logged in — domain\\dthompson",
     "[08:32:45] Outlook launched — connected to mail.corp.local",
     "[08:33:01] Opened attachment: Q3_Budget_Review.xlsm",
     "[08:33:04] [!] ALERT: PowerShell spawned by EXCEL.EXE — encoded command detected",
     "[08:33:06] [!] ALERT: Outbound connection to 185.234.72.19:443 (C2 beacon)",
     "[08:33:18] [!] ALERT: Credential harvesting — mimikatz.exe detected in memory",
     "[08:34:02] [!] ALERT: Lateral movement — PsExec to SRV-FILE01 using stolen credentials",
     "[08:35:44] [!] ALERT: Lateral movement — RDP session to WS-PC07"
    ],
    "status": "source"
   },
   {
    "name": "SRV-DC01",
    "role": "Domain Controller",
    "logs": [
     "[08:30:00] Service startup — Active Directory Domain Services",
     "[08:31:12] Authentication: dthompson — SUCCESS (Kerberos)",
     "[08:33:22] Authentication: dthompson — SUCCESS (NTLM) — source: SRV-FILE01",
     "[08:35:01] Group Policy refresh — all OUs processed normally",
     "[08:36:00] DNS query log — normal resolution traffic",
     "[08:37:15] Authentication: jparker — SUCCESS (Kerberos)"
    ],
    "status": "clean"
   },
   {
    "name": "SRV-FILE01",
    "role": "File Server",
    "logs": [
     "[08:30:15] Service startup — SMB file sharing active",
     "[08:33:20] [!] ALERT: PsExec remote service installed — source IP: 10.1.4.22 (WS-PC04)",
     "[08:33:21] [!] ALERT: New service created: PSEXESVC — runs as SYSTEM",
     "[08:33:24] [!] ALERT: Bulk file access — 847 files read in \\\\finance\\shared in 12 seconds",
     "[08:33:30] [!] ALERT: Data staged to C:\\Windows\\Temp\\exfil.7z (214 MB)",
     "[08:33:45] [!] ALERT: Outbound HTTPS to 185.234.72.19 — 214 MB transferred"
    ],
    "status": "infected"
   },
   {
    "name": "WS-PC07",
    "role": "Workstation",
    "logs": [
     "[08:30:05] User jparker logged in — domain\\jparker",
     "[08:31:00] Chrome launched — browsed intranet.corp.local",
     "[08:35:48] [!] ALERT: Inbound RDP connection from 10.1.4.22 (WS-PC04)",
     "[08:35:52] [!] ALERT: PowerShell executed — download cradle from 185.234.72.19",
     "[08:36:01] [!] ALERT: Scheduled task created: WindowsUpdate_Check — persistence mechanism"
    ],
    "status": "infected"
   },
   {
    "name": "SRV-WEB01",
    "role": "Web Server",
    "logs": [
     "[08:30:00] Apache started — listening on 443",
     "[08:31:44] GET /portal/login — 200 — 10.1.2.50",
     "[08:32:10] POST /portal/auth — 200 — 10.1.2.50",
     "[08:34:00] GET /portal/dashboard — 200 — 10.1.2.51",
     "[08:35:22] GET /portal/reports — 200 — 10.1.2.50",
     "[08:36:44] Health check — all services nominal"
    ],
    "status": "clean"
   }
  ],
  "exp": "WS-PC04 is patient zero (Source) — the attack began when user dthompson opened a malicious Excel macro attachment, which spawned PowerShell, established a C2 beacon to 185.234.72.19, harvested credentials with mimikatz, and then moved laterally. SRV-FILE01 is Infected — it received a PsExec connection from WS-PC04, had bulk data exfiltrated from the finance share, and sent 214 MB to the C2 server. WS-PC07 is Infected — it received an RDP connection from WS-PC04, had a download cradle executed, and a persistence mechanism installed. SRV-DC01 is Clean — its logs show normal authentication and group policy activity with no suspicious events. SRV-WEB01 is Clean — only normal HTTP traffic and health checks. The key forensic indicators: the macro-spawned PowerShell, C2 beacon IP, mimikatz in memory, and lateral movement via PsExec and RDP all trace back to WS-PC04 as the initial compromise point."
 },
 {
  "id": 1021,
  "type": "log",
  "domain": 4,
  "obj": "4.3",
  "badge": "PBQ · Log Analysis",
  "badgeClass": "drag-b",
  "stem": "Your SIEM has flagged anomalous authentication patterns across several systems. Investigate each host's logs to determine which systems are compromised and identify the origin of the attack.",
  "machines": [
   {
    "name": "VPN-GW01",
    "role": "VPN Gateway",
    "logs": [
     "[02:14:33] VPN connection — user svc_backup — source IP: 198.51.100.44 (TOR exit node)",
     "[02:14:34] [!] ALERT: Authentication SUCCESS from known TOR exit node",
     "[02:14:35] [!] ALERT: User svc_backup normally connects from 10.0.0.0/8 — first external VPN login",
     "[02:14:40] Session established — assigned IP: 10.1.99.5",
     "[02:15:01] [!] ALERT: Immediate SMB scan of 10.1.0.0/16 from 10.1.99.5",
     "[02:17:22] [!] ALERT: Multiple LDAP queries for Domain Admins group membership"
    ],
    "status": "source"
   },
   {
    "name": "SRV-DB01",
    "role": "Database Server",
    "logs": [
     "[02:18:05] [!] ALERT: Login attempt — sa account — FAILED — source: 10.1.99.5",
     "[02:18:06] [!] ALERT: Login attempt — sa account — FAILED — source: 10.1.99.5",
     "[02:18:07] [!] ALERT: Login attempt — sa account — FAILED — source: 10.1.99.5",
     "[02:18:10] [!] ALERT: Login attempt — sa account — SUCCESS — source: 10.1.99.5",
     "[02:18:15] [!] ALERT: xp_cmdshell enabled by sa",
     "[02:18:20] [!] ALERT: xp_cmdshell executed: whoami /priv",
     "[02:18:44] [!] ALERT: SQL dump of customers table — 2.1M rows exported to CSV",
     "[02:19:01] [!] ALERT: Outbound FTP to 198.51.100.44 — 340 MB transferred"
    ],
    "status": "infected"
   },
   {
    "name": "SRV-APP01",
    "role": "Application Server",
    "logs": [
     "[02:00:00] Application pool started — IIS running",
     "[02:14:55] GET /api/health — 200 — 10.1.2.10",
     "[02:15:30] POST /api/orders — 201 — 10.1.2.15",
     "[02:16:00] GET /api/users — 200 — 10.1.2.10",
     "[02:17:00] Scheduled job: report_generation — completed normally",
     "[02:18:00] GET /api/health — 200 — monitoring service"
    ],
    "status": "clean"
   },
   {
    "name": "WS-ADMIN03",
    "role": "Admin Workstation",
    "logs": [
     "[02:17:30] [!] ALERT: Inbound RDP from 10.1.99.5 — logged in as svc_backup",
     "[02:17:45] [!] ALERT: PowerShell: Import-Module ActiveDirectory",
     "[02:17:50] [!] ALERT: New admin account created: support_tech",
     "[02:17:55] [!] ALERT: support_tech added to Domain Admins group",
     "[02:18:00] [!] ALERT: Windows Defender real-time protection disabled",
     "[02:18:30] [!] ALERT: RDP settings changed — NLA disabled"
    ],
    "status": "infected"
   },
   {
    "name": "SRV-MAIL01",
    "role": "Mail Server",
    "logs": [
     "[02:00:15] Exchange services started — all healthy",
     "[02:10:00] Message delivery — 47 messages processed",
     "[02:14:00] Antispam scan — 3 messages quarantined",
     "[02:16:30] Message delivery — 12 messages processed",
     "[02:18:00] OWA login — user hrodriguez — SUCCESS — 10.1.3.22",
     "[02:19:00] Backup agent — transaction log backup completed"
    ],
    "status": "clean"
   }
  ],
  "exp": "VPN-GW01 is the Source — the attacker used compromised svc_backup credentials to VPN in from a TOR exit node, which is the first entry point into the network. The immediate SMB scan and LDAP queries for Domain Admins show reconnaissance. SRV-DB01 is Infected — the attacker brute-forced the SQL SA account from the VPN-assigned IP (10.1.99.5), enabled xp_cmdshell for command execution, dumped the customers database, and exfiltrated 340 MB via FTP back to the attacker's IP. WS-ADMIN03 is Infected — the attacker RDP'd in from the VPN IP, created a backdoor admin account (support_tech), added it to Domain Admins, disabled Defender, and weakened RDP security. SRV-APP01 is Clean — only normal API traffic and scheduled jobs. SRV-MAIL01 is Clean — normal mail processing and legitimate OWA login. Key indicators: the TOR exit node IP, service account used outside normal patterns, and all malicious activity traces back to the VPN-assigned IP 10.1.99.5."
 }
];
