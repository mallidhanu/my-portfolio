const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

// Create standard A4 document with 45pt margins for perfect single-page layout
const doc = new PDFDocument({
  size: 'A4',
  margins: {
    top: 36,
    bottom: 36,
    left: 45,
    right: 45
  }
});

const outputPath = path.join(__dirname, '..', 'public', 'resume.pdf');
const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

// Injected standard PDF metadata to boost ATS searchability and ranking
doc.info['Title'] = 'Madiga Mallikarjuna - Resume';
doc.info['Author'] = 'Madiga Mallikarjuna';
doc.info['Subject'] = 'Java Full-Stack Developer Resume';
doc.info['Keywords'] = 'Java, Full-Stack, IoT, Spring Boot, Angular, Developer';

// Draw Header Name
doc.fillColor('#000000');
doc.font('Helvetica-Bold').fontSize(18).text('MADIGA MALLIKARJUNA', { align: 'left' });
doc.moveDown(0.2);

// Title
doc.font('Helvetica-Bold').fontSize(10.5).text('Java Full-Stack Developer | IoT Systems Architect');
doc.moveDown(0.25);

// Contact Info - Single Continuous Line
doc.font('Helvetica').fontSize(8.5).text('Email: mallikarjuna16y@gmail.com   |   Phone: +91 9515181532   |   Location: Bengaluru, Karnataka, India');
doc.moveDown(0.15);
doc.text('LinkedIn: linkedin.com/in/madiga-mallikarjuna2377b8243   |   GitHub: github.com/mallidhanu');
doc.moveDown(0.35);

// Standard Divider Line
function drawDivider() {
  doc.strokeColor('#cccccc').lineWidth(0.5)
     .moveTo(45, doc.y)
     .lineTo(550, doc.y)
     .stroke();
  doc.moveDown(0.45);
}

drawDivider();

// Section 1: Professional Summary
doc.font('Helvetica-Bold').fontSize(11).text('PROFESSIONAL SUMMARY');
doc.moveDown(0.3);
doc.font('Helvetica').fontSize(8.5).text(
  'Performance-driven Senior Full-Stack Engineer and IoT Solutions Architect with 3+ years of proven experience in building and ' +
  'deploying mission-critical Smart City systems, Integrated Command & Control Centers (ICCC), and high-throughput IoT production ' +
  'networks. Expert in Java, Spring Boot, Angular, and real-time streaming pipelines. Highly skilled in designing secure, resilient ' +
  'API gateways, edge data gateways, custom authentication layers, telemetry pipelines, and high-availability Linux infrastructures.',
  { align: 'justify', lineGap: 1.5 }
);
doc.moveDown(0.4);

drawDivider();

// Section 2: Core Skills & Technologies
doc.font('Helvetica-Bold').fontSize(11).text('CORE SKILLS & TECHNOLOGIES');
doc.moveDown(0.3);

const skills = [
  { label: 'Languages & Frameworks: ', val: 'Java, TypeScript, Spring Boot, Angular, JavaScript, HTML5/CSS3, Bash Scripting' },
  { label: 'APIs & Middleware: ', val: 'REST APIs, WebSockets, gRPC, OAuth 2.0 & JWT, Hibernate, JPA, Apache NiFi' },
  { label: 'Databases & Storage: ', val: 'PostgreSQL, MySQL, Redis, PouchDB, CouchDB, MongoDB, H2 Database' },
  { label: 'IoT & Protocols: ', val: 'Modbus TCP, OPC UA, BACnet, MQTT, Kafka Streams, Node-RED, Telemetry Gateways' },
  { label: 'DevOps & Production: ', val: 'Docker, Jenkins CI/CD, SonarQube, Linux System Admin, Prometheus, Grafana' }
];

skills.forEach(s => {
  doc.font('Helvetica-Bold').fontSize(8.5).text(s.label, { continued: true })
     .font('Helvetica').text(s.val, { lineGap: 1.2 });
});
doc.moveDown(0.4);

drawDivider();

// Section 3: Professional Experience
doc.font('Helvetica-Bold').fontSize(11).text('PROFESSIONAL EXPERIENCE');
doc.moveDown(0.3);

// Company Metadata
doc.font('Helvetica-Bold').fontSize(9.5).text('Trinity Mobility Private Ltd - Full Stack Developer | Bengaluru, India   (Mar 2022 - Apr 2025)');
doc.moveDown(0.2);
doc.font('Helvetica-Oblique').fontSize(8.5).text('Role Description: Spearheaded highly available, secure smart city production software and IoT operations.');
doc.moveDown(0.35);

