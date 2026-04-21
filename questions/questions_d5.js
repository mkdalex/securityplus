const Q_D5 = [
 {
  "id": 78,
  "obj": "5.3",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company processing credit card payments must implement specific security controls including network segmentation, access controls, encryption, and regular testing. Which compliance framework mandates these requirements?",
  "opts": [
   "A. HIPAA",
   "B. SOX",
   "C. GDPR",
   "D. PCI-DSS"
  ],
  "correct": 3,
  "exp": "PCI-DSS (Payment Card Industry Data Security Standard) is the mandatory framework for any organisation that processes, stores, or transmits cardholder data. It has 12 core requirements covering network security, access control, encryption, vulnerability management, monitoring, and testing. HIPAA governs Protected Health Information (PHI) in US healthcare. SOX governs financial reporting integrity for US public companies. GDPR governs personal data of EU residents. Framework-to-data-type mapping: credit card data = PCI-DSS, health records = HIPAA, EU personal data = GDPR, public company financial reporting = SOX. This mapping is directly tested on Security+."
 },
 {
  "id": 79,
  "obj": "5.2",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A risk analyst calculates that a specific database server breach has a 30% annual probability of occurring and would cause $500,000 in damages. What is the Annual Loss Expectancy (ALE)?",
  "opts": [
   "A. $500,000",
   "B. $150,000",
   "C. $1,666,667",
   "D. $350,000"
  ],
  "correct": 1,
  "exp": "ALE = SLE × ARO. SLE (Single Loss Expectancy) = the monetary damage per occurrence = $500,000. ARO (Annual Rate of Occurrence) = the probability per year = 0.30 (30%). ALE = $500,000 × 0.30 = $150,000. This means the organisation can justify spending up to $150,000 per year on controls to mitigate this risk before the cost exceeds the benefit. ALE is the key metric for security investment justification in quantitative risk analysis. If a control costs $200,000/year but the ALE is $150,000, the control is not cost-effective. CompTIA tests ALE, SLE, and ARO calculations consistently."
 },
 {
  "id": 80,
  "obj": "5.2",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company's security team purchases a cyber insurance policy to cover financial losses from data breaches. Which risk management strategy is this?",
  "opts": [
   "A. Risk avoidance",
   "B. Risk mitigation",
   "C. Risk transference",
   "D. Risk acceptance"
  ],
  "correct": 2,
  "exp": "Risk transference shifts the financial consequences of a risk to a third party — typically through insurance or contractual liability clauses. The technical risk still exists; the financial impact is transferred. Cyber insurance is the canonical example of risk transference. Risk avoidance eliminates the risk by stopping the activity that creates it (e.g., not collecting certain data). Risk mitigation implements controls to reduce the likelihood or impact of the risk (firewalls, encryption, access controls). Risk acceptance acknowledges a risk and consciously decides to take no additional action — typically for low-impact or low-probability risks within the organisation's risk appetite."
 },
 {
  "id": 81,
  "obj": "5.6",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company decides to outsource payroll processing to a third-party vendor. The vendor will have access to all employee personal and financial data. Which document MUST be established to define the security requirements the vendor must meet and the organisation's rights to audit them?",
  "opts": [
   "A. Non-Disclosure Agreement (NDA)",
   "B. Service Level Agreement (SLA)",
   "C. Memorandum of Understanding (MOU)",
   "D. Data Processing Agreement (DPA) / Vendor Security Addendum"
  ],
  "correct": 3,
  "exp": "When a vendor processes your organisation's sensitive data, a Data Processing Agreement (DPA) or Vendor Security Addendum contractually defines: required security controls, data handling obligations, breach notification timelines, audit rights, and liability. Under GDPR, a DPA is legally mandatory when sharing personal data with processors. An NDA protects confidential information but doesn't mandate specific security controls or grant audit rights. An SLA defines service performance metrics (uptime, response times). An MOU documents intent but typically lacks legal enforceability. Third-party risk management requires contractual security obligations — not just performance metrics."
 },
 {
  "id": 82,
  "obj": "5.1",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A governance committee reviews the organisation's security programme and finds several policies that have not been reviewed or updated in 4 years, despite significant technology and regulatory changes. Which governance element has failed?",
  "opts": [
   "A. Risk assessment process",
   "B. Policy lifecycle management and periodic review",
   "C. Incident response planning",
   "D. Business continuity planning"
  ],
  "correct": 1,
  "exp": "Policy lifecycle management requires that policies are created, approved, implemented, reviewed periodically, and updated when business, technology, or regulatory changes occur. Policies that are 4 years old with no review are likely outdated and non-compliant. Most frameworks (ISO 27001, NIST CSF) require annual policy reviews at minimum. A failed policy review cycle means the governance framework is not functioning. Risk assessment identifies risks — it doesn't manage policy currency. IR planning and BCP are specific plans, not the broader governance element responsible for policy maintenance. Policy lifecycle = creation → approval → implementation → review → update → retirement."
 },
 {
  "id": 83,
  "obj": "5.3",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation handles personal data of EU citizens. A user contacts the company requesting that all their personal data be permanently deleted from all systems. Under which regulation does this right exist, and what is it called?",
  "opts": [
   "A. HIPAA — Right to PHI Deletion",
   "B. GDPR — Right to Erasure (Right to be Forgotten)",
   "C. PCI-DSS — Cardholder Data Purging Requirement",
   "D. SOX — Record Deletion Provisions"
  ],
  "correct": 1,
  "exp": "GDPR (General Data Protection Regulation) Article 17 grants EU data subjects the \"Right to Erasure\" (commonly called Right to be Forgotten). Individuals can request that organisations delete their personal data when it is no longer necessary, when they withdraw consent, or when they object to processing. Organisations must comply within 30 days unless legal obligations (like SOX record retention) override. HIPAA has access and amendment rights for PHI but not a general erasure right. PCI-DSS requires purging cardholder data after it is no longer needed — but this is a compliance mandate, not an individual rights framework. GDPR data subject rights are frequently tested on Security+."
 },
 {
  "id": 84,
  "obj": "5.1",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security manager is asked to explain the difference between a security policy and a security standard to a new team member. Which statement BEST explains this distinction?",
  "opts": [
   "A. Policies are technical configurations; standards are high-level principles",
   "B. Policies state what must be done and why (high-level intent); standards define the specific, mandatory requirements to achieve the policy",
   "C. Policies are optional guidelines; standards are mandatory rules",
   "D. Policies are reviewed annually; standards are reviewed quarterly"
  ],
  "correct": 1,
  "exp": "The policy/standard/procedure/guideline hierarchy: Policy = high-level, management-approved statement of intent and objectives (what and why — \"The organisation will protect customer data\"). Standard = mandatory, specific requirements derived from policy (how in measurable terms — \"All passwords must be minimum 12 characters, include complexity, and be rotated every 90 days\"). Procedure = step-by-step implementation instructions. Guideline = non-mandatory recommendations. Policies don't specify technical detail. Standards are mandatory (not optional like guidelines). Review frequency is not the defining distinction. Policy = intent; Standard = measurable requirements."
 },
 {
  "id": 85,
  "obj": "5.5",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation undergoes an external ISO 27001 certification audit. The auditors review security policies, interview staff, test controls, and verify that the ISMS is functioning as documented. Which type of assessment is this?",
  "opts": [
   "A. Vulnerability assessment",
   "B. Penetration test",
   "C. Compliance audit",
   "D. Risk assessment"
  ],
  "correct": 2,
  "exp": "A compliance audit evaluates whether an organisation adheres to a specific standard, regulation, or framework (ISO 27001, PCI-DSS, SOC 2, HIPAA). External auditors verify that documented controls exist, are implemented, and are operating effectively. ISO 27001 certification specifically requires an external audit by an accredited certification body. A vulnerability assessment identifies technical weaknesses in systems. A penetration test exploits vulnerabilities to measure real impact. A risk assessment identifies and evaluates risks. The key: ISO 27001 certification audit = compliance audit. This distinction — vulnerability assessment vs pen test vs audit vs risk assessment — is heavily tested."
 },
 {
  "id": 86,
  "obj": "5.1",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company suffers a ransomware attack. The CISO must brief the board on the incident. During the briefing, the CISO presents the cost of the incident, the regulatory notification requirements triggered, and a recommended investment in new controls. Which role is the CISO performing in this context?",
  "opts": [
   "A. Technical security engineer",
   "B. Security governance and executive communication",
   "C. Incident responder",
   "D. Compliance officer"
  ],
  "correct": 1,
  "exp": "The CISO role bridges technical security and executive governance. Briefing the board on business impact (cost), regulatory obligations (notification requirements), and investment recommendations represents security governance — translating technical incidents into business language and risk decisions for executive leadership. The board needs to understand business impact and make informed decisions about risk appetite and investment. Technical engineering is hands-on system configuration. The active incident response was handled by the IR team. A compliance officer focuses narrowly on regulatory compliance. The CISO's governance function = communicating security risk in business terms to executives and board."
 },
 {
  "id": 87,
  "obj": "5.3",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation collects only the minimum personal data required to provide its service and avoids collecting data that might be useful later. Which data privacy principle does this reflect?",
  "opts": [
   "A. Purpose limitation",
   "B. Data minimisation",
   "C. Storage limitation",
   "D. Integrity and confidentiality"
  ],
  "correct": 1,
  "exp": "Data minimisation (GDPR Article 5(1)(c)) requires collecting only personal data that is adequate, relevant, and limited to what is necessary for the specified purpose. \"Might be useful later\" explicitly violates this principle — you can only collect what you currently need. Purpose limitation (A) means data collected for one purpose cannot be used for another unrelated purpose. Storage limitation (C) means not retaining data longer than necessary. Integrity and confidentiality (D) concerns data security. The scenario describes limiting collection to what's necessary = data minimisation. These are GDPR's 7 data protection principles — know each one's definition."
 },
 {
  "id": 88,
  "obj": "5.4",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company terminates an employee for misconduct. The employee had access to critical financial systems, source code repositories, and the corporate network via VPN. Which action should be performed IMMEDIATELY at the time of termination — before or as the employee is escorted out?",
  "opts": [
   "A. Conduct a full forensic investigation of the employee's devices",
   "B. Revoke all system access, disable accounts, and recover all company devices",
   "C. Send a notice to all staff about the termination",
   "D. Change the WiFi password"
  ],
  "correct": 1,
  "exp": "Immediate access revocation is the critical control for offboarding — especially for termination for cause (misconduct). Before or the moment the employee is informed, all accounts should be disabled, VPN access revoked, and physical access cards deactivated. There is a window of maximum risk between when an employee discovers they're being terminated and when access is revoked — a disgruntled employee with active access can cause severe damage (data deletion, exfiltration, system sabotage). Forensic investigation (A) is important but should not delay access revocation. Staff notifications (C) have legal and privacy considerations. WiFi password changes (D) are incomplete — only one vector."
 },
 {
  "id": 89,
  "obj": "5.2",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security team completes a risk assessment and identifies ten risks. For one risk, the cost of any available control exceeds the ALE. The risk is documented, signed off by senior management, and tracked in the risk register with no further mitigation planned. Which risk treatment strategy has been applied?",
  "opts": [
   "A. Risk avoidance",
   "B. Risk transference",
   "C. Risk mitigation",
   "D. Risk acceptance"
  ],
  "correct": 3,
  "exp": "Risk acceptance means consciously deciding to take on a risk without additional mitigation — typically because the cost of controls exceeds the benefit (as here, where control cost > ALE), the risk is within the organisation's risk appetite, or no effective controls exist. The key elements: documented, management-approved, tracked. Risk acceptance is NOT ignoring a risk — it is a formal, documented decision. Risk avoidance eliminates the risk by stopping the activity. Risk transference uses insurance or contracts. Risk mitigation implements controls. When control cost > ALE + the risk is acceptable to management = formal risk acceptance is the appropriate treatment."
 },
 {
  "id": 90,
  "obj": "5.6",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security manager is implementing a security awareness training programme. All employees must complete annual training covering phishing recognition, password hygiene, data handling, and clean desk policies. An employee in the accounting department also receives additional training on wire transfer fraud and financial social engineering. Which training approach does the additional training represent?",
  "opts": [
   "A. Mandatory compliance training",
   "B. General security awareness",
   "C. Role-based security training",
   "D. On-the-job technical training"
  ],
  "correct": 2,
  "exp": "Role-based security training provides targeted security education specific to the risks, threats, and responsibilities of a particular job function. Accounting staff face specific threats (BEC — Business Email Compromise, wire transfer fraud, CFO impersonation scams) that general employees don't — their training should reflect this. General awareness training (B) covers universal topics like phishing and passwords for all staff. Mandatory compliance training (A) covers regulatory requirements — it may overlap but isn't the defining term here. On-the-job technical training is skill development for technical roles. Targeted training based on job function = role-based security training."
 },
 {
  "id": 105,
  "obj": "5.2",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A risk analyst is conducting a Business Impact Analysis (BIA). They determine that the company's order processing system can be offline for a maximum of 4 hours before causing unacceptable financial damage, and must not lose more than 1 hour of transaction data. Which terms describe these requirements respectively?",
  "opts": [
   "A. RPO = 4 hours, RTO = 1 hour",
   "B. RTO = 4 hours, RPO = 1 hour",
   "C. MTTR = 4 hours, MTBF = 1 hour",
   "D. SLA = 4 hours, SLE = 1 hour"
  ],
  "correct": 1,
  "exp": "RTO (Recovery Time Objective) = maximum acceptable downtime — how long the system can be offline. Here: 4 hours. RPO (Recovery Point Objective) = maximum acceptable data loss — how far back you can restore to. Here: 1 hour. So if the system fails at 3 PM, it must be back online by 7 PM (RTO) and you cannot lose more than 1 hour of transactions (RPO). MTTR (Mean Time to Repair) is the average actual repair time — a measurement, not an objective. MTBF (Mean Time Between Failures) measures reliability. SLA is a vendor agreement. SLE is a risk calculation. RTO = downtime limit, RPO = data loss limit."
 },
 {
  "id": 106,
  "obj": "5.1",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company's security policy states: \"All employees must complete annual security awareness training.\" The IT security team creates a document specifying that the training must cover phishing, password management, and data handling, must be completed by December 31st each year, and completion must be tracked in the LMS. What type of document is this?",
  "opts": [
   "A. Security policy",
   "B. Security standard",
   "C. Security procedure",
   "D. Security guideline"
  ],
  "correct": 1,
  "exp": "The hierarchy: Policy (what + why, high-level) → Standard (mandatory specifics — what exactly must be done) → Procedure (step-by-step how) → Guideline (recommended, non-mandatory). The original \"all employees must complete annual training\" = policy. The document specifying WHAT the training must cover, WHEN it must be done, and HOW completion is tracked = standard — it defines the specific, mandatory requirements that implement the policy. A procedure would describe the step-by-step process for actually enrolling, delivering, and recording training. A guideline would suggest best practices but not mandate them. The specifics of what, when, how = standard."
 },
 {
  "id": 107,
  "obj": "5.3",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company processes EU customer data. A user emails the company requesting a copy of all personal data the company holds about them. The company's legal team says they must respond within 30 days. Which GDPR right is the user exercising?",
  "opts": [
   "A. Right to erasure",
   "B. Right to portability",
   "C. Right of access (Subject Access Request)",
   "D. Right to rectification"
  ],
  "correct": 2,
  "exp": "GDPR Article 15 — Right of Access (Subject Access Request / SAR): individuals can request confirmation of whether their data is being processed and a copy of that data. Organisations must respond within 30 days (one calendar month). Right to erasure (Article 17): request deletion of personal data. Right to portability (Article 20): receive data in a machine-readable format to transfer to another provider. Right to rectification (Article 16): correct inaccurate personal data. The key here: the user wants to SEE what data is held = Right of Access / SAR. Erasure = delete it. Portability = export it in a usable format. Rectification = fix it."
 },
 {
  "id": 108,
  "obj": "5.2",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation calculates: Asset Value = $200,000. Exposure Factor = 40%. Annual Rate of Occurrence = 0.5. What is the ALE, and should they implement a control costing $35,000 per year?",
  "opts": [
   "A. ALE = $80,000 — yes, implement the $35,000 control",
   "B. ALE = $40,000 — yes, implement the $35,000 control",
   "C. ALE = $100,000 — yes, implement the $35,000 control",
   "D. ALE = $40,000 — no, the control costs less than ALE so accept the risk"
  ],
  "correct": 1,
  "exp": "SLE = Asset Value × Exposure Factor = $200,000 × 0.40 = $80,000. ALE = SLE × ARO = $80,000 × 0.5 = $40,000. The ALE is $40,000/year. The control costs $35,000/year. Since $35,000 < $40,000 (control cost < ALE), the control IS cost-effective — implement it. The rule: if control cost < ALE → implement. If control cost > ALE → accept the risk instead. Here the control saves $5,000/year net ($40,000 ALE - $35,000 control cost). Option D has the correct ALE but wrong conclusion — when control cost is LESS than ALE you SHOULD implement, not accept."
 },
 {
  "id": 109,
  "obj": "5.6",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company hires a managed security service provider (MSSP) to monitor their SIEM 24/7. The contract specifies that the MSSP must respond to critical alerts within 15 minutes, provide monthly reports, and maintain 99.9% monitoring uptime. Which document type contains these requirements?",
  "opts": [
   "A. Non-Disclosure Agreement (NDA)",
   "B. Business Associate Agreement (BAA)",
   "C. Service Level Agreement (SLA)",
   "D. Memorandum of Understanding (MOU)"
  ],
  "correct": 2,
  "exp": "An SLA (Service Level Agreement) defines measurable service delivery commitments between a service provider and customer. Response times (15 min for critical alerts), reporting frequency (monthly), and uptime guarantees (99.9%) are all SLA metrics. NDAs govern confidentiality of shared information — important here but not what defines response times. BAAs specifically govern handling of PHI under HIPAA — not applicable for a general MSSP contract. MOUs document mutual intent/understanding — typically not legally binding and don't define specific performance metrics. Measurable performance commitments = SLA."
 },
 {
  "id": 110,
  "obj": "5.2",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security manager reviews the organisation's risk register and finds a risk that was accepted 18 months ago because the control cost exceeded the ALE. Since then, the threat landscape has changed significantly and the likelihood of exploitation has tripled. What should the manager do?",
  "opts": [
   "A. Nothing — the risk was formally accepted so no further action is required",
   "B. Reassess the risk with updated values and determine if the original acceptance decision is still valid",
   "C. Immediately implement controls regardless of cost",
   "D. Transfer the risk to cyber insurance"
  ],
  "correct": 1,
  "exp": "Risk acceptance is not permanent — it must be revisited when circumstances change. If the ARO triples, the ALE triples (ALE = SLE × ARO). What was previously an accepted risk where control cost > ALE may now have control cost < new ALE, making controls cost-effective. Risk management is a continuous process, not a one-time decision. A risk register must be kept current and re-evaluated when: the threat landscape changes, new vulnerabilities are discovered, asset value changes, or business context changes. Immediately implementing regardless of cost (C) ignores the economic analysis. Insurance (D) is one option but shouldn't be chosen without reassessing first."
 },
 {
  "id": 111,
  "obj": "5.3",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An auditor is reviewing a company's compliance with PCI-DSS. They find that credit card numbers are stored in a database with only the last four digits visible to customer service staff, with the rest replaced by asterisks in the interface. The full PAN is stored encrypted in the database. Which data protection technique is shown to customer service staff?",
  "opts": [
   "A. Tokenisation",
   "B. Encryption",
   "C. Data masking",
   "D. Hashing"
  ],
  "correct": 2,
  "exp": "Data masking obscures sensitive data for display purposes — showing only partial data (last 4 digits) while hiding the rest (asterisks). The underlying stored data is still the full PAN (encrypted), but the display layer masks most of it. This protects against shoulder surfing and limits exposure for customer service staff who only need to verify card identity, not the full number. Tokenisation replaces the PAN with a random token — the stored value is the token, not the masked PAN. Encryption protects the stored data (full PAN in this case). Hashing is one-way and can't be reversed for legitimate transactions. The asterisk display = data masking."
 },
 {
  "id": 112,
  "obj": "5.3",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company discovers that an employee has been storing customer PII on their personal Google Drive account for convenience. The company has a data classification policy but no formal policy governing acceptable use of personal cloud storage. Which gap does this reveal?",
  "opts": [
   "A. The data classification policy needs to be stronger",
   "B. The company lacks an AUP covering personal cloud storage use",
   "C. The employee should be charged with data theft",
   "D. Google Drive should be blocked at the network level"
  ],
  "correct": 1,
  "exp": "An Acceptable Use Policy (AUP) defines what employees can and cannot do with company data and IT resources — including whether personal cloud storage can be used for work data. The absence of this policy means the employee may have violated the spirit of data protection but has no clear written rule to point to. Data classification policy tells you how sensitive the data is — but doesn't tell employees what systems they can use. The AUP specifically governs employee behaviour with data and systems. Blocking Google Drive (D) is a technical compensating control but doesn't address the policy gap. The root cause: missing AUP coverage of cloud storage."
 },
 {
  "id": 113,
  "obj": "5.2",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A CISO is presenting to the board after a significant security incident. The board asks what the organisation's plan is to maintain critical business functions if the primary data centre becomes unavailable for an extended period. Which plan should the CISO reference?",
  "opts": [
   "A. Incident Response Plan (IRP)",
   "B. Disaster Recovery Plan (DRP)",
   "C. Business Continuity Plan (BCP)",
   "D. Communication Plan"
  ],
  "correct": 2,
  "exp": "BCP (Business Continuity Plan) addresses how the organisation maintains BUSINESS FUNCTIONS during and after a disruption — it covers people, processes, and technology from a business perspective. DRP (Disaster Recovery Plan) is the technical subset of BCP focused specifically on recovering IT systems and infrastructure. The board question is about business continuity (maintaining functions) not just IT recovery. In practice: BCP = business-level continuity | DRP = IT recovery specifics. IRP covers security incident response — a more focused, security-specific plan. The board-level conversation about business functions during extended outage = BCP."
 },
 {
  "id": 114,
  "obj": "5.5",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company undergoes a SOC 2 Type II audit. Unlike a SOC 2 Type I audit, what does the Type II report specifically evaluate?",
  "opts": [
   "A. Whether security controls are designed correctly at a single point in time",
   "B. Whether security controls operated effectively over a period of time (typically 6-12 months)",
   "C. Whether the company is compliant with PCI-DSS requirements",
   "D. Whether the company's source code is free from vulnerabilities"
  ],
  "correct": 1,
  "exp": "SOC 2 Type I evaluates whether controls are suitably designed at a specific point in time — a snapshot. SOC 2 Type II evaluates whether those controls actually operated effectively over a defined period (typically 6 or 12 months) — proving consistent operation, not just correct design. Type II is significantly more valuable to customers and partners because it demonstrates sustained performance. PCI-DSS is a separate compliance framework. Source code review is a different assessment type. The Type I vs Type II distinction (design vs operational effectiveness over time) is directly tested on Security+."
 },
 {
  "id": 115,
  "obj": "2.2",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An employee in accounts payable receives an email appearing to be from the CFO, sent from <code>cfo@company-corp.com</code> (not the legitimate <code>cfo@company.com</code>). The email requests an urgent wire transfer of $120,000 to a new supplier. What type of attack is this and what process failure enabled it?",
  "opts": [
   "A. Phishing — failure of email spam filters",
   "B. Business Email Compromise / whaling — failure of wire transfer verification procedures",
   "C. Vishing — failure of phone authentication controls",
   "D. Spear phishing — failure of security awareness training only"
  ],
  "correct": 1,
  "exp": "BEC (Business Email Compromise) impersonates executives to authorise fraudulent financial transactions. This is also whaling (targeting/impersonating C-level executives). The process failure: legitimate organisations require out-of-band verification for any wire transfer request — a phone call to a known number (not one in the email), dual approval, or a callback procedure. Relying solely on email for financial authorisation is the control gap BEC exploits. Spam filters catching lookalike domains (A) helps but isn't the primary control failure. The channel is email not voice (rules out vishing). Security awareness (D) is part of the solution but the primary failure is missing process controls around financial transfers."
 },
 {
  "id": 116,
  "obj": "5.3",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company processes health records for Australian patients. A security consultant advises that the data must remain stored on servers physically located within Australia and cannot be transferred to overseas cloud regions. Which data governance concept does this reflect?",
  "opts": [
   "A. Data minimisation",
   "B. Data sovereignty and residency requirements",
   "C. Data retention policy",
   "D. Data classification"
  ],
  "correct": 1,
  "exp": "Data sovereignty refers to the concept that data is subject to the laws of the country where it is physically stored or collected. Data residency is the requirement that data must be stored in a specific geographic location. Australia's Privacy Act and sector-specific regulations (like My Health Records Act) impose data residency requirements on certain types of data. This is why selecting cloud regions matters — AWS Sydney vs AWS US East have different legal implications for Australian health data. Data minimisation limits collection volume. Data retention governs how long data is kept. Data classification labels sensitivity levels. Geographic storage requirements = data sovereignty/residency."
 },
 {
  "id": 117,
  "obj": "5.2",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A penetration testing firm completes an engagement and submits a report with findings ranked Critical, High, Medium, and Low. The security manager wants to address the findings in order of business impact rather than just technical severity. Which risk assessment approach does this represent?",
  "opts": [
   "A. Quantitative risk assessment — calculating exact dollar values for each finding",
   "B. Qualitative risk assessment — ranking by likelihood and impact using descriptive scales",
   "C. Threat modelling — mapping findings to MITRE ATT&CK",
   "D. Vulnerability assessment — automated scanning of known CVEs"
  ],
  "correct": 1,
  "exp": "Qualitative risk assessment uses descriptive scales (Critical/High/Medium/Low) and relative rankings rather than exact dollar calculations. It combines likelihood and impact judgements to prioritise risks. This is appropriate when exact values are hard to calculate or when a quick prioritisation decision is needed. Quantitative risk assessment uses numerical values (SLE, ALE, ARO) — more precise but more time-intensive. The pen test report uses qualitative ratings. The manager wants to further contextualise by business impact — still qualitative (which systems are most critical to the business). Threat modelling maps attack paths. Vulnerability assessment finds technical weaknesses."
 },
 {
  "id": 118,
  "obj": "5.4",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An employee is arrested for fraud. Law enforcement requests that the company preserve all emails, files, and communications related to the employee for potential legal proceedings. The IT team must not delete or alter this data, even under the normal data retention schedule. What is this preservation requirement called?",
  "opts": [
   "A. Chain of custody",
   "B. Data retention policy",
   "C. Legal hold",
   "D. Evidence preservation order"
  ],
  "correct": 2,
  "exp": "A legal hold (litigation hold) is a directive to preserve all potentially relevant information when litigation, investigation, or regulatory action is anticipated. It suspends the normal data retention/deletion schedule for affected data. Failure to comply can result in spoliation of evidence — destruction of evidence that was known to be relevant, which carries severe legal consequences. Chain of custody tracks who handled evidence. A data retention policy governs normal retention schedules. Evidence preservation order is not a standard term — legal hold is the CompTIA-tested term. Legal holds are typically issued by legal counsel when litigation is anticipated or initiated."
 },
 {
  "id": 119,
  "obj": "5.6",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security awareness programme sends monthly simulated phishing emails to all employees. Employees who click the link are automatically enrolled in additional training. After 6 months, the click rate has dropped from 22% to 6%. Which metric demonstrates the programme's effectiveness?",
  "opts": [
   "A. The number of phishing simulations sent",
   "B. The reduction in phishing simulation click rate over time",
   "C. The number of employees enrolled in additional training",
   "D. The cost per employee of the awareness programme"
  ],
  "correct": 1,
  "exp": "Security awareness programme effectiveness is measured by behavioural change — the reduction in click rate from 22% to 6% demonstrates that employees are actually making better security decisions, which is the goal. The number of simulations sent (A) measures activity, not outcomes. Additional training enrolments (C) measure an intermediate step — ideally you want this number to go down as fewer people click. Cost per employee (D) measures efficiency, not effectiveness. The click rate reduction is a direct measure of changed behaviour = programme effectiveness. This is also how organisations demonstrate ROI on security awareness training to management."
 },
 {
  "id": 120,
  "obj": "5.4",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization's policy states that firewall logs must be retained for 1 year, email archives for 7 years, and financial records for 10 years. After these periods, data must be securely destroyed using approved methods. What defines these timeframes and destruction requirements?",
  "opts": [
   "A. Legal hold directive",
   "B. Data retention policy",
   "C. Data classification scheme",
   "D. Acceptable use policy"
  ],
  "correct": 1,
  "exp": "A data retention policy defines how long different categories of data must be stored and when they must be destroyed. It ensures compliance with regulations and reduces liability from holding data longer than necessary. A legal hold (A) is an emergency preservation directive that overrides normal retention when litigation is anticipated. A data classification scheme (C) labels data by sensitivity (Public, Confidential, etc.) but does not define retention timeframes. An acceptable use policy (D) governs how employees may use IT resources."
 },
 {
  "id": 72,
  "obj": "5.5",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization wants to test its incident response plan but cannot afford any disruption to production systems. Participants sit in a conference room and verbally walk through a ransomware scenario, discussing their decisions at each stage without activating any systems or failovers. Which exercise type is this?",
  "opts": [
   "A. Full-scale simulation",
   "B. Tabletop exercise",
   "C. Parallel processing test",
   "D. Failover test"
  ],
  "correct": 1,
  "exp": "A tabletop exercise is a discussion-based walkthrough where stakeholders talk through a scenario without actually executing any technical actions or affecting production systems. It is low-cost and low-risk. A full-scale simulation (A) activates actual systems, personnel, and procedures — disrupting normal operations. A parallel processing test (C) involves running backup systems alongside production to verify functionality. A failover test (D) actually switches operations to a backup site. The key clue is 'verbally walk through' with 'no disruption to production.'"
 },
 {
  "id": 121,
  "obj": "5.6",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company is assessing a new cloud provider. The security team sends a questionnaire asking about the provider's security controls, certifications, data handling practices, and incident response procedures. Which third-party risk management activity is this?",
  "opts": [
   "A. Penetration testing the cloud provider",
   "B. Vendor due diligence assessment",
   "C. Conducting an internal audit",
   "D. Threat modelling"
  ],
  "correct": 1,
  "exp": "Vendor due diligence is the process of evaluating a third party's security posture before entering a business relationship. Sending a questionnaire (often based on CSA CAIQ, SIG, or custom frameworks) to assess controls, certifications (SOC 2, ISO 27001), data handling, and IR procedures is standard due diligence. This happens BEFORE signing the contract. Ongoing assessments may include right-to-audit clauses, annual questionnaires, and reviewing certification renewals. Penetration testing a cloud provider without authorisation is illegal. Internal audits assess your own organisation. Threat modelling identifies attack paths against your own systems. Questionnaire-based evaluation of a third party = vendor due diligence."
 },
 {
  "id": 123,
  "obj": "5.3",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company's privacy policy states they collect email addresses to send order confirmations. A marketing team wants to use the same email addresses to send promotional newsletters. A privacy consultant flags this as a potential compliance issue. Which GDPR principle is at risk of being violated?",
  "opts": [
   "A. Data minimisation",
   "B. Storage limitation",
   "C. Purpose limitation",
   "D. Integrity and confidentiality"
  ],
  "correct": 2,
  "exp": "Purpose limitation (GDPR Article 5(1)(b)) requires that personal data collected for one specified purpose cannot be used for a different, incompatible purpose without new consent. Collecting emails for order confirmations (transactional) and then using them for marketing (promotional) are different purposes — using the same data for marketing without specific consent for marketing violates purpose limitation. Data minimisation is about collecting only necessary data. Storage limitation is about retention periods. Integrity and confidentiality is about security. The scenario: data collected for purpose A being used for purpose B without consent = purpose limitation violation."
 },
 {
  "id": 124,
  "obj": "5.4",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A new regulation requires the company to notify affected customers within 72 hours of discovering a data breach involving their personal data. Which document should contain this requirement and the procedures for meeting it?",
  "opts": [
   "A. Business Continuity Plan",
   "B. Data Retention Policy",
   "C. Incident Response Plan with a breach notification procedure",
   "D. Acceptable Use Policy"
  ],
  "correct": 2,
  "exp": "The Incident Response Plan (IRP) should include a breach notification procedure — defining: what constitutes a notifiable breach, who decides when to notify, how the 72-hour clock starts, who drafts and approves notifications, which regulators and customers must be notified, and what the notification must contain. GDPR Article 33 requires 72-hour notification to supervisory authorities. Article 34 requires notification to affected individuals for high-risk breaches. The BCP addresses business continuity during disruption. Data retention governs how long data is kept. The AUP governs employee behaviour. Breach notification = IR Plan procedure."
 },
 {
  "id": 125,
  "obj": "5.3",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security team is classifying data in the organisation. Customer credit card numbers, employee tax file numbers, and medical records are being labelled. Which classification level should these receive?",
  "opts": [
   "A. Public",
   "B. Internal use only",
   "C. Confidential / Sensitive",
   "D. Unclassified"
  ],
  "correct": 2,
  "exp": "Data classification assigns sensitivity labels to guide handling requirements. Common tiers (from least to most sensitive): Public → Internal/Private → Confidential/Sensitive → Restricted/Top Secret. Credit card numbers (PCI-DSS regulated), tax file numbers (PII), and medical records (PHI/health data) are all highly sensitive personal and regulated data — they belong at Confidential or higher, depending on the organisation's classification scheme. Public data is intentionally available to anyone. Internal/Private is non-sensitive business data. Unclassified is a government term for data not requiring classification protection. Regulated personal data (financial, health, identity) = Confidential/Sensitive minimum."
 },
 {
  "id": 126,
  "obj": "5.2",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation uses a risk matrix to categorise risks as Low, Medium, High, or Critical based on likelihood and impact ratings. No dollar values are calculated. Which type of risk assessment methodology is being used?",
  "opts": [
   "A. Quantitative",
   "B. Qualitative",
   "C. Semi-quantitative",
   "D. Threat-based"
  ],
  "correct": 1,
  "exp": "Qualitative risk assessment uses descriptive categories (Low/Medium/High/Critical) and subjective judgement rather than calculated dollar values. A risk matrix plotting likelihood vs impact is the classic qualitative tool. It's faster and easier than quantitative but less precise. Quantitative uses numerical calculations (SLE, ALE, ARO). Semi-quantitative combines both — assigns numerical scores to qualitative ratings (e.g., Likelihood: 1-5, Impact: 1-5, Risk Score = L × I) but doesn't produce actual dollar values. Threat-based is not a standard classification. Risk matrix with descriptive categories only = qualitative. The absence of dollar calculations is the defining indicator."
 },
 {
  "id": 127,
  "obj": "5.5",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A financial institution undergoes an annual external audit required by regulation. The auditors are independent of the organisation and their findings carry regulatory weight. Which type of audit is this?",
  "opts": [
   "A. Internal audit",
   "B. External audit",
   "C. Compliance self-assessment",
   "D. Vulnerability assessment"
  ],
  "correct": 1,
  "exp": "An external audit is performed by an independent third party outside the organisation. Key characteristics: independence, objectivity, regulatory/contractual standing. External audits carry more weight with regulators and business partners than internal audits because of the independence requirement. Internal audits are performed by the organisation's own audit team — valuable for continuous improvement but not independent. Compliance self-assessments are completed by the organisation themselves — useful for gap analysis but lack third-party verification. A vulnerability assessment is a technical security test, not a compliance audit. Independent + regulatory requirement + third party = external audit."
 },
 {
  "id": 159,
  "type": "mcq",
  "domain": 5,
  "obj": "5.1",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company's board of directors approves a new information security strategy and assigns the CISO authority to implement controls across all business units. The security team publishes updated policies and assigns compliance owners to each business unit. Which security governance element does this describe?",
  "opts": [
   "A. Risk assessment",
   "B. Security governance structure with executive sponsorship and defined accountability",
   "C. Incident response planning",
   "D. Business continuity planning"
  ],
  "correct": 1,
  "exp": "Security governance involves: executive oversight and tone from the top (board approval), assigned authority and accountability (CISO with mandate), defined roles and responsibilities (compliance owners in each BU), and formal policies. Without executive sponsorship and clear authority, security programmes fail because security teams lack the power to enforce controls. The board approval gives the security programme legitimacy and budget authority. Compliance owners create accountability at the business level. This is the governance structure that makes everything else function. Risk assessment identifies risks. IRP handles incidents. BCP handles disruptions. Governance = the overarching structure."
 },
 {
  "id": 160,
  "type": "mcq",
  "domain": 5,
  "obj": "5.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A risk analyst calculates ALE = $120,000 for a database server breach risk. The team evaluates three control options: Control A costs $150,000/year, Control B costs $80,000/year and reduces ALE by 90%, Control C costs $30,000/year and reduces ALE by 40%. Which control provides the BEST return on security investment?",
  "opts": [
   "A. Control A — most comprehensive protection",
   "B. Control B — saves $28,000/year net",
   "C. Control C — saves $18,000/year net",
   "D. Accept the risk — all controls cost more than they save"
  ],
  "correct": 1,
  "exp": "Calculate net benefit for each: Control A: $120k ALE avoided - $150k cost = -$30k/year (negative ROI, not worth it). Control B: ($120k × 90% = $108k ALE reduced) - $80k cost = +$28k/year savings. Control C: ($120k × 40% = $48k ALE reduced) - $30k cost = +$18k/year savings. Control B provides the highest net benefit ($28k > $18k). This is how security investment decisions are made quantitatively — not just \"does it reduce risk\" but \"what is the net financial benefit?\" Control A actually loses money. Accept risk (D) is wrong because Controls B and C both have positive ROI."
 },
 {
  "id": 161,
  "type": "mcq",
  "domain": 5,
  "obj": "5.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation performs a Business Impact Analysis (BIA) and determines that their e-commerce platform generates $50,000/hour in revenue. After a DDoS attack causes 6 hours of downtime, finance calculates the loss. What additional BIA metric should have been identified BEFORE the attack to set recovery investment levels?",
  "opts": [
   "A. ARO — Annual Rate of Occurrence",
   "B. MTD — Maximum Tolerable Downtime",
   "C. SLE — Single Loss Expectancy only",
   "D. CVSS score of the vulnerability"
  ],
  "correct": 1,
  "exp": "MTD (Maximum Tolerable Downtime) — also called MTO (Maximum Tolerable Outage) or MTPD (Maximum Tolerable Period of Disruption) — is the maximum time a business function can be unavailable before causing unacceptable harm (regulatory, financial, reputational). MTD drives investment in RTO targets: your recovery capability must achieve RTO ≤ MTD. For $50k/hour revenue, MTD might be 2 hours — justifying significant DR investment. ARO is for risk calculations. SLE is the per-incident financial loss (which equals $300k in this scenario — 6 hours × $50k). CVSS is a vulnerability severity score. MTD → sets the RTO requirement → drives DR architecture decisions."
 },
 {
  "id": 162,
  "type": "mcq",
  "domain": 5,
  "obj": "5.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company operates in Australia and the EU. They receive a request from Australian Federal Police for customer data related to a criminal investigation. The data includes EU citizens' personal data. Which competing compliance requirements must the legal team navigate?",
  "opts": [
   "A. PCI-DSS vs HIPAA — cardholder data vs health data",
   "B. Australian law enforcement obligations vs GDPR restrictions on data transfers and law enforcement access",
   "C. SOX reporting requirements vs GDPR",
   "D. ISO 27001 vs NIST CSF — competing frameworks"
  ],
  "correct": 1,
  "exp": "This is a real cross-jurisdictional conflict: Australian law enforcement can legally compel data disclosure under Australian law. However, GDPR Article 48 restricts transfers of EU personal data to non-EU law enforcement without proper legal instruments (mutual legal assistance treaty, adequacy decision, or derogation). Simply handing over EU personal data to Australian police without the correct legal basis violates GDPR. The company must involve legal counsel to determine the correct mechanism (MLAT, etc.). PCI/HIPAA is irrelevant here. SOX is financial reporting. ISO 27001 vs NIST CSF are both frameworks with no inherent conflict. Data sovereignty + law enforcement = genuine compliance tension."
 },
 {
  "id": 163,
  "type": "mcq",
  "domain": 5,
  "obj": "5.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An internal auditor reviews access logs and finds that a finance employee has been accessing HR payroll records for 3 months, despite payroll not being part of their job function. No approval exists for this access. Which control failed and what should happen?",
  "opts": [
   "A. The firewall failed — block all access to HR systems",
   "B. Access review / recertification failed — the employee's access should be revoked and the access history investigated",
   "C. The IDS failed — update signatures to detect this access",
   "D. Encryption failed — encrypt all payroll records"
  ],
  "correct": 1,
  "exp": "Access reviews (also called access recertification or access entitlement reviews) are periodic reviews where managers confirm that employees' access rights are still appropriate for their current role. This employee accumulated access beyond their job function (access creep or privilege creep) — it was never reviewed and revoked. The correct response: immediately revoke the access, investigate what was accessed and why (insider threat assessment), determine if data was misused, and fix the review process. A firewall wouldn't help — the employee had legitimate network access. IDS signatures wouldn't flag authorised-user access. Encryption protects data from outsiders, not authorised-but-inappropriate insiders. Recertification process failure = root cause."
 },
 {
  "id": 164,
  "type": "mcq",
  "domain": 5,
  "obj": "5.4",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A new regulation requires companies to report data breaches to the relevant authority within 72 hours of becoming aware. A company discovers a breach on Monday at 9 AM. By what time must they notify?",
  "opts": [
   "A. Thursday 9 AM — 72 business hours",
   "B. Thursday 9 AM — 72 calendar hours from discovery",
   "C. Immediately — as soon as discovery occurs",
   "D. Within 30 days — the 72-hour rule is for internal reporting only"
  ],
  "correct": 1,
  "exp": "GDPR Article 33 requires notification to the supervisory authority within 72 CALENDAR hours of becoming aware of a breach — not business hours, not working days. 72 calendar hours from Monday 9 AM = Thursday 9 AM. This is a hard deadline. If notification is not possible within 72 hours, a preliminary notification must be sent with reasons for the delay, followed by additional information as it becomes available. The 30-day rule (D) is sometimes confused with other regulations — GDPR is 72 hours. Australia's Notifiable Data Breaches scheme requires notification \"as soon as practicable\" after becoming aware. Always verify jurisdiction-specific requirements."
 },
 {
  "id": 165,
  "type": "mcq",
  "domain": 5,
  "obj": "5.5",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation wants to assess how resilient their security team is to real-world attacks. They hire a third party to conduct a long-duration engagement where attackers use physical access, social engineering, phishing, and technical exploitation — all without staff being told in advance. Which assessment type is this?",
  "opts": [
   "A. Vulnerability assessment",
   "B. Penetration test",
   "C. Red team exercise",
   "D. Tabletop exercise"
  ],
  "correct": 2,
  "exp": "A red team exercise is a comprehensive, adversarial simulation that mirrors a real threat actor using all attack vectors: physical (tailgating, badge cloning), social engineering (phishing, vishing, pretexting), and technical exploitation — over an extended period (weeks or months). Staff are NOT told in advance — the blue team (defenders) must detect and respond as if it's real. This tests the full security programme holistically. A vulnerability assessment finds technical weaknesses. A penetration test is scoped, time-limited, and typically technical only. A tabletop is a discussion exercise with no actual attacks. Red team = full adversarial simulation including all attack surfaces."
 },
 {
  "id": 166,
  "type": "mcq",
  "domain": 5,
  "obj": "5.5",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "After a red team exercise, the security team (blue team) and red team conduct a joint session to review what was done, what was detected, and what was missed. They then work together on improving detection and response capabilities. What is this joint session called?",
  "opts": [
   "A. Lessons learned",
   "B. Purple team exercise",
   "C. Post-incident review",
   "D. After-action report"
  ],
  "correct": 1,
  "exp": "A purple team exercise is the collaborative activity where red team (attackers) and blue team (defenders) work together — the red team shows exactly what they did and how, the blue team explains what they detected and missed, and together they improve detection rules, response procedures, and security controls. Purple teaming maximises the value of red team engagements by ensuring knowledge transfer to defenders. Without purple teaming, red team findings may not translate into improved detection capabilities. Lessons learned is the IR phase after a real incident. Post-incident review is similar but for actual incidents. After-action report is documentation. Joint red+blue improvement = purple team."
 },
 {
  "id": 167,
  "type": "mcq",
  "domain": 5,
  "obj": "5.6",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company wants to onboard 500 new employees with security awareness training. Rather than a single annual training module, they implement monthly phishing simulations, quarterly micro-trainings on specific topics, and role-specific deep dives for finance and IT staff. Which training principle does this implement?",
  "opts": [
   "A. Compliance-based training — completing the minimum required by regulation",
   "B. Continuous, role-based awareness training with practical simulations",
   "C. Technical security training for all staff",
   "D. One-time onboarding security orientation"
  ],
  "correct": 1,
  "exp": "Modern security awareness best practices: Continuous (not annual) — phishing simulations and micro-trainings reinforce learning throughout the year. Role-based — finance staff face BEC/wire fraud; IT staff face technical social engineering; executives face whaling. Practical (phishing simulations) — behaviour change comes from practice, not just watching videos. This approach is more effective than annual compliance-checkbox training because it maintains awareness year-round and tailors content to actual job-role risk. CompTIA SY0-701 specifically includes security awareness training under Domain 5.6 with emphasis on phishing campaigns, role-specific training, and behaviour change over compliance."
 },
 {
  "id": 175,
  "type": "mcq",
  "domain": 5,
  "obj": "5.3",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company that stores health records for US patients is also subject to GDPR because some patients are EU citizens. They receive a patient data access request that must be fulfilled within 30 days (GDPR) but a US law enforcement subpoena requires them to preserve and not modify the same records. How should the company handle this?",
  "opts": [
   "A. Comply with GDPR first — EU law takes priority",
   "B. Comply with the subpoena first — US law takes priority",
   "C. Involve legal counsel to navigate the conflicting requirements — both may need to be complied with through a carefully managed process",
   "D. Delete the records to avoid both obligations"
  ],
  "correct": 2,
  "exp": "Conflicting legal requirements from multiple jurisdictions require legal counsel, not a unilateral compliance decision. In practice: the legal hold (subpoena) likely pauses any modification or deletion of records — GDPR's right of access (viewing data) may still be fulfillable without violating the subpoena. However, the right to erasure under GDPR would likely be paused by the legal hold. Neither law automatically \"takes priority\" in isolation — the company's legal team must assess both obligations and find a path that complies with both to the extent possible, documenting all decisions. Deleting records under a subpoena is evidence tampering. This tests understanding of overlapping compliance frameworks."
 },
 {
  "id": 179,
  "type": "mcq",
  "domain": 5,
  "obj": "5.2",
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "During a BIA, a team identifies that their Customer Relationship Management (CRM) system supports sales operations generating $200,000/day. The system has a current RTO of 48 hours (based on existing DR). The BIA determines the MTD is 8 hours. What does this finding indicate?",
  "opts": [
   "A. The current DR solution exceeds requirements — no changes needed",
   "B. The current RTO (48 hours) exceeds the MTD (8 hours) — the DR solution must be significantly improved",
   "C. The CRM is not a critical system since the MTD is only 8 hours",
   "D. The MTD should be increased to match the current RTO"
  ],
  "correct": 1,
  "exp": "RTO must be ≤ MTD. Here: RTO = 48 hours > MTD = 8 hours. This means the current recovery capability would take 48 hours to restore, but the business can only tolerate 8 hours of downtime before unacceptable harm. The gap is 40 hours — the DR solution is dangerously inadequate for this system's criticality. The BIA finding drives a requirement to reduce RTO from 48h to ≤8h — likely requiring: warm or hot site, more frequent backups (reducing RPO), faster restoration procedures. Increasing the MTD (D) to match the RTO is backwards — you can't change business tolerance to match IT capability; you must change IT capability to meet business need."
 },
 {
  "id": 303,
  "obj": "5.2",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security manager calculates that a server has an ALE of $10,000. After implementing a new firewall (costing $2,000/year), the ALE is reduced to $3,000. What is the remaining $3,000 risk called?",
  "opts": [
   "A. Inherent risk",
   "B. Residual risk",
   "C. Transferred risk",
   "D. Avoided risk"
  ],
  "correct": 1,
  "exp": "Residual risk is the risk that remains after security controls have been implemented. Inherent risk (A) is the risk level before any controls. Transferred risk (C) is risk moved to a third party (like insurance). Avoided risk (D) is risk eliminated by stopping the activity."
 },
 {
  "id": 304,
  "obj": "5.3",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Under the GDPR, a cloud service provider that stores and processes data on behalf of a client organization is classified as which of the following?",
  "opts": [
   "A. Data Controller",
   "B. Data Subject",
   "C. Data Processor",
   "D. Data Steward"
  ],
  "correct": 2,
  "exp": "The Data Processor is the entity that processes personal data on behalf of the Data Controller (the organization that determines the purpose and means of processing). The Data Subject (B) is the individual the data belongs to. A Data Steward (D) is a role responsible for data quality."
 },
 {
  "id": 305,
  "obj": "5.4",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A SaaS company wants to publicly display a trust seal on their marketing website demonstrating they have passed a security audit, without revealing detailed control descriptions or testing results to competitors. Which report type is appropriate?",
  "opts": [
   "A. SOC 2 Type I",
   "B. SOC 2 Type II",
   "C. SOC 3",
   "D. SOC 1"
  ],
  "correct": 2,
  "exp": "A SOC 3 report is a general-use, publicly distributable summary that confirms an organization has passed a SOC 2 audit without disclosing detailed control descriptions or test results. SOC 2 Type I (A) and Type II (B) reports contain detailed control information and are restricted-use — shared only under NDA with specific parties. SOC 1 (D) focuses on financial controls relevant to financial statement audits, not general security trust seals. SOC 3 is designed specifically for public-facing assurance."
 },
 {
  "id": 306,
  "obj": "5.6",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "After implementing a security awareness program, the security team notices that the number of suspicious emails reported by employees via the phishing report button increased from 12 to 89 per month, while the phishing click rate remained roughly the same. What does the increase in reporting BEST indicate?",
  "opts": [
   "A. The training has failed because the click rate did not improve",
   "B. Employees are more vigilant and actively reporting threats — improved security culture",
   "C. The phishing simulations are too easy and should be made harder",
   "D. The reporting button is generating false positives"
  ],
  "correct": 1,
  "exp": "An increase in phishing report rate is a strong positive indicator of security culture — it means employees are more aware and engaged, actively flagging suspicious content rather than ignoring it. The click rate remaining stable (A) does not mean failure; reporting rate is often a better culture metric than click rate alone. The increase in reports is not necessarily because simulations are too easy (C) — employees are reporting real suspicious emails, not just simulations. A reporting increase is not inherently false positives (D) — it reflects improved vigilance."
 },
 {
  "id": 307,
  "obj": "5.5",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Following an external compliance audit, the auditors identify a 'finding' where several users had access to files they did not need for their roles. The organization is required to document how they will fix this. What is this documentation called?",
  "opts": [
   "A. Rules of Engagement",
   "B. Corrective Action Plan (CAP)",
   "C. Gap Analysis",
   "D. Business Impact Analysis"
  ],
  "correct": 1,
  "exp": "A Corrective Action Plan (CAP) or remediation plan is a formal document that outlines the steps an organization will take to address deficiencies identified during an audit. Rules of Engagement (A) are for pen testing."
 },
 {
  "id": 331,
  "obj": "5.2",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A risk analyst calculates that a specific server has a 20% probability of failure per year and each failure costs $50,000 in damages. They calculate an Annual Loss Expectancy (ALE) of $10,000. Which risk assessment methodology is being used?",
  "opts": [
   "A. Qualitative",
   "B. Quantitative",
   "C. Ad hoc",
   "D. Subjective"
  ],
  "correct": 1,
  "exp": "Quantitative risk assessment uses measurable, objective data — probabilities and dollar values — to calculate metrics like SLE (Single Loss Expectancy), ARO (Annualized Rate of Occurrence), and ALE (SLE × ARO = $50,000 × 0.20 = $10,000). Qualitative (A) uses subjective scales (Low/Medium/High) and expert judgment without precise dollar figures. Ad hoc (C) and Subjective (D) are not standard CompTIA risk assessment categories."
 },
 {
  "id": 332,
  "obj": "5.3",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company is reviewing its compliance requirements for credit card processing. Which concept defines the specific systems and networks that are subject to PCI-DSS audit requirements?",
  "opts": [
   "A. Gap Analysis",
   "B. Scope",
   "C. Data residency",
   "D. Retention"
  ],
  "correct": 1,
  "exp": "Scope refers to the systems, people, and processes that handle sensitive data (like cardholder data) and are therefore subject to compliance regulations. Reducing scope (e.g., via segmentation) reduces the cost of audits."
 },
 {
  "id": 333,
  "obj": "5.4",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization's own audit team performs quarterly security assessments of internal controls. They have deep knowledge of the company's systems and culture. What is the PRIMARY advantage of this approach over hiring an external firm?",
  "opts": [
   "A. Greater independence and objectivity",
   "B. Deeper institutional knowledge and ability to perform more frequent assessments",
   "C. Results are more credible to regulators and investors",
   "D. No potential conflicts of interest"
  ],
  "correct": 1,
  "exp": "Internal auditors have deeper institutional knowledge — they understand the company's systems, culture, and history — enabling more contextual and frequent assessments. Greater independence (A) is actually an advantage of external audits, not internal. Results from internal audits are generally less credible to outside parties (C) because they lack independence. Internal auditors may face conflicts of interest (D) since they report within the organisation. External audits provide objectivity; internal audits provide depth and frequency."
 },
 {
  "id": 334,
  "obj": "5.6",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security team notices that completion rates for mandatory awareness training drop below 40% each quarter. They redesign the program to include competitive team challenges, point systems for reporting phishing, and monthly recognition for top performers. What behavioral technique is being applied?",
  "opts": [
   "A. Positive reinforcement",
   "B. Gamification",
   "C. Mandatory compliance",
   "D. Social engineering awareness"
  ],
  "correct": 1,
  "exp": "Gamification incorporates game-design elements — competition, points, leaderboards, rewards, and recognition — into non-game contexts like security training to boost engagement and participation. Positive reinforcement (A) is a related psychological concept (rewarding desired behaviour) but is broader and less specific than gamification as a design approach. Mandatory compliance (C) is what was already failing — forcing completion without engagement. Social engineering awareness (D) is a training topic, not a delivery technique. Gamification directly addresses the low completion problem by making participation intrinsically motivating."
 },
 {
  "id": 335,
  "obj": "5.1",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A cross-functional group of executives meets quarterly to align the information security program with the overall business strategy and approve major security budgets. What is this group called?",
  "opts": [
   "A. Incident Response Team",
   "B. Security Steering Committee",
   "C. Change Advisory Board",
   "D. Data Stewards"
  ],
  "correct": 1,
  "exp": "A Security Steering Committee consists of high-level stakeholders who provide governance and ensure security initiatives support business goals."
 },
 {
  "id": 376,
  "obj": "5.1",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Which framework provides a flexible 'Functions' based model (Identify, Protect, Detect, Respond, Recover) for organizations to manage and reduce cybersecurity risk?",
  "opts": [
   "A. ISO 27001",
   "B. NIST Cybersecurity Framework (CSF)",
   "C. PCI-DSS",
   "D. HIPAA"
  ],
  "correct": 1,
  "exp": "The NIST CSF core is organized around five (now six in version 2.0) Functions that provide a high-level, strategic view of the lifecycle of an organization's management of cybersecurity risk."
 },
 {
  "id": 377,
  "obj": "5.2",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization defines the maximum amount of risk they are willing to take on to achieve their business objectives. What is this called?",
  "opts": [
   "A. Risk Tolerance",
   "B. Risk Appetite",
   "C. Risk Mitigation",
   "D. Risk Assessment"
  ],
  "correct": 1,
  "exp": "Risk Appetite is the broad, high-level amount of risk an organization is willing to accept in pursuit of its mission. Risk Tolerance (A) is the more specific level of variation acceptable around a target."
 },
 {
  "id": 378,
  "obj": "5.3",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A former customer emails a company demanding that all their personal data — account information, purchase history, and marketing profiles — be permanently deleted from all systems. Which GDPR right is the customer exercising?",
  "opts": [
   "A. Right to data portability",
   "B. Right to erasure (right to be forgotten)",
   "C. Right to rectification",
   "D. Data Subject Access Request (DSAR)"
  ],
  "correct": 1,
  "exp": "The right to erasure (also called the right to be forgotten) under GDPR Article 17 allows individuals to request permanent deletion of their personal data when it is no longer necessary for the original purpose. Right to data portability (A) lets users request their data in a machine-readable format for transfer. Right to rectification (C) allows correction of inaccurate data. A DSAR (D) requests a copy of stored data — viewing, not deleting. The key word is 'permanently deleted,' pointing to erasure."
 },
 {
  "id": 379,
  "obj": "5.4",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "What is the PRIMARY advantage of having an external third party perform a security audit rather than the organization's own internal audit team?",
  "opts": [
   "A. The external audit is cheaper",
   "B. The external audit is more objective and independent",
   "C. The external audit happens faster",
   "D. External auditors have full access to all passwords"
  ],
  "correct": 1,
  "exp": "Independence and objectivity are the hallmarks of an external audit. External auditors are not influenced by the organization's internal politics or management pressure."
 },
 {
  "id": 380,
  "obj": "5.6",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization runs monthly phishing simulations. In January, 22% of employees clicked the link. By June, only 8% clicked. However, the number who REPORTED the email to security rose from 5% to 35%. Which metric BEST demonstrates improved security culture?",
  "opts": [
   "A. Click-through rate reduction",
   "B. Training completion percentage",
   "C. Phishing report rate increase",
   "D. Help desk ticket volume"
  ],
  "correct": 2,
  "exp": "The phishing report rate is the strongest indicator of security culture improvement because it shows employees are actively engaged — not just avoiding clicks, but proactively alerting the security team. Click-through rate reduction (A) shows improved awareness but is a passive metric (not clicking is not the same as reporting). Training completion (B) measures attendance, not behaviour. Help desk ticket volume (D) is unrelated to phishing awareness. CompTIA emphasises that reporting rate is a more meaningful culture metric than click rate alone."
 },
 {
  "id": 381,
  "obj": "5.2",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "During a BIA, the security team identifies which business processes are most critical and maps them to the underlying IT systems they depend on. What is this step called?",
  "opts": [
   "A. Risk Management",
   "B. Business Process Mapping / Dependency Analysis",
   "C. Data Minimization",
   "D. Gap Analysis"
  ],
  "correct": 1,
  "exp": "Dependency analysis involves identifying the relationships between business functions and the supporting infrastructure (servers, apps, networks) to understand the full impact of an outage."
 },
 {
  "id": 382,
  "obj": "5.3",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A dispute arises between the marketing and IT departments about who controls access to customer analytics data. The CISO proposes assigning a specific business unit leader as the person accountable for classification decisions, access approvals, and lifecycle management of that data. What role is being assigned?",
  "opts": [
   "A. Data custodian",
   "B. Data owner",
   "C. Data processor",
   "D. Privacy officer"
  ],
  "correct": 1,
  "exp": "The data owner is a senior business leader accountable for data classification, access decisions, and lifecycle management. They determine who can access data and under what conditions. A data custodian (A) implements the technical controls (backups, encryption) as directed by the owner — they manage data day-to-day but do not set policy. A data processor (C) handles data on behalf of a controller under GDPR — a third-party role. A privacy officer (D) oversees the organisation's overall privacy compliance, not individual data set ownership."
 },
 {
  "id": 383,
  "obj": "5.4",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security auditor produces two versions of their report: one with high-level summaries for the Board of Directors, and one with detailed technical findings for the engineering team. Why is this done?",
  "opts": [
   "A. To hide the severity of the findings from management",
   "B. To tailor the communication to the specific audience's needs and technical understanding",
   "C. To charge the client for two separate reports",
   "D. Because management is not allowed to see technical details"
  ],
  "correct": 1,
  "exp": "Reporting should always be tailored. Executives need to understand risk and business impact, while technical teams need specific details to remediate vulnerabilities."
 },
 {
  "id": 384,
  "obj": "5.1",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A business unit wants to use a legacy system that violates the organization's encryption policy. The CISO allows the system to run but requires a formal document signed by the business owner accepting the risk. What is this document called?",
  "opts": [
   "A. SLA",
   "B. Exception / Waiver",
   "C. NDA",
   "D. AUP"
  ],
  "correct": 1,
  "exp": "A policy exception (or waiver) is a formal approval to bypass a security policy for a specific time and reason, ensuring the risk is documented and accepted by management."
 },
 {
  "id": 385,
  "obj": "5.6",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization discovers that employees are susceptible to phone-based social engineering after several incidents. The security team wants to hire a third party to call employees pretending to be IT support and ask for credentials. What should be done FIRST before conducting this test?",
  "opts": [
   "A. Obtain written authorization from executive management",
   "B. Train all employees on vishing attacks before the test",
   "C. Install call recording software on all phones",
   "D. Update the acceptable use policy to prohibit sharing passwords"
  ],
  "correct": 0,
  "exp": "Written authorization from management is required before conducting any social engineering test — vishing simulations included. Without explicit approval, calling employees to solicit credentials could violate company policies or even laws. Training employees first (B) would defeat the purpose of testing their current awareness level. Installing recording software (C) raises legal and privacy concerns and is not the first step. Updating the AUP (D) is a policy improvement but does not authorize the testing. Always get formal written approval before any social engineering engagement."
 },
 {
  "id": 406,
  "obj": "5.2",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security manager maintains a living document that lists all identified risks, their likelihood, impact, and the person responsible for the mitigation. What is this document?",
  "opts": [
   "A. BIA",
   "B. Risk Register",
   "C. SLA",
   "D. Incident Log"
  ],
  "correct": 1,
  "exp": "The Risk Register is the central repository for all risk data. It tracks the lifecycle of each risk from identification to treatment."
 },
 {
  "id": 407,
  "obj": "5.3",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A hospital discovers that a database containing patient blood types and treatment dates has been leaked. Which type of data is this PRIMARILY classified as?",
  "opts": [
   "A. PII",
   "B. PHI",
   "C. PCI",
   "D. Public"
  ],
  "correct": 1,
  "exp": "Protected Health Information (PHI) is any health-related data that can be linked to an individual. It is governed by laws like HIPAA."
 },
 {
  "id": 408,
  "obj": "5.4",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company's own IT staff performs a self-assessment of the security controls on the network. What type of audit is this?",
  "opts": [
   "A. External Audit",
   "B. Internal Audit",
   "C. Type II SOC",
   "D. Penetration Test"
  ],
  "correct": 1,
  "exp": "Internal audits are performed by employees of the organization to identify gaps and improve security posture before an external audit occurs."
 },
 {
  "id": 409,
  "obj": "5.6",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "When measuring the success of a security awareness program, which metric is the MOST reliable indicator of improved security culture?",
  "opts": [
   "A. The number of people who failed the initial quiz",
   "B. An increase in the reporting rate of suspicious emails using the 'Report Phishing' button",
   "C. The total time spent watching training videos",
   "D. The cost of the training per user"
  ],
  "correct": 1,
  "exp": "While click-rates measure failure, the reporting rate measures 'proactive defense.' An increase in reports shows employees are engaged and acting as sensors for the SOC."
 },
 {
  "id": 410,
  "obj": "5.1",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A document that outlines the rules for how employees must use company-provided mobile devices and the consequences for misuse is called an:",
  "opts": [
   "A. SLA",
   "B. AUP",
   "C. MOU",
   "D. ISA"
  ],
  "correct": 1,
  "exp": "The Acceptable Use Policy (AUP) is a managerial control that defines the required behavior for users of organizational resources."
 },
 {
  "id": 451,
  "obj": "5.2",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Before implementing ANY security controls, a risk team evaluates the raw exposure of a new internet-facing application to threats like SQL injection, DDoS, and credential stuffing. What is this pre-control risk level called?",
  "opts": [
   "A. Residual risk",
   "B. Inherent risk",
   "C. Transferred risk",
   "D. Mitigated risk"
  ],
  "correct": 1,
  "exp": "Inherent risk is the level of risk that exists before any controls, safeguards, or mitigations are applied. It represents the raw, uncontrolled exposure. Residual risk (A) is what remains AFTER controls are in place. Transferred risk (C) is risk shifted to a third party (e.g., via insurance). Mitigated risk (D) is not a standard CompTIA term — risk mitigation is a strategy, not a risk level. The relationship: Inherent Risk - Controls = Residual Risk."
 },
 {
  "id": 452,
  "obj": "5.3",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Under the GDPR, which entity is responsible for deciding the 'purpose and means' of processing personal data?",
  "opts": [
   "A. Data Subject",
   "B. Data Controller",
   "C. Data Processor",
   "D. Data Steward"
  ],
  "correct": 1,
  "exp": "The Data Controller is the entity that determines why and how personal data is processed. The Processor (C) handles the data on behalf of the Controller."
 },
 {
  "id": 453,
  "obj": "5.4",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A startup needs to quickly demonstrate to potential enterprise customers that its security controls are properly designed, but the company has only been operating for two months and cannot show long-term operational data. Which SOC report can they obtain?",
  "opts": [
   "A. SOC 2 Type II",
   "B. SOC 2 Type I",
   "C. SOC 3",
   "D. SOC 1"
  ],
  "correct": 1,
  "exp": "SOC 2 Type I evaluates the design and implementation of security controls at a single point in time — it does not require a long observation period, making it suitable for new companies. SOC 2 Type II (A) requires controls to be tested over 6-12 months of operation, which the startup cannot yet provide. SOC 3 (C) is a public summary of a SOC 2 report — you must first have a SOC 2 to produce a SOC 3. SOC 1 (D) focuses on financial controls affecting customer financial statements, not general security controls."
 },
 {
  "id": 454,
  "obj": "5.6",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization provides general security awareness training to all staff annually, but the development team receives additional specialised training on secure coding practices, OWASP Top 10, and code review processes. What is this approach called?",
  "opts": [
   "A. Gamification",
   "B. Computer-based training (CBT)",
   "C. Role-based security training",
   "D. Mandatory compliance training"
  ],
  "correct": 2,
  "exp": "Role-based security training provides targeted, specialised content based on an employee's specific job function and the unique risks they face. Developers need secure coding skills, executives need BEC awareness, and HR needs data privacy training. Gamification (A) is a delivery technique, not a training scope approach. CBT (B) is a delivery format (computer-based), not a content strategy. Mandatory compliance training (D) covers baseline requirements for all employees, not the specialised additions described here."
 },
 {
  "id": 455,
  "obj": "5.5",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An audit finding states that all servers must run full-disk encryption. One legacy system cannot support encryption due to hardware limitations, but it processes only non-sensitive data and is on an isolated VLAN with additional monitoring. The team documents this and gets CISO sign-off. What is this?",
  "opts": [
   "A. Risk acceptance without documentation",
   "B. Policy exception with compensating controls",
   "C. Corrective action plan",
   "D. Non-compliance violation"
  ],
  "correct": 1,
  "exp": "A policy exception (or risk exception) is a formal, documented approval to deviate from a security policy for a specific system and reason, typically with compensating controls (VLAN isolation, additional monitoring) to reduce the risk. It requires sign-off from an appropriate authority (CISO). Risk acceptance without documentation (A) is improper — exceptions must be formally documented. A corrective action plan (C) outlines steps to fix a gap, not approve an exception. A non-compliance violation (D) implies no approval was obtained. The key elements are: formal documentation + compensating controls + management approval."
 },
 {
  "id": 456,
  "obj": "5.1",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security manager creates a chart showing who is Responsible, Accountable, Consulted, and Informed for each step of the incident response process. What is this document called?",
  "opts": [
   "A. Incident response playbook",
   "B. RACI matrix",
   "C. Risk register",
   "D. Service level agreement"
  ],
  "correct": 1,
  "exp": "A RACI matrix clearly defines roles and responsibilities for each task or process: Responsible (who does the work), Accountable (who is ultimately answerable), Consulted (who provides input), and Informed (who is kept updated). An incident response playbook (A) contains step-by-step procedures for handling incidents. A risk register (C) tracks identified risks and their mitigations. An SLA (D) defines performance expectations between parties. The RACI matrix is a governance tool that prevents confusion about ownership."
 },
 {
  "id": 457,
  "obj": "5.3",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A hospital (data controller) uses a cloud storage provider to host patient records. The cloud provider processes the data on behalf of the hospital but does not determine how or why it is processed. What is the cloud provider's role under GDPR?",
  "opts": [
   "A. Data controller",
   "B. Data processor",
   "C. Data owner",
   "D. Data subject"
  ],
  "correct": 1,
  "exp": "Under GDPR, a data processor handles personal data on behalf of a data controller — following the controller's instructions without independently determining the purpose or means of processing. The hospital is the data controller (A) because it decides why and how patient data is processed. Data owner (C) is an internal governance role, not a GDPR-defined term. Data subject (D) is the individual whose data is being processed — the patients. The controller-processor relationship is a fundamental GDPR concept tested on the SY0-701 exam."
 },
 {
  "id": 458,
  "obj": "5.2",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organization defines the specific level of risk variation it can accept around a particular objective. This is known as:",
  "opts": [
   "A. Risk Appetite",
   "B. Risk Tolerance",
   "C. Risk Assessment",
   "D. Risk Mitigation"
  ],
  "correct": 1,
  "exp": "Risk Tolerance is more granular and specific than Risk Appetite (A), which is the broad, high-level amount of risk an organization is willing to take."
 },
 {
  "id": 459,
  "obj": "5.4",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "During litigation, opposing counsel requests all emails between specific employees during a 6-month period. The legal team must search, filter, review, and produce responsive documents from the email archive in a defensible manner. What is this process called?",
  "opts": [
   "A. Legal hold",
   "B. E-discovery",
   "C. Data retention",
   "D. Chain of custody"
  ],
  "correct": 1,
  "exp": "E-discovery (electronic discovery) is the process of identifying, collecting, reviewing, and producing electronically stored information (ESI) in response to legal requests or litigation. A legal hold (A) is the preservation directive that comes before e-discovery — it prevents data deletion but does not involve searching or producing documents. Data retention (C) defines normal storage timeframes, not litigation-specific production. Chain of custody (D) documents evidence handling and transfers. The e-discovery workflow: legal hold → identification → collection → review → production."
 },
 {
  "id": 501,
  "obj": "5.1",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A document that provides non-mandatory recommendations and best practices for implementing a security policy is called a:",
  "opts": [
   "A. Standard",
   "B. Guideline",
   "C. Procedure",
   "D. Baseline"
  ],
  "correct": 1,
  "exp": "Guidelines are non-mandatory suggestions. Standards (A) and Procedures (C) are mandatory."
 },
 {
  "id": 502,
  "obj": "5.2",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A board of directors issues a statement that the organization will aggressively pursue new markets and accept higher overall cybersecurity risk in exchange for faster innovation and time-to-market. What does this statement define?",
  "opts": [
   "A. Risk appetite",
   "B. Risk tolerance",
   "C. Risk register",
   "D. Risk mitigation strategy"
  ],
  "correct": 0,
  "exp": "Risk appetite is the broad, strategic level of risk an organization is willing to accept to achieve its business objectives — set at the board/executive level. Risk tolerance (B) is more granular — the acceptable variation around a specific objective (e.g., 5% downtime tolerance for the marketing site vs 0.01% for payments). A risk register (C) tracks individual risks, not strategic risk posture. A risk mitigation strategy (D) describes how to reduce specific risks. The key distinction: risk appetite is strategic and organisation-wide; risk tolerance is tactical and objective-specific."
 },
 {
  "id": 503,
  "obj": "5.3",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A user wants to switch from one cloud storage provider to another and requests that their data be exported in a structured, machine-readable format (such as CSV or JSON) so it can be imported by the new provider. Which GDPR right is being exercised?",
  "opts": [
   "A. Right to erasure",
   "B. Right to data portability",
   "C. Right to rectification",
   "D. Data Subject Access Request (DSAR)"
  ],
  "correct": 1,
  "exp": "The right to data portability (GDPR Article 20) allows individuals to receive their personal data in a structured, commonly used, machine-readable format and transmit it to another controller. Right to erasure (A) is about deletion, not export. Right to rectification (C) is about correcting inaccurate data. A DSAR (D) requests access to view stored data — portability goes further by requiring data in a transferable format. The key distinction: DSAR = right to see your data; portability = right to move your data to a competitor."
 },
 {
  "id": 504,
  "obj": "5.4",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company is evaluating a payroll processing vendor and needs assurance that the vendor's internal controls over financial reporting are properly designed and operating effectively. Customer financial data accuracy is the primary concern. Which report type is MOST appropriate?",
  "opts": [
   "A. SOC 1",
   "B. SOC 2 Type I",
   "C. SOC 2 Type II",
   "D. SOC 3"
  ],
  "correct": 0,
  "exp": "SOC 1 reports focus on internal controls that are relevant to the user entity's financial statements — specifically for service organizations that handle financial transactions like payroll processing. SOC 2 Type I (B) and Type II (C) evaluate security, availability, processing integrity, confidentiality, and privacy controls — broader security assessments, not financial reporting controls. SOC 3 (D) is a general-use public summary. When the primary concern is financial data accuracy and the vendor processes financial transactions, SOC 1 is the correct report."
 },
 {
  "id": 505,
  "obj": "5.5",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security team gathers in a conference room to walk through a hypothetical ransomware scenario and discuss how each department would respond. What is this?",
  "opts": [
   "A. Penetration Test",
   "B. Tabletop Exercise",
   "C. Vulnerability Scan",
   "D. Audit"
  ],
  "correct": 1,
  "exp": "A tabletop exercise is a discussion-based drill where stakeholders talk through an incident response plan."
 },
 {
  "id": 506,
  "obj": "5.6",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "What is the primary benefit of performing simulated phishing campaigns?",
  "opts": [
   "A. To identify technical vulnerabilities in the mail server",
   "B. To measure and improve employee behavioral response to phishing",
   "C. To block malicious emails automatically",
   "D. To fulfill an insurance requirement only"
  ],
  "correct": 1,
  "exp": "Phishing simulations are used to train employees and provide metrics on the organization's human security risk."
 },
 {
  "id": 507,
  "obj": "5.2",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company determines that the potential cost of a data breach could be $2 million. Rather than spending that amount on additional controls, they purchase a cyber insurance policy that covers breach costs including notification, forensics, and legal fees. Which risk strategy is this?",
  "opts": [
   "A. Risk mitigation",
   "B. Risk acceptance",
   "C. Risk avoidance",
   "D. Risk transference"
  ],
  "correct": 3,
  "exp": "Risk transference shifts the financial burden of a risk to a third party — typically through insurance or contractual agreements. The risk itself still exists, but the financial impact is borne by the insurer. Risk mitigation (A) reduces the likelihood or impact through controls. Risk acceptance (B) means taking no further action and absorbing the potential loss. Risk avoidance (C) eliminates the risk entirely by removing the activity or asset. Cyber insurance is the classic example of risk transference on the SY0-701 exam."
 },
 {
  "id": 508,
  "obj": "5.1",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "Who is primarily responsible for ensuring the security program aligns with business goals and reporting high-level security risks to the board of directors?",
  "opts": [
   "A. Security Analyst",
   "B. CISO (Chief Information Security Officer)",
   "C. Network Administrator",
   "D. Internal Auditor"
  ],
  "correct": 1,
  "exp": "The CISO is the senior executive responsible for the organization's information security strategy and board-level risk communication."
 },
 {
  "id": 1000,
  "obj": "5.1",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A multinational company adopts ISO 27001 as its primary security framework but also maps its controls to NIST SP 800-53 to satisfy US federal contract requirements. A junior analyst asks why the company maintains two frameworks simultaneously. Which answer BEST explains this approach?",
  "opts": [
   "A. It is unnecessary — one framework always supersedes another",
   "B. Different regulatory environments and contractual obligations may require demonstrating compliance with multiple frameworks, and control mapping reduces duplication of effort",
   "C. ISO 27001 and NIST 800-53 are identical, so there is no additional work involved",
   "D. Frameworks are optional and only used for marketing purposes"
  ],
  "correct": 1,
  "exp": "Organisations operating across jurisdictions or industries often must comply with multiple frameworks simultaneously. Control mapping (also called crosswalking) aligns overlapping controls across frameworks so that a single implemented control can satisfy multiple requirements, reducing duplication. ISO 27001 is internationally recognised, while NIST SP 800-53 is required for many US federal contracts. They are not identical but have significant overlap. Frameworks are not optional when contractually or regulatorily mandated. Maintaining dual compliance through mapping is a core governance strategy tested under SY0-701 objective 5.1."
 },
 {
  "id": 1001,
  "obj": "5.1",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A security team drafts a new policy requiring multi-factor authentication for all remote access. The policy is published on the company intranet but never formally approved by executive management. Six months later, several departments have not implemented MFA. What is the PRIMARY reason for this failure?",
  "opts": [
   "A. MFA technology is too complex to deploy",
   "B. The policy lacked executive sponsorship and formal approval, reducing its authority and enforceability",
   "C. Policies published on the intranet are automatically enforced",
   "D. The security team should have implemented MFA themselves without a policy"
  ],
  "correct": 1,
  "exp": "Policies require formal executive approval to carry organisational authority. Without executive sponsorship (tone from the top), business units may ignore or deprioritise security policies because there is no clear mandate or consequence for non-compliance. The governance hierarchy requires that policies be approved at the appropriate management level — typically C-suite or board — to give them weight. Publishing without approval makes a policy merely a suggestion. This is a foundational governance principle: authority flows from executive endorsement, not from document publication alone."
 },
 {
  "id": 1002,
  "obj": "5.1",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation creates a step-by-step document explaining exactly how a system administrator should harden a new Windows Server before placing it on the production network, including specific registry changes and service configurations. What type of governance document is this?",
  "opts": [
   "A. Policy",
   "B. Standard",
   "C. Procedure",
   "D. Guideline"
  ],
  "correct": 2,
  "exp": "A procedure is a detailed, step-by-step instruction document that describes exactly HOW to perform a specific task. It includes the precise actions, order of operations, and specific configurations. A policy states the high-level intent (what and why). A standard defines mandatory requirements (what must be achieved in measurable terms). A guideline offers non-mandatory recommendations. The scenario describes specific registry changes and service configurations in sequence — this is a procedure (sometimes called a Standard Operating Procedure or SOP). Policy → Standard → Procedure → Guideline is the governance document hierarchy."
 },
 {
  "id": 1003,
  "obj": "5.2",
  "type": "multi",
  "domain": 5,
  "badge": "Select TWO",
  "badgeClass": "multi-b",
  "stem": "A company is establishing its enterprise risk management programme. The CISO needs to create a risk register for all identified security risks. Which TWO elements are essential components of each entry in a risk register? (Select TWO)",
  "opts": [
   "A. The risk owner responsible for managing and monitoring the risk",
   "B. The vendor contract associated with each risk",
   "C. The current treatment status and planned mitigation actions",
   "D. The employee who first discovered the risk's full home address",
   "E. The exact CVE number for every risk entry"
  ],
  "correct": [0, 2],
  "exp": "A risk register entry must include: risk description, risk owner (who is accountable for managing it), likelihood, impact, risk rating, treatment strategy (accept/mitigate/transfer/avoid), current status of mitigation actions, and review dates. A risk owner (A) ensures accountability — without one, risks go unmanaged. Treatment status and planned actions (C) track the lifecycle of each risk from identification through resolution. Not every risk is vendor-related (B). Employee personal addresses (D) are irrelevant. Not all risks map to CVEs (E) — many are process, compliance, or strategic risks. The risk register is the central living document for enterprise risk management."
 },
 {
  "id": 1004,
  "obj": "5.2",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A hospital's risk management team decides to stop offering a patient portal feature that allows uploading medical images because the liability exposure from potential data breaches is too high and the feature generates minimal revenue. Which risk treatment strategy is this?",
  "opts": [
   "A. Risk acceptance",
   "B. Risk mitigation",
   "C. Risk avoidance",
   "D. Risk transference"
  ],
  "correct": 2,
  "exp": "Risk avoidance eliminates a risk by discontinuing the activity that creates it. By stopping the patient image upload feature entirely, the hospital removes the attack surface and liability associated with that specific data processing. This is appropriate when the risk outweighs the business benefit. Risk acceptance would mean keeping the feature and tolerating the exposure. Risk mitigation would mean adding controls (encryption, access controls) while continuing the feature. Risk transference would shift financial consequences to a third party (insurance). Ceasing the activity entirely = risk avoidance."
 },
 {
  "id": 1005,
  "obj": "5.2",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A manufacturing company performs a BIA and discovers that its industrial control system (ICS) for the assembly line has an MTBF of 2,200 hours and an MTTR of 8 hours. What is the approximate availability of this system?",
  "opts": [
   "A. 99.0%",
   "B. 99.64%",
   "C. 97.5%",
   "D. 95.0%"
  ],
  "correct": 1,
  "exp": "Availability = MTBF / (MTBF + MTTR) = 2200 / (2200 + 8) = 2200 / 2208 = 0.9964 = 99.64%. MTBF (Mean Time Between Failures) measures reliability — the average time the system operates before failing. MTTR (Mean Time to Repair) measures maintainability — the average time to restore the system after a failure. Together, these drive availability calculations that inform BIA decisions about whether the system meets business continuity requirements. If the required availability is 99.99%, this system falls short and requires redundancy improvements. Understanding MTBF, MTTR, and availability calculations is tested on Security+."
 },
 {
  "id": 1006,
  "obj": "5.3",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A retail company replaces stored credit card numbers in its loyalty programme database with randomly generated tokens. The actual card numbers are stored in a separate, highly secured token vault. Which data protection technique is being used?",
  "opts": [
   "A. Data masking",
   "B. Tokenisation",
   "C. Hashing",
   "D. Anonymisation"
  ],
  "correct": 1,
  "exp": "Tokenisation replaces sensitive data elements with non-sensitive substitutes (tokens) that have no exploitable value outside the token vault. The original data is stored separately in a secured vault, and the token maps back to the real value only through the vault. This is different from data masking, which obscures data for display but the original remains in place. Hashing is a one-way function that cannot be reversed to retrieve the original value. Anonymisation permanently removes identifying information so data cannot be linked back to individuals. Tokenisation is heavily used in PCI-DSS environments to reduce the scope of systems that handle actual cardholder data."
 },
 {
  "id": 1007,
  "obj": "5.3",
  "type": "multi",
  "domain": 5,
  "badge": "Select TWO",
  "badgeClass": "multi-b",
  "stem": "A healthcare organisation must comply with both HIPAA and state-level breach notification laws. Which TWO statements are TRUE about navigating overlapping compliance requirements? (Select TWO)",
  "opts": [
   "A. When state laws impose stricter requirements than HIPAA, the organisation must comply with the stricter state law",
   "B. HIPAA always overrides all state laws, so only federal requirements matter",
   "C. The organisation should maintain a compliance matrix mapping all applicable requirements to ensure no obligation is missed",
   "D. State breach notification laws only apply to non-healthcare organisations",
   "E. Organisations can choose whichever regulation is easiest to follow"
  ],
  "correct": [0, 2],
  "exp": "HIPAA sets a federal floor for healthcare data protection, but state laws can impose stricter requirements (shorter notification timelines, broader definitions of PHI, additional consumer rights). When state law is stricter, the organisation must meet the higher bar (A). A compliance matrix (C) maps all applicable regulations, frameworks, and contractual obligations to specific controls and processes, ensuring comprehensive coverage. HIPAA does not universally preempt state laws (B) — it only preempts when state law is less protective. State breach notification laws apply to all entities holding personal data, including healthcare (D). Organisations cannot cherry-pick regulations (E)."
 },
 {
  "id": 1008,
  "obj": "5.3",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company's data governance team assigns the role of Data Owner to the VP of Sales for all customer relationship data. The Data Owner then delegates daily management tasks to a database administrator. What role does the database administrator serve in this context?",
  "opts": [
   "A. Data Controller",
   "B. Data Subject",
   "C. Data Custodian",
   "D. Data Owner"
  ],
  "correct": 2,
  "exp": "The Data Custodian (also called Data Steward in some frameworks) is responsible for the day-to-day technical management of data — implementing backups, managing access controls, ensuring storage integrity, and applying the security requirements defined by the Data Owner. The Data Owner (VP of Sales) is the senior business leader accountable for determining classification, access policies, and acceptable use of the data. The Data Controller (GDPR term) determines the purpose and means of processing. The Data Subject is the individual the data pertains to. Owner = accountability and policy decisions; Custodian = technical implementation and daily management."
 },
 {
  "id": 1009,
  "obj": "5.4",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "During an employee onboarding process, a new hire in the finance department is required to sign a document agreeing not to share proprietary financial models or client lists with outside parties, both during and after employment. Which agreement is this?",
  "opts": [
   "A. Acceptable Use Policy (AUP)",
   "B. Service Level Agreement (SLA)",
   "C. Non-Disclosure Agreement (NDA)",
   "D. Memorandum of Understanding (MOU)"
  ],
  "correct": 2,
  "exp": "A Non-Disclosure Agreement (NDA) is a legally binding contract that prohibits sharing confidential or proprietary information with unauthorised parties. NDAs typically survive employment — meaning the obligation continues after the employee leaves the company. This protects trade secrets, client lists, financial models, and other intellectual property. An AUP governs how employees use company IT resources. An SLA defines service performance metrics between parties. An MOU documents mutual understanding but is typically non-binding. The key elements: confidentiality obligation + legal binding + survives employment = NDA."
 },
 {
  "id": 1010,
  "obj": "5.4",
  "type": "multi",
  "domain": 5,
  "badge": "Select TWO",
  "badgeClass": "multi-b",
  "stem": "An organisation is developing its employee onboarding security process for new hires. Which TWO activities should be included as part of secure onboarding? (Select TWO)",
  "opts": [
   "A. Conducting a background check appropriate to the sensitivity of the role",
   "B. Granting administrative access to all systems on the first day for convenience",
   "C. Requiring the employee to complete security awareness training before receiving system access",
   "D. Sharing the previous employee's credentials to save time on account setup",
   "E. Allowing the employee to choose their own access level based on perceived needs"
  ],
  "correct": [0, 2],
  "exp": "Secure onboarding includes: background checks (A) to verify trustworthiness — especially critical for roles with access to sensitive data, financial systems, or classified information. Security awareness training (C) before granting access ensures employees understand their security obligations, acceptable use policies, and threat recognition from day one. Granting admin access to everything (B) violates least privilege. Sharing credentials (D) violates individual accountability and creates audit trail gaps. Self-selected access (E) bypasses role-based access control. Onboarding controls: background check → training → least-privilege access provisioning → signed agreements (NDA, AUP)."
 },
 {
  "id": 1011,
  "obj": "5.4",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company's data retention policy states that financial records must be kept for 7 years to satisfy SOX requirements. An employee requests that the IT team delete old accounting databases from 5 years ago to free up storage. What should the IT team do?",
  "opts": [
   "A. Delete the databases immediately to comply with the employee's request",
   "B. Refuse the deletion because the data retention policy requires 7-year retention for financial records, and the data is only 5 years old",
   "C. Encrypt the databases instead of deleting them",
   "D. Move the databases to the employee's personal storage"
  ],
  "correct": 1,
  "exp": "Data retention policies define mandatory minimum retention periods based on regulatory, legal, and business requirements. SOX (Sarbanes-Oxley Act) requires retention of financial records for specific periods — typically 7 years for audit-related documents. Deleting data before the retention period expires violates the policy and potentially the law. The IT team must follow the documented retention schedule regardless of storage convenience requests. Encryption (C) does not address the retention requirement. Moving to personal storage (D) violates data governance and security controls. Retention policies override ad hoc deletion requests until the mandatory period expires."
 },
 {
  "id": 1012,
  "obj": "5.5",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation hires a penetration testing firm. Before the engagement begins, both parties sign a document defining the target systems, testing methods allowed, testing timeline, emergency contacts, and rules about data handling. What is this document called?",
  "opts": [
   "A. Non-Disclosure Agreement (NDA)",
   "B. Rules of Engagement (ROE)",
   "C. Service Level Agreement (SLA)",
   "D. Business Impact Analysis (BIA)"
  ],
  "correct": 1,
  "exp": "Rules of Engagement (ROE) define the scope, boundaries, and constraints of a penetration test or red team exercise. They specify: what systems can be tested (scope), what methods are permitted (e.g., no denial-of-service), testing windows (time constraints), escalation procedures if critical vulnerabilities are found, emergency contacts, and data handling requirements. ROE protect both parties — the tester knows what is authorised (avoiding legal issues), and the organisation knows testing will not disrupt critical operations. An NDA covers confidentiality. An SLA covers service metrics. A BIA assesses business impact of disruptions. Pen test boundaries = ROE."
 },
 {
  "id": 1013,
  "obj": "5.5",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation wants to identify whether its current security posture meets the requirements of the NIST Cybersecurity Framework. The security team compares their existing controls against NIST CSF requirements and documents where they fall short. What is this process called?",
  "opts": [
   "A. Penetration test",
   "B. Gap analysis",
   "C. Vulnerability scan",
   "D. Tabletop exercise"
  ],
  "correct": 1,
  "exp": "A gap analysis compares an organisation's current state (existing controls, policies, and processes) against a desired state (framework requirements, regulatory mandates, or best practices) and identifies the gaps — areas where requirements are not met. This drives a remediation roadmap to achieve compliance or maturity targets. A penetration test exploits vulnerabilities to demonstrate real-world impact. A vulnerability scan identifies technical weaknesses in systems. A tabletop exercise walks through incident scenarios. Gap analysis is typically the first step in a compliance or framework adoption programme and directly informs budgeting and project prioritisation."
 },
 {
  "id": 1014,
  "obj": "5.5",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company performs a full-scale disaster recovery test by actually failing over to their backup data centre, processing real transactions there for 4 hours, and then failing back to the primary site. Which type of DR test is this?",
  "opts": [
   "A. Tabletop exercise",
   "B. Simulation test",
   "C. Full interruption test (failover test)",
   "D. Checklist review"
  ],
  "correct": 2,
  "exp": "A full interruption test (also called a failover test or parallel/full-scale test) actually activates the DR plan by shutting down or switching away from the primary site and operating from the backup site with real workloads. This is the most thorough and realistic DR test but carries the highest risk — if the backup site fails, real business operations are impacted. A tabletop exercise is discussion-only. A simulation test mimics certain aspects but does not use production workloads. A checklist review simply verifies that DR documentation is current. DR test hierarchy by realism: checklist → tabletop → walkthrough → simulation → parallel → full interruption."
 },
 {
  "id": 1015,
  "obj": "5.6",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company's security awareness team notices that despite regular training, employees in the engineering department continue to reuse passwords across internal and external services. The team decides to implement a technical control that prevents password reuse alongside continued training. Which security principle does this combined approach demonstrate?",
  "opts": [
   "A. Defence in depth — layering administrative and technical controls",
   "B. Risk avoidance — eliminating the use of passwords entirely",
   "C. Risk transference — shifting password risk to a third party",
   "D. Separation of duties — splitting password management across teams"
  ],
  "correct": 0,
  "exp": "Defence in depth (layered security) combines multiple control types to protect against the same threat. Here, training is an administrative control (changing behaviour) and the password reuse prevention tool is a technical control (enforcing policy). Neither alone is sufficient — training changes awareness but some employees still fail; technical controls enforce compliance but employees may find workarounds. Together, they provide stronger protection. Risk avoidance would mean eliminating passwords entirely (e.g., passwordless authentication). Risk transference would shift financial consequences to another party. Separation of duties divides critical tasks across individuals. Administrative + technical controls together = defence in depth."
 },
 {
  "id": 1016,
  "obj": "5.6",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company recently suffered a social engineering attack where an attacker called the help desk, impersonated a senior executive, and convinced a technician to reset the executive's password. Which security awareness training improvement would MOST directly address this vulnerability?",
  "opts": [
   "A. Increasing the frequency of annual compliance training modules",
   "B. Implementing help desk identity verification procedures and training staff on pretexting attacks",
   "C. Deploying additional endpoint detection and response tools",
   "D. Requiring all employees to use longer passwords"
  ],
  "correct": 1,
  "exp": "Pretexting is a social engineering technique where an attacker creates a fabricated scenario (pretext) to manipulate someone into performing an action — in this case, impersonating an executive to trick the help desk. The direct remediation is: establishing mandatory identity verification procedures for password resets (callback to known number, verification questions, manager approval) AND training help desk staff specifically on pretexting and social engineering tactics. More frequent general training (A) does not target this specific gap. EDR tools (C) address endpoint threats, not social engineering. Longer passwords (D) do not prevent password reset social engineering. Targeted procedural + training fix = correct answer."
 },
 {
  "id": 1017,
  "obj": "5.6",
  "type": "multi",
  "domain": 5,
  "badge": "Select TWO",
  "badgeClass": "multi-b",
  "stem": "An organisation is evaluating potential risks introduced by a third-party software vendor that will have remote access to the company's internal network for maintenance purposes. Which TWO controls are MOST important for managing this third-party risk? (Select TWO)",
  "opts": [
   "A. Restricting vendor access to only the specific systems they need to maintain, with time-limited sessions",
   "B. Allowing the vendor to use their own unmanaged devices without restrictions",
   "C. Requiring the vendor to carry cyber liability insurance and agree to security requirements in the contract",
   "D. Granting the vendor permanent domain administrator credentials for convenience",
   "E. Sharing the company's internal security audit reports with the vendor"
  ],
  "correct": [0, 2],
  "exp": "Third-party risk management for vendors with network access requires: least-privilege access controls (A) — restricting access to only the systems needed, using time-limited and monitored sessions (jump boxes, PAM solutions, VPN segmentation). Contractual security requirements and insurance (C) ensure the vendor is contractually obligated to meet security standards, and cyber insurance provides financial recourse if the vendor causes a breach. Unmanaged devices (B) introduce uncontrolled endpoints into the network. Permanent admin credentials (D) violate least privilege and create a persistent threat vector. Sharing internal audit reports (E) is not a standard vendor management control and could expose internal weaknesses."
 },
 {
  "id": 1018,
  "obj": "5.2",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "A company's risk assessment team uses a heat map that plots risks on a grid with likelihood on the Y-axis and impact on the X-axis. A newly identified ransomware risk is placed in the upper-right quadrant. What does this placement indicate, and what action priority does it suggest?",
  "opts": [
   "A. Low likelihood, low impact — monitor only, no action required",
   "B. High likelihood, high impact — highest priority for immediate mitigation or escalation",
   "C. High likelihood, low impact — address when resources are available",
   "D. Low likelihood, high impact — transfer to insurance"
  ],
  "correct": 1,
  "exp": "A risk heat map visually represents risks based on likelihood and impact. The upper-right quadrant represents high likelihood AND high impact — the most critical risks requiring immediate attention, escalation to senior management, and priority resource allocation. These risks pose the greatest potential harm and are most likely to occur. Lower-left (low/low) risks can be monitored or accepted. Upper-left (high likelihood, low impact) may be managed with routine controls. Lower-right (low likelihood, high impact) are candidates for insurance or contingency planning. The heat map is a qualitative risk visualisation tool that helps prioritise risk treatment decisions."
 },
 {
  "id": 1019,
  "obj": "5.1",
  "type": "mcq",
  "domain": 5,
  "badge": "Multiple Choice",
  "badgeClass": "mcq-b",
  "stem": "An organisation establishes a minimum security configuration that all Windows workstations must meet before being connected to the corporate network — including specific patch levels, enabled firewall settings, and required endpoint protection. What type of governance document defines these minimum configurations?",
  "opts": [
   "A. Security policy",
   "B. Security baseline",
   "C. Security guideline",
   "D. Security procedure"
  ],
  "correct": 1,
  "exp": "A security baseline defines the minimum acceptable security configuration for a specific system type or technology platform. It is a reference point that all systems of that type must meet — specifying patch levels, hardened configurations, required services, and disabled features. Baselines are derived from standards and provide consistent, measurable configurations across the environment. A policy defines high-level intent. A guideline provides non-mandatory recommendations. A procedure describes step-by-step implementation. Baselines ensure uniformity — every Windows workstation meets the same minimum security posture. CIS Benchmarks and DISA STIGs are well-known sources for security baselines."
 }
    ];
