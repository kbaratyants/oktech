export type phase = "adopt" | "trial" | "assess" | "hold";
export type category = "techniques" | "tools" | "platform" | "languages";
export type discipline =
  | "QA"
  | "backend"
  | "frontend"
  | "iOS"
  | "android"
  | "ML";

export interface Item {
  name: string;
  discipline: discipline[];
  category: category;
  phase: phase;
}

const androidItems: Item[] = [
  // techniques

  // adopt
  {
    name: "Fresco",
    discipline: ["android"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "RxJava 3",
    discipline: ["android"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "WorkManager",
    discipline: ["android"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "Kotlin Coroutines",
    discipline: ["android"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "Kotlin Flow",
    discipline: ["android"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "Room",
    discipline: ["android"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "Dagger 2",
    discipline: ["android"],
    category: "techniques",
    phase: "adopt",
  },
  //   { name: "Espresso", discipline: ["android"], category: "techniques", phase: "adopt" },
  //   { name: "Mockito", discipline: ["android"], category: "techniques", phase: "adopt" },
  //   { name: "MVVM", discipline: ["android"], category: "techniques", phase: "adopt" },
  {
    name: "MVP",
    discipline: ["android"],
    category: "techniques",
    phase: "adopt",
  },
  //   { name: "Groovy", discipline: ["android"], category: "techniques", phase: "adopt" },
  {
    name: "Okhttp",
    discipline: ["android"],
    category: "techniques",
    phase: "adopt",
  },
  //   { name: "Barista", discipline: ["android"], category: "techniques", phase: "adopt" },
  {
    name: "Guava",
    discipline: ["android"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "Feature-toggle",
    discipline: ["android"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "VK Maps",
    discipline: ["android"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "Multi-modules",
    discipline: ["android"],
    category: "techniques",
    phase: "adopt",
  },
  //   { name: "JUnit4", discipline: ["android"], category: "techniques", phase: "adopt" },

  // trial
  {
    name: "MVI",
    discipline: ["android"],
    category: "techniques",
    phase: "trial",
  },
  {
    name: "Kotlin DSL",
    discipline: ["android"],
    category: "techniques",
    phase: "trial",
  },

  // assess
  {
    name: "KSP",
    discipline: ["android"],
    category: "techniques",
    phase: "assess",
  },

  // hold
  {
    name: "Firebase Crashlytics",
    discipline: ["android"],
    category: "techniques",
    phase: "hold",
  },

  // ------
  // tools

  // adopt
  //   { name: "Tracer", discipline: ["android"], category: "tools", phase: "adopt" },
  //   { name: "TeamCity", discipline: ["android"], category: "tools", phase: "adopt" },
  //   { name: "Jira", discipline: ["android"], category: "tools", phase: "adopt" },
  //   { name: "Android Studio", discipline: ["android"], category: "tools", phase: "adopt" },
  //   { name: "Git", discipline: ["android"], category: "tools", phase: "adopt" },
  //   { name: "ADB", discipline: ["android"], category: "tools", phase: "adopt" },
  { name: "Stash", discipline: ["android"], category: "tools", phase: "adopt" },
  //   { name: "Gradle", discipline: ["android"], category: "tools", phase: "adopt" },
  //   { name: "Confluence", discipline: ["android"], category: "tools", phase: "adopt" },

  // hold
  //   { name: "GrayLog", discipline: ["android"], category: "tools", phase: "hold" },

  //------
  // platform

  // adopt
  //   { name: "Android SDK", discipline: ["android"], category: "platform", phase: "adopt" },
  {
    name: "Google maps sdk(gms)",
    discipline: ["android"],
    category: "platform",
    phase: "adopt",
  },

  // assess
  {
    name: "Compose",
    discipline: ["android"],
    category: "platform",
    phase: "assess",
  },
  {
    name: "Kotlin multiplatform mobile",
    discipline: ["android"],
    category: "platform",
    phase: "assess",
  },

  //------
  // languages

  // adopt
  //   { name: "Kotlin", discipline: ["android"], category: "languages", phase: "adopt" },
  //   { name: "Java", discipline: ["android"], category: "languages", phase: "adopt" },
];

const qaItems: Item[] = [
  // techniques

  // adopt
  {
    name: "API автотесты",
    discipline: ["QA"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "UI автотесты/E2E автотесты",
    discipline: ["QA"],
    category: "techniques",
    phase: "adopt",
  },
  //   { "name": "CI/CD", "discipline": ["QA"], "category": "techniques", "phase": "adopt" },
  //   { "name": "Code review", "discipline": ["QA"], "category": "techniques", "phase": "adopt" },
  {
    name: "Code style",
    discipline: ["QA"],
    category: "techniques",
    phase: "adopt",
  },

  // tools

  // adopt
  //   { "name": "Intellij IDEA", "discipline": ["QA"], "category": "tools", "phase": "adopt" },
  //   { "name": "Android Studio", "discipline": ["QA"], "category": "tools", "phase": "adopt" },
  //   { "name": "XCode", "discipline": ["QA"], "category": "tools", "phase": "adopt" },
  {
    name: "Stash/BitBucket - Git",
    discipline: ["QA"],
    category: "tools",
    phase: "adopt",
  },
  //   { "name": "TeamCity", "discipline": ["QA"], "category": "tools", "phase": "adopt" },
  //   { "name": "Jenkins", "discipline": ["QA"], "category": "tools", "phase": "adopt" },
  { name: "JUnit5", discipline: ["QA"], category: "tools", phase: "adopt" },
  //   { "name": "JUnit4", "discipline": ["QA"], "category": "tools", "phase": "adopt" },
  //   { "name": "Gradle", "discipline": ["QA"], "category": "tools", "phase": "adopt" },
  { name: "Maven", discipline: ["QA"], category: "tools", phase: "adopt" },
  { name: "mcc", discipline: ["QA"], category: "tools", phase: "adopt" },
  {
    name: "one-builder",
    discipline: ["QA"],
    category: "tools",
    phase: "adopt",
  },
  { name: "one-conf", discipline: ["QA"], category: "tools", phase: "adopt" },
  //   { "name": "S3", "discipline": ["QA"], "category": "tools", "phase": "adopt" },
  { name: "mainframer", discipline: ["QA"], category: "tools", phase: "adopt" },
  //   { "name": "ADB", "discipline": ["QA"], "category": "tools", "phase": "adopt" },
  { name: "mongodb", discipline: ["QA"], category: "tools", phase: "adopt" },
  { name: "spring", discipline: ["QA"], category: "tools", phase: "adopt" },
  { name: "guice", discipline: ["QA"], category: "tools", phase: "adopt" },
  //   { "name": "jackson", "discipline": ["QA"], "category": "tools", "phase": "adopt" },
  { name: "dropwizard", discipline: ["QA"], category: "tools", phase: "adopt" },
  //   { "name": "Mockito", "discipline": ["QA"], "category": "tools", "phase": "adopt" },
  { name: "quartz", discipline: ["QA"], category: "tools", phase: "adopt" },
  //   { "name": "Charles", "discipline": ["QA"], "category": "tools", "phase": "adopt" },
  //   { "name": "Fastlane", "discipline": ["QA"], "category": "tools", "phase": "adopt" },
  //   { "name": "Tracer", "discipline": ["QA"], "category": "tools", "phase": "adopt" },
  //   { "name": "Portal Management System", "discipline": ["QA"], "category": "tools", "phase": "adopt" },
  { name: "PTS", discipline: ["QA"], category: "tools", phase: "adopt" },
  //   { "name": "Jira", "discipline": ["QA"], "category": "tools", "phase": "adopt" },
  //   { "name": "Confluence", "discipline": ["QA"], "category": "tools", "phase": "adopt" },
  { name: "Test IT", discipline: ["QA"], category: "tools", phase: "adopt" },
  { name: "curl", discipline: ["QA"], category: "tools", phase: "adopt" },
  { name: "postman", discipline: ["QA"], category: "tools", phase: "adopt" },
  { name: "REST API", discipline: ["QA"], category: "tools", phase: "adopt" },
  { name: "DevTool", discipline: ["QA"], category: "tools", phase: "adopt" },
  //   { "name": "GrayLog", "discipline": ["QA"], "category": "tools", "phase": "adopt" },
  { name: "charts", discipline: ["QA"], category: "tools", phase: "adopt" },
  //   { "name": "grafana", "discipline": ["QA"], "category": "tools", "phase": "adopt" },
  {
    name: "bash/terminal",
    discipline: ["QA"],
    category: "tools",
    phase: "adopt",
  },
  //   { "name": "zeppelin", "discipline": ["QA"], "category": "tools", "phase": "adopt" },

  // trial
  //   { "name": "Cassandra", "discipline": ["QA"], "category": "tools", "phase": "trial" },
  //   { "name": "kafka", "discipline": ["QA"], "category": "tools", "phase": "trial" },

  // assess
  { name: "grpc", discipline: ["QA"], category: "tools", phase: "assess" },

  // hold
  //   { "name": "Jenkins", "discipline": ["QA"], "category": "tools", "phase": "hold" },
  {
    name: "project-reactor",
    discipline: ["QA"],
    category: "tools",
    phase: "hold",
  },
  { name: "eventbus", discipline: ["QA"], category: "tools", phase: "hold" },

  // platform

  // adopt
  {
    name: "one-cloud",
    discipline: ["QA"],
    category: "platform",
    phase: "adopt",
  },
  //   { "name": "Android SDK", "discipline": ["QA"], "category": "platform", "phase": "adopt" },

  // languages

  // adopt
  //   { "name": "Java", "discipline": ["QA"], "category": "languages", "phase": "adopt" },
  //   { "name": "Kotlin", "discipline": ["QA"], "category": "languages", "phase": "adopt" },
  //   { "name": "Swift", "discipline": ["QA"], "category": "languages", "phase": "adopt" },
  {
    name: "Objective-C",
    discipline: ["QA"],
    category: "languages",
    phase: "adopt",
  },
  //   { "name": "Groovy", "discipline": ["QA"], "category": "languages", "phase": "adopt" },
  //   { "name": "Ruby", "discipline": ["QA"], "category": "languages", "phase": "adopt" },
  //   { "name": "HTML", "discipline": ["QA"], "category": "languages", "phase": "adopt" },
  //   { "name": "CSS", "discipline": ["QA"], "category": "languages", "phase": "adopt" },
  {
    name: "Selenium",
    discipline: ["QA"],
    category: "languages",
    phase: "adopt",
  },
  {
    name: "Selenide",
    discipline: ["QA"],
    category: "languages",
    phase: "adopt",
  },
  //   { "name": "Espresso", "discipline": ["QA"], "category": "languages", "phase": "adopt" },
  {
    name: "UIAutomator",
    discipline: ["QA"],
    category: "languages",
    phase: "adopt",
  },
  { name: "XCUI", discipline: ["QA"], category: "languages", phase: "adopt" },
  { name: "KIF", discipline: ["QA"], category: "languages", phase: "adopt" },
  {
    name: "AssertJ",
    discipline: ["QA"],
    category: "languages",
    phase: "adopt",
  },
  {
    name: "Hamcrest",
    discipline: ["QA"],
    category: "languages",
    phase: "adopt",
  },

  // assess
  {
    name: "Kaspresso",
    discipline: ["QA"],
    category: "languages",
    phase: "assess",
  },

  // hold
  //   { "name": "Barista", "discipline": ["QA"], "category": "languages", "phase": "hold" },
];

const frontendItems: Item[] = [
  // techniques

  //adopt
  {
    name: "Server-side rendering",
    discipline: ["frontend"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "Backend for Frontend",
    discipline: ["frontend"],
    category: "techniques",
    phase: "adopt",
  },
  //   { "name": "REST", "discipline": ["frontend"], "category": "techniques", "phase": "adopt" },
  //   { "name": "Reactive programming", "discipline": ["frontend"], "category": "techniques", "phase": "adopt" },

  //trial
  {
    name: "PWA",
    discipline: ["frontend"],
    category: "techniques",
    phase: "trial",
  },
  {
    name: "Vite",
    discipline: ["frontend"],
    category: "techniques",
    phase: "trial",
  },
  {
    name: "esbuild",
    discipline: ["frontend"],
    category: "techniques",
    phase: "trial",
  },

  //assess
  {
    name: "Микрофонтенды",
    discipline: ["frontend"],
    category: "techniques",
    phase: "assess",
  },

  //hold
  {
    name: "Redux",
    discipline: ["frontend"],
    category: "techniques",
    phase: "hold",
  },

  //tools

  //adopt
  {
    name: "Webpack",
    discipline: ["frontend"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "StoryBook",
    discipline: ["frontend"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "Babel",
    discipline: ["frontend"],
    category: "tools",
    phase: "adopt",
  },
  //   { "name": "Gradle", "discipline": ["frontend"], "category": "tools", "phase": "adopt" },
  {
    name: "ESLint",
    discipline: ["frontend"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "PostCSS",
    discipline: ["frontend"],
    category: "tools",
    phase: "adopt",
  },
  { name: "SCSS", discipline: ["frontend"], category: "tools", phase: "adopt" },
  {
    name: "Stylus",
    discipline: ["frontend"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "CSS-modules",
    discipline: ["frontend"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "RequireJS",
    discipline: ["frontend"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "Yeoman",
    discipline: ["frontend"],
    category: "tools",
    phase: "adopt",
  },
  //   { "name": "TeamCity", "discipline": ["frontend"], "category": "tools", "phase": "adopt" },
  //   { "name": "Graylog", "discipline": ["frontend"], "category": "tools", "phase": "adopt" },
  //   { "name": "Docker", "discipline": ["frontend"], "category": "tools", "phase": "adopt" },
  //   { "name": "NGINX", "discipline": ["frontend"], "category": "tools", "phase": "adopt" },

  //trial
  {
    name: "Prettier",
    discipline: ["frontend"],
    category: "tools",
    phase: "trial",
  },

  //hold
  //   { "name": "GWT", "discipline": ["frontend"], "category": "tools", "phase": "hold" },
  //   { "name": "ant", "discipline": ["frontend"], "category": "tools", "phase": "hold" },
  { name: "Grunt", discipline: ["frontend"], category: "tools", phase: "hold" },
  { name: "Lerna", discipline: ["frontend"], category: "tools", phase: "hold" },
  {
    name: "enzyme",
    discipline: ["frontend"],
    category: "tools",
    phase: "hold",
  },

  // platform

  // adopt
  {
    name: "GraalVM",
    discipline: ["frontend"],
    category: "platform",
    phase: "adopt",
  },
  //   { "name": "Tomcat", "discipline": ["frontend"], "category": "platform", "phase": "adopt" },
  {
    name: "NPM",
    discipline: ["frontend"],
    category: "platform",
    phase: "adopt",
  },
  {
    name: "Nexus",
    discipline: ["frontend"],
    category: "platform",
    phase: "adopt",
  },

  // hold
  {
    name: "jQuery",
    discipline: ["frontend"],
    category: "platform",
    phase: "hold",
  },

  // languages

  // adopt
  //   { "name": "Java", "discipline": ["frontend"], "category": "languages", "phase": "adopt" },
  {
    name: "TypeScript",
    discipline: ["frontend"],
    category: "languages",
    phase: "adopt",
  },
  //   { "name": "JavaScript", "discipline": ["frontend"], "category": "languages", "phase": "adopt" },
  {
    name: "React",
    discipline: ["frontend"],
    category: "languages",
    phase: "adopt",
  },
  {
    name: "Angular",
    discipline: ["frontend"],
    category: "languages",
    phase: "adopt",
  },
  {
    name: "MobX",
    discipline: ["frontend"],
    category: "languages",
    phase: "adopt",
  },
  {
    name: "Jest",
    discipline: ["frontend"],
    category: "languages",
    phase: "adopt",
  },
  //   { "name": "HTML", "discipline": ["frontend"], "category": "languages", "phase": "adopt" },
  //   { "name": "CSS", "discipline": ["frontend"], "category": "languages", "phase": "adopt" },
  {
    name: "RDK",
    discipline: ["frontend"],
    category: "languages",
    phase: "adopt",
  },
  {
    name: "reactiveJS",
    discipline: ["frontend"],
    category: "languages",
    phase: "adopt",
  },
  {
    name: "HighstockJS",
    discipline: ["frontend"],
    category: "languages",
    phase: "adopt",
  },
  {
    name: "Endorphin",
    discipline: ["frontend"],
    category: "languages",
    phase: "adopt",
  },

  // trial
  {
    name: "React Testing Library",
    discipline: ["frontend"],
    category: "languages",
    phase: "trial",
  },

  // assess
  {
    name: "Endorphin2",
    discipline: ["frontend"],
    category: "languages",
    phase: "assess",
  },
];

const backendItems: Item[] = [
  // techniques

  //adopt
  {
    name: "Highload",
    discipline: ["backend"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "BigData",
    discipline: ["backend"],
    category: "techniques",
    phase: "adopt",
  },
  //   { "name": "CI/CD", "discipline": ["backend"], "category": "techniques", "phase": "adopt" },
  {
    name: "Online updates",
    discipline: ["backend"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "Smart Monitoring",
    discipline: ["backend"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "High Availability",
    discipline: ["backend"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "CDN",
    discipline: ["backend"],
    category: "techniques",
    phase: "adopt",
  },
  //   { "name": "Reactive Programming", "discipline": ["backend"], "category": "techniques", "phase": "adopt" },
  {
    name: "Off-heap Caching",
    discipline: ["backend"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "RPC",
    discipline: ["backend"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "microservices",
    discipline: ["backend"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "SOLID",
    discipline: ["backend"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "DRY",
    discipline: ["backend"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "async processing",
    discipline: ["backend"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "batch processing",
    discipline: ["backend"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "actor model",
    discipline: ["backend"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "NoSQL",
    discipline: ["backend"],
    category: "techniques",
    phase: "adopt",
  },
  //   { "name": "REST", "discipline": ["backend"], "category": "techniques", "phase": "adopt" },
  {
    name: "JSON",
    discipline: ["backend"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "OAuth",
    discipline: ["backend"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "Streaming API",
    discipline: ["backend"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "Design review",
    discipline: ["backend"],
    category: "techniques",
    phase: "adopt",
  },
  //   { "name": "Code review", "discipline": ["backend"], "category": "techniques", "phase": "adopt" },
  {
    name: "Kanban",
    discipline: ["backend"],
    category: "techniques",
    phase: "adopt",
  },

  // assess
  {
    name: "WebSocket",
    discipline: ["backend"],
    category: "techniques",
    phase: "assess",
  },
  {
    name: "CBOR",
    discipline: ["backend"],
    category: "techniques",
    phase: "assess",
  },
  {
    name: "Swagger",
    discipline: ["backend"],
    category: "techniques",
    phase: "assess",
  },

  //hold
  //   { "name": "GWT", "discipline": ["backend"], "category": "techniques", "phase": "hold" },
  {
    name: "XML",
    discipline: ["backend"],
    category: "techniques",
    phase: "hold",
  },

  //tools

  //adopt
  //   { "name": "Cassandra", "discipline": ["backend"], "category": "tools", "phase": "adopt" },
  //   { "name": "IntellyJ IDEA", "discipline": ["backend"], "category": "tools", "phase": "adopt" },
  //   { "name": "Charles HTTP proxy", "discipline": ["backend"], "category": "tools", "phase": "adopt" },
  {
    name: "SdkMan",
    discipline: ["backend"],
    category: "tools",
    phase: "adopt",
  },
  { name: "Ivy", discipline: ["backend"], category: "tools", phase: "adopt" },
  //   { "name": "Gradle", "discipline": ["backend"], "category": "tools", "phase": "adopt" },
  //   { "name": "Git", "discipline": ["backend"], "category": "tools", "phase": "adopt" },
  {
    name: "NewSQL",
    discipline: ["backend"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "one-nio",
    discipline: ["backend"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "one-dcache",
    discipline: ["backend"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "one-queue",
    discipline: ["backend"],
    category: "tools",
    phase: "adopt",
  },
  //   { "name": "S3", "discipline": ["backend"], "category": "tools", "phase": "adopt" },
  {
    name: "OBS,OCS",
    discipline: ["backend"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "Quartz job scheduler",
    discipline: ["backend"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "Voldemort",
    discipline: ["backend"],
    category: "tools",
    phase: "adopt",
  },
  //   { "name": "Kafka", "discipline": ["backend"], "category": "tools", "phase": "adopt" },
  {
    name: "async-profiler",
    discipline: ["backend"],
    category: "tools",
    phase: "adopt",
  },
  //   { "name": "NGINX", "discipline": ["backend"], "category": "tools", "phase": "adopt" },
  { name: "junit", discipline: ["backend"], category: "tools", phase: "adopt" },
  //   { "name": "jackson", "discipline": ["backend"], "category": "tools", "phase": "adopt" },
  {
    name: "Lucene",
    discipline: ["backend"],
    category: "tools",
    phase: "adopt",
  },
  //   { "name": "Portal Management System", "discipline": ["backend"], "category": "tools", "phase": "adopt" },
  { name: "DWH", discipline: ["backend"], category: "tools", phase: "adopt" },
  //   { "name": "grafana", "discipline": ["backend"], "category": "tools", "phase": "adopt" },
  //   { "name": "zeppelin", "discipline": ["backend"], "category": "tools", "phase": "adopt" },
  { name: "QUIC", discipline: ["backend"], category: "tools", phase: "adopt" },
  //   { "name": "Docker", "discipline": ["backend"], "category": "tools", "phase": "adopt" },
  {
    name: "PostgreSQL",
    discipline: ["backend"],
    category: "tools",
    phase: "adopt",
  },
  //   { "name": "Tomcat", "discipline": ["backend"], "category": "tools", "phase": "adopt" },
  {
    name: "Linux Virtual Server",
    discipline: ["backend"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "graalvm",
    discipline: ["backend"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "Zookeeper",
    discipline: ["backend"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "Apache Airflow",
    discipline: ["backend"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "PowerDNS",
    discipline: ["backend"],
    category: "tools",
    phase: "adopt",
  },
  //   { "name": "TeamCity", "discipline": ["backend"], "category": "tools", "phase": "adopt" },

  //hold
  //   { "name": "ant", "discipline": ["backend"], "category": "tools", "phase": "hold" },
  { name: "MSSQL", discipline: ["backend"], category: "tools", phase: "hold" },

  // platform

  //adopt
  {
    name: "Apache Spark",
    discipline: ["backend"],
    category: "platform",
    phase: "adopt",
  },
  {
    name: "Apache Hadoop",
    discipline: ["backend"],
    category: "platform",
    phase: "adopt",
  },
  {
    name: "JRE",
    discipline: ["backend"],
    category: "platform",
    phase: "adopt",
  },
  {
    name: "One-cloud",
    discipline: ["backend"],
    category: "platform",
    phase: "adopt",
  },
  {
    name: "JVM",
    discipline: ["backend"],
    category: "platform",
    phase: "adopt",
  },
  {
    name: "graylog+elasticsearch",
    discipline: ["backend"],
    category: "platform",
    phase: "adopt",
  },

  // languages
  //adopt
  //   { "name": "Java", "discipline": ["backend"], "category": "languages", "phase": "adopt" },
  {
    name: "Spring",
    discipline: ["backend"],
    category: "languages",
    phase: "adopt",
  },
  //   { "name": "JavaScript", "discipline": ["backend"], "category": "languages", "phase": "adopt" },
  { name: "C", discipline: ["backend"], category: "languages", phase: "adopt" },
  {
    name: "C++",
    discipline: ["backend"],
    category: "languages",
    phase: "adopt",
  },
  {
    name: "Python",
    discipline: ["backend"],
    category: "languages",
    phase: "adopt",
  },
  //   { "name": "Scala", "discipline": ["backend"], "category": "languages", "phase": "adopt" },
  //   { "name": "Groovy", "discipline": ["backend"], "category": "languages", "phase": "adopt" },

  //assess
  {
    name: "Rust",
    discipline: ["backend"],
    category: "languages",
    phase: "assess",
  },
  {
    name: "Go",
    discipline: ["backend"],
    category: "languages",
    phase: "assess",
  },
  //   { "name": "Kotlin", "discipline": ["backend"], "category": "languages", "phase": "assess" },
];

const iosItems: Item[] = [
  // adopt
  {
    name: "Многомодульность",
    discipline: ["iOS"],
    category: "techniques",
    phase: "adopt",
  },
  //   { "name": "MVVM", "discipline": ["iOS"], "category": "techniques", "phase": "adopt" },
  {
    name: "Feature teams",
    discipline: ["iOS"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "Feature toggles",
    discipline: ["iOS"],
    category: "techniques",
    phase: "adopt",
  },
  //   { "name": "Reactive programming", "discipline": ["iOS"], "category": "techniques", "phase": "adopt" },
  {
    name: "Declarative programming",
    discipline: ["iOS"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "UI tests",
    discipline: ["iOS"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "Dependency Injection",
    discipline: ["iOS"],
    category: "techniques",
    phase: "adopt",
  },
  //   { "name": "CI/CD", "discipline": ["iOS"], "category": "techniques", "phase": "adopt" },
  {
    name: "Demo UI App",
    discipline: ["iOS"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "Debug Menu",
    discipline: ["iOS"],
    category: "techniques",
    phase: "adopt",
  },

  // assess
  {
    name: "Design System",
    discipline: ["iOS"],
    category: "techniques",
    phase: "assess",
  },

  // ------
  // tools

  // adopt
  //   { "name": "XCode", "discipline": ["iOS"], "category": "tools", "phase": "adopt" },
  //   { "name": "Git", "discipline": ["iOS"], "category": "tools", "phase": "adopt" },
  { name: "Cocoapods", discipline: ["iOS"], category: "tools", phase: "adopt" },
  //   { "name": "Fastlane", "discipline": ["iOS"], "category": "tools", "phase": "adopt" },
  //   { "name": "Tracer", "discipline": ["iOS"], "category": "tools", "phase": "adopt" },
  { name: "SwiftLint", discipline: ["iOS"], category: "tools", phase: "adopt" },
  {
    name: "SwiftFormat",
    discipline: ["iOS"],
    category: "tools",
    phase: "adopt",
  },

  // hold
  { name: "Firebase", discipline: ["iOS"], category: "tools", phase: "hold" },
  { name: "Appcenter", discipline: ["iOS"], category: "tools", phase: "hold" },

  //------
  // platform

  // adopt
  {
    name: "iOS SDK",
    discipline: ["iOS"],
    category: "platform",
    phase: "adopt",
  },

  //------
  // languages

  // adopt
  //   { name: "Swift", discipline: ["iOS"], category: "languages", phase: "adopt" },
  //   { name: "Ruby", discipline: ["iOS"], category: "languages", phase: "adopt" },
  {
    name: "Foundation",
    discipline: ["iOS"],
    category: "languages",
    phase: "adopt",
  },
  {
    name: "CoreData",
    discipline: ["iOS"],
    category: "languages",
    phase: "adopt",
  },
  { name: "UIKit", discipline: ["iOS"], category: "languages", phase: "adopt" },
  {
    name: "CallKit",
    discipline: ["iOS"],
    category: "languages",
    phase: "adopt",
  },
  {
    name: "ReactiveSwift",
    discipline: ["iOS"],
    category: "languages",
    phase: "adopt",
  },
  {
    name: "ReactiveCocoa",
    discipline: ["iOS"],
    category: "languages",
    phase: "adopt",
  },
  {
    name: "WebRTC",
    discipline: ["iOS"],
    category: "languages",
    phase: "adopt",
  },
  {
    name: "Lottie",
    discipline: ["iOS"],
    category: "languages",
    phase: "adopt",
  },
  {
    name: "Snapkit",
    discipline: ["iOS"],
    category: "languages",
    phase: "adopt",
  },
  {
    name: "YAPDatabase",
    discipline: ["iOS"],
    category: "languages",
    phase: "adopt",
  },
  {
    name: "SDWebImage",
    discipline: ["iOS"],
    category: "languages",
    phase: "adopt",
  },

  // assess
  {
    name: "async/await",
    discipline: ["iOS"],
    category: "languages",
    phase: "assess",
  },
  {
    name: "Combine",
    discipline: ["iOS"],
    category: "languages",
    phase: "assess",
  },
  {
    name: "SwiftUI",
    discipline: ["iOS"],
    category: "languages",
    phase: "assess",
  },

  // hold
  {
    name: "DiffableDataSources",
    discipline: ["iOS"],
    category: "languages",
    phase: "hold",
  },
  {
    name: "ReactiveObjC",
    discipline: ["iOS"],
    category: "languages",
    phase: "hold",
  },
  {
    name: "IGListKit",
    discipline: ["iOS"],
    category: "languages",
    phase: "hold",
  },
  {
    name: "Masonry",
    discipline: ["iOS"],
    category: "languages",
    phase: "hold",
  },
  {
    name: "Objective-c",
    discipline: ["iOS"],
    category: "languages",
    phase: "hold",
  },
  {
    name: "YYWebImage",
    discipline: ["iOS"],
    category: "languages",
    phase: "hold",
  },
];

const mlItems: Item[] = [
  // techniques

  //adopt
  {
    name: "Streaming processing",
    discipline: ["ML"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "Big data batch processing",
    discipline: ["ML"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "Approximate nearest neighbors search",
    discipline: ["ML"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "Distributed ML models training",
    discipline: ["ML"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "ML models monitoring and retraining",
    discipline: ["ML"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "Distributed neural network inference",
    discipline: ["ML"],
    category: "techniques",
    phase: "adopt",
  },

  //assess
  //   { "name": "SuperSet", "discipline": ["ML"], "category": "techniques", "phase": "assess" },
  //   { "name": "Catboost", "discipline": ["ML"], "category": "techniques", "phase": "assess" },
  //   { "name": "DataHub", "discipline": ["ML"], "category": "techniques", "phase": "assess" },

  //hold
  //   { "name": "Hadoop MapReduce", "discipline": ["ML"], "category": "techniques", "phase": "hold" },
  //   { "name": "Pig", "discipline": ["ML"], "category": "techniques", "phase": "hold" },
  //   { "name": "Tensorflow", "discipline": ["ML"], "category": "techniques", "phase": "hold" },

  // tools

  //adopt
  {
    name: "Jupyter Notebook",
    discipline: ["ML"],
    category: "tools",
    phase: "adopt",
  },
  //   { "name": "Docker", "discipline": ["ML"], "category": "tools", "phase": "adopt" },
  { name: "Airflow", discipline: ["ML"], category: "tools", phase: "adopt" },
  { name: "MLfow", discipline: ["ML"], category: "tools", phase: "adopt" },
  { name: "DVC", discipline: ["ML"], category: "tools", phase: "adopt" },
  { name: "Pandas", discipline: ["ML"], category: "tools", phase: "adopt" },
  { name: "XGBoost", discipline: ["ML"], category: "tools", phase: "adopt" },
  { name: "Numpy", discipline: ["ML"], category: "tools", phase: "adopt" },
  // { "name": "Apache Zeppelin", "discipline": ["ML"], "category": "tools", "phase": "adopt" },
  //   { "name": "Kafka", "discipline": ["ML"], "category": "tools", "phase": "adopt" },
  {
    name: "Streaming index (inner feature store based on Cassandra)",
    discipline: ["ML"],
    category: "tools",
    phase: "adopt",
  },
  { name: "ClickHouse", discipline: ["ML"], category: "tools", phase: "adopt" },
  { name: "HDFS", discipline: ["ML"], category: "tools", phase: "adopt" },
  //   { "name": "S3", "discipline": ["ML"], "category": "tools", "phase": "adopt" },
  //   { "name": "Grafana", "discipline": ["ML"], "category": "tools", "phase": "adopt" },
  { name: "FAISS", discipline: ["ML"], category: "tools", phase: "adopt" },

  //assess
  //   { "name": "Catboost", "discipline": ["ML"], "category": "tools", "phase": "assess" },
  //   { "name": "SuperSet", "discipline": ["ML"], "category": "tools", "phase": "assess" },
  //   { "name": "DataHub", "discipline": ["ML"], "category": "tools", "phase": "assess" },

  //hold
  { name: "Annoy", discipline: ["ML"], category: "tools", phase: "hold" },
  { name: "Mahout", discipline: ["ML"], category: "tools", phase: "hold" },

  // platform

  //adopt
  {
    name: "Hadoop ecosystem",
    discipline: ["ML"],
    category: "platform",
    phase: "adopt",
  },

  // languages

  //adopt
  {
    name: "Python 3",
    discipline: ["ML"],
    category: "languages",
    phase: "adopt",
  },
  //   { "name": "Scala", "discipline": ["ML"], "category": "languages", "phase": "adopt" },
  { name: "Spark", discipline: ["ML"], category: "languages", phase: "adopt" },
  {
    name: "Pytorch",
    discipline: ["ML"],
    category: "languages",
    phase: "adopt",
  },
  { name: "Samza", discipline: ["ML"], category: "languages", phase: "adopt" },
  { name: "Deequ", discipline: ["ML"], category: "languages", phase: "adopt" },
  {
    name: "Dagster",
    discipline: ["ML"],
    category: "languages",
    phase: "adopt",
  },

  //hold
  //   { "name": "Tensorflow", "discipline": ["ML"], "category": "languages", "phase": "hold" },
  //   { "name": "Hadoop MapReduce", "discipline": ["ML"], "category": "languages", "phase": "hold" },
  //   { "name": "Pig", "discipline": ["ML"], "category": "languages", "phase": "hold" },
  { name: "Caffe", discipline: ["ML"], category: "languages", phase: "hold" },
];

const multiItems: Item[] = [
  {
    name: "Espresso",
    discipline: ["android", "QA"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "Mockito",
    discipline: ["android", "QA"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "MVVM",
    discipline: ["android", "iOS"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "Groovy",
    discipline: ["android", "backend", "QA"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "Barista",
    discipline: ["android", "QA"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "JUnit4",
    discipline: ["android", "QA"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "Tracer",
    discipline: ["android", "iOS", "QA"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "TeamCity",
    discipline: ["android", "backend", "frontend", "QA"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "Jira",
    discipline: ["android", "QA"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "Android Studio",
    discipline: ["android", "QA"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "Git",
    discipline: ["android", "iOS", "backend"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "ADB",
    discipline: ["android", "QA"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "Gradle",
    discipline: ["android", "backend", "frontend", "QA"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "Confluence",
    discipline: ["android", "QA"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "GrayLog",
    discipline: ["android", "frontend", "QA"],
    category: "tools",
    phase: "hold",
  },
  {
    name: "Android SDK",
    discipline: ["android", "QA"],
    category: "platform",
    phase: "adopt",
  },
  {
    name: "Kotlin",
    discipline: ["android", "backend", "QA"],
    category: "languages",
    phase: "adopt",
  },
  {
    name: "Java",
    discipline: ["android", "backend", "frontend", "QA"],
    category: "languages",
    phase: "adopt",
  },
  {
    name: "Reactive programming",
    discipline: ["iOS", "frontend", "backend"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "CI/CD",
    discipline: ["iOS", "backend", "QA"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "XCode",
    discipline: ["iOS", "QA"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "Fastlane",
    discipline: ["iOS", "QA"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "Swift",
    discipline: ["iOS", "QA"],
    category: "languages",
    phase: "adopt",
  },
  {
    name: "Ruby",
    discipline: ["iOS", "QA"],
    category: "languages",
    phase: "adopt",
  },
  {
    name: "SuperSet",
    discipline: ["ML"],
    category: "techniques",
    phase: "assess",
  },
  {
    name: "Catboost",
    discipline: ["ML"],
    category: "techniques",
    phase: "assess",
  },
  {
    name: "DataHub",
    discipline: ["ML"],
    category: "techniques",
    phase: "assess",
  },
  {
    name: "Hadoop MapReduce",
    discipline: ["ML"],
    category: "techniques",
    phase: "hold",
  },
  {
    name: "Pig",
    discipline: ["ML"],
    category: "techniques",
    phase: "hold",
  },
  {
    name: "Tensorflow",
    discipline: ["ML"],
    category: "techniques",
    phase: "hold",
  },
  {
    name: "Docker",
    discipline: ["ML", "backend", "frontend"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "Kafka",
    discipline: ["ML", "backend"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "S3",
    discipline: ["ML", "backend", "QA"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "Scala",
    discipline: ["ML", "backend"],
    category: "languages",
    phase: "adopt",
  },
  {
    name: "REST",
    discipline: ["backend", "frontend"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "Code review",
    discipline: ["backend", "QA"],
    category: "techniques",
    phase: "adopt",
  },
  {
    name: "GWT",
    discipline: ["backend", "frontend"],
    category: "techniques",
    phase: "hold",
  },
  {
    name: "Cassandra",
    discipline: ["backend", "QA"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "NGINX",
    discipline: ["backend", "frontend"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "jackson",
    discipline: ["backend", "QA"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "Portal Management System",
    discipline: ["backend", "QA"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "grafana",
    discipline: ["backend", "QA", "ML"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "Apache Zeppelin",
    discipline: ["backend", "QA", "ML"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "Tomcat",
    discipline: ["backend", "frontend"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "ant",
    discipline: ["backend", "frontend"],
    category: "tools",
    phase: "hold",
  },
  {
    name: "JavaScript",
    discipline: ["backend", "frontend"],
    category: "languages",
    phase: "adopt",
  },
  {
    name: "HTML",
    discipline: ["frontend", "QA"],
    category: "languages",
    phase: "adopt",
  },
  {
    name: "CSS",
    discipline: ["frontend", "QA"],
    category: "languages",
    phase: "adopt",
  },
  {
    name: "Jenkins",
    discipline: ["QA"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "Intellij IDEA",
    discipline: ["QA", "backend"],
    category: "tools",
    phase: "adopt",
  },
  {
    name: "Charles HTTP proxy",
    discipline: ["backend", "QA"],
    category: "tools",
    phase: "adopt",
  },
];

export const items: Item[] = [
  ...androidItems,
  ...iosItems,
  ...mlItems,
  ...backendItems,
  ...frontendItems,
  ...qaItems,
  ...multiItems,
];