// Helper function to draw perfectly aligned single-line bullet points
function addBullet(bulletText) {
  doc.font('Helvetica').fontSize(8.2).text('•  ', { continued: true })
     .text(bulletText, { lineGap: 1.2 });
}

// Subproject 1: Notify Service
doc.font('Helvetica-Bold').fontSize(9).text('Notify Service - High-Availability Notification Gateway');
doc.moveDown(0.2);
addBullet('Scaled a performance-driven notification engine supporting 100,000+ users for mission-critical SMS and email alerts.');
addBullet('Executed custom authentication filters and request-logging mechanisms, managing 1M+ monthly operations with 99.99% reliability.');
addBullet('Mitigated system downtime by 80% through high-availability response frameworks and Linux-based automated failovers.');
doc.moveDown(0.35);

// Subproject 2: Enterprise API Gateway
doc.font('Helvetica-Bold').fontSize(9).text('Enterprise API Gateway');
doc.moveDown(0.2);
addBullet('Formulated a secure Spring Boot API Gateway serving 12+ Smart City vendors with robust OAuth 2.0 and JWT authentication.');
addBullet('Architected API solutions with OAuth 2.0 and rate limiting, achieving a 45% reduction in vulnerabilities through robust security.');
addBullet('Streamlined vendor integration by standardizing API interactions, reducing integration time by 60% for traffic and safety vendors.');
addBullet('Standardized API communication protocols, which minimized cross-team integration friction by 50%.');
doc.moveDown(0.35);

// Subproject 3: Industrial IoT Data Gateway
doc.font('Helvetica-Bold').fontSize(9).text('Industrial IoT Data Gateway');
doc.moveDown(0.2);
addBullet('Developed a Node-RED gateway decreasing latency by 30%, enabling real-time synchronization between sensors and cloud backends.');
addBullet('Integrated Modbus TCP, OPC UA, and BACnet protocols, enabling bidirectional communication for 10,000+ edge devices.');
addBullet('Programmed custom JavaScript logic within Node-RED to perform edge-level data filtering, reducing cloud storage costs by 20%.');
doc.moveDown(0.35);

// Subproject 4: R&D
doc.font('Helvetica-Bold').fontSize(9).text('R&D: Digital Twinning & Real-Time Analytics');
doc.moveDown(0.2);
addBullet('Pioneered a product design that boosted overall system performance by 20% and decreased operational costs by 15%.');
addBullet('Improved resource allocation accuracy by 25% via a real-time tracking dashboard, ensuring zero downtime during incidents.');
addBullet('Achieved a 25% reduction in emergency response times by automating dispatch workflows and live sensor data streaming.');
doc.moveDown(0.4);

drawDivider();

// Section 4: Operations Highlights
doc.font('Helvetica-Bold').fontSize(11).text('PRODUCTION & LARGE-SCALE IOT OPERATIONS HIGHLIGHTS');
doc.moveDown(0.3);
addBullet('Actively managed live production deployments on multi-node Linux clusters for Smart City systems.');
addBullet('Standardized Docker container configurations and Jenkins pipelines to guarantee seamless rollouts.');
addBullet('Executed load-testing mimicking 100K+ concurrent signals to ensure gateway bounds and stability.');
addBullet('Configured Grafana and Prometheus monitoring metrics to proactively detect memory and socket choke.');
doc.moveDown(0.4);

drawDivider();

// Section 5: Education & Training
doc.font('Helvetica-Bold').fontSize(11).text('EDUCATION & TRAINING');
doc.moveDown(0.3);

doc.font('Helvetica-Bold').fontSize(9.5).text('Bachelor of Technology in Electronics and Communication Engineering (ECE)');
doc.font('Helvetica').fontSize(8.5).text('Jawaharlal Nehru Technological University (JNTU), Anantapur | Andhra Pradesh, India');
doc.moveDown(0.2);

doc.font('Helvetica-Bold').fontSize(8.5).text('Professional Course: ', { continued: true })
   .font('Helvetica').text('Full Stack Development Certification Course - JSpiders, Bengaluru');
doc.moveDown(0.15);
doc.font('Helvetica-Bold').fontSize(8.5).text('Core Lab Training: ', { continued: true })
   .font('Helvetica').text('RTOS, Microcontrollers, telecommunication networks, computer networks, Embedded Systems');

// Finish document generation
doc.end();

writeStream.on('finish', () => {
  console.log('PDF successfully generated with pdfkit!');
});
