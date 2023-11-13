<script lang="ts">	

type phase = 'adopt' | 'trial' | 'assess' | 'hold';
type category = 'techniques' | 'tools' | 'platform' | 'languages';
type discipline = 'QA' | 'backend' | 'frontend' | 'iOS' | 'android' | 'ML ';

let types = ['QA', 'backend', 'frontend', 'iOS', 'android', 'ML '];

interface GroupPhaseItem {
    [phase: string]: Item[];
}

interface Item {
    name: string;
    discipline: discipline;
    category: category;
    phase: phase;
};

interface CategoryItem {
    name: category;
    title: string;
}

let activeSection: category | null = null;
let active = false;
let activeItem: Item | null = null;
let posX = 0;
let posY = 0;
let activeDiscipline: string | null = null;

const radius = 85;

const borders: Record<phase, number> = {
    adopt: radius,
    trial: radius + 72,
    assess: radius + 72 * 2,
    hold: radius + 72 * 3,
}

const categories: CategoryItem[] = [
    {
        name: 'techniques',
        title: 'Techniques >'
    },
    {
        name: 'tools',
        title: 'Tools >'
    },
    {
        name: 'platform',
        title: 'Platform >'
    },
    {
        name: 'languages',
        title: 'Languages &Frameworks >'
    }
];

const startY = 304;
const startX = 506;
const gapY = 75;
const firstGapY = 88;
const gapX = 194;
const commonGap = 10;

const rectangleBorders = {
    adopt: {
        techniques: {
            minY: startY + commonGap,
            maxY: startY + firstGapY - commonGap,
            minX: startX + 10,
            maxX: startX + gapX,
        },
        tools: {
            minY: startY + commonGap,
            maxY: startY + gapY - commonGap,
            minX: startX - commonGap,
            maxX: startX - gapX,
        },
        platform: {
            minY: startY - commonGap,
            maxY: startY - firstGapY + commonGap,
            minX: startX - commonGap,
            maxX: startX - gapX,
        },
        languages: {
            minY: startY - commonGap,
            maxY: startY - firstGapY + commonGap,
            minX: startX + commonGap,
            maxX: startX + gapX,
        },
    },
    trial: {
        techniques: {
            minY: startY + firstGapY,
            maxY: startY + firstGapY + gapY,
            minX: startX,
            maxX: startX + gapX,
        },
        tools: {
            minY: startY + firstGapY,
            maxY: startY + firstGapY + gapY,
            minX: startX,
            maxX: startX - gapX,
        },
        platform: {
            minY: startY - firstGapY,
            maxY: startY - firstGapY - gapY,
            minX: startX,
            maxX: startX - gapX,
        },
        languages: {
            minY: startY - firstGapY,
            maxY: startY - firstGapY - gapY,
            minX: startX,
            maxX: startX + gapX,
        },
    },
    assess: {
        techniques: {
            minY: startY + firstGapY + gapY,
            maxY: startY + firstGapY + gapY * 2,
            minX: startX,
            maxX: startX + gapX,
        },
        tools: {
            minY: startY + firstGapY + gapY,
            maxY: startY + firstGapY + gapY * 2,
            minX: startX,
            maxX: startX - gapX,
        },
        platform: {
            minY: startY - firstGapY - gapY,
            maxY: startY - firstGapY - gapY * 2,
            minX: startX,
            maxX: startX - gapX,
        },
        languages: {
            minY: startY - firstGapY - gapY,
            maxY: startY - firstGapY - gapY * 2,
            minX: startX,
            maxX: startX + gapX,
        },
    },
    hold: {
        techniques: {
            minY: startY + firstGapY + gapY * 2,
            maxY: startY + firstGapY + gapY * 3,
            minX: startX,
            maxX: startX + gapX,
        },
        tools: {
            minY: startY + firstGapY + gapY * 2,
            maxY: startY + firstGapY + gapY * 3,
            minX: startX,
            maxX: startX - gapX,
        },
        platform: {
            minY: startY - firstGapY - gapY * 2,
            maxY: startY - firstGapY - gapY * 3,
            minX: startX,
            maxX: startX - gapX,
        },
        languages: {
            minY: startY - firstGapY - gapY * 2,
            maxY: startY - firstGapY - gapY * 3,
            minX: startX,
            maxX: startX + gapX,
        },
    },
}

const circleBorders = {
    techniques: {
        minAngle: 0,
        maxAngle: Math.PI / 2,
        center: { centerX: 704, centerY: 304 },
    },
    tools: {
        minAngle: Math.PI / 2,
        maxAngle: Math.PI,
        center: { centerX: 307, centerY: 304 },
    },
    platform: {
        minAngle: Math.PI,
        maxAngle: 3 * Math.PI / 2,
        center: { centerX: 307, centerY: 304 },
    },
    languages: {
        minAngle: 3 * Math.PI / 2,
        maxAngle: 2 * Math.PI,
        center: { centerX: 704, centerY: 304 },
    },
};

const androidItems: Item[] = [
    { name: "Fresco", discipline: "android", category: "techniques", phase: "adopt" },
    { name: "RxJava 3", discipline: "android", category: "techniques", phase: "adopt" },
    { name: "WorkManager", discipline: "android", category: "techniques", phase: "adopt" },
    { name: "Kotlin Coroutines", discipline: "android", category: "techniques", phase: "adopt" },
    { name: "Kotlin Flow", discipline: "android", category: "techniques", phase: "adopt" },
    { name: "Room", discipline: "android", category: "techniques", phase: "adopt" },
    { name: "Dagger 2", discipline: "android", category: "techniques", phase: "adopt" },
    { name: "Espresso", discipline: "android", category: "techniques", phase: "adopt" },
    { name: "Mockito", discipline: "android", category: "techniques", phase: "adopt" },
    { name: "MVVM", discipline: "android", category: "techniques", phase: "adopt" },
    { name: "MVP", discipline: "android", category: "techniques", phase: "adopt" },
    { name: "Groovy", discipline: "android", category: "techniques", phase: "adopt" },
    { name: "Okhttp", discipline: "android", category: "techniques", phase: "adopt" },
    { name: "Barista", discipline: "android", category: "techniques", phase: "adopt" },
    { name: "Guava", discipline: "android", category: "techniques", phase: "adopt" },
    { name: "Feature-toggle", discipline: "android", category: "techniques", phase: "adopt" },
    { name: "VK Maps", discipline: "android", category: "techniques", phase: "adopt" },
    { name: "Multi-modules", discipline: "android", category: "techniques", phase: "adopt" },
    { name: "JUnit4", discipline: "android", category: "techniques", phase: "adopt" },
    { name: "Tracer", discipline: "android", category: "tools", phase: "adopt" },
    { name: "teamcity", discipline: "android", category: "tools", phase: "adopt" },
    { name: "Jira", discipline: "android", category: "tools", phase: "adopt" },
    { name: "android Studio", discipline: "android", category: "tools", phase: "adopt" },
    { name: "Git", discipline: "android", category: "tools", phase: "adopt" },
    { name: "ADB", discipline: "android", category: "tools", phase: "adopt" },
    { name: "Stash", discipline: "android", category: "tools", phase: "adopt" },
    { name: "Gradle", discipline: "android", category: "tools", phase: "adopt" },
    { name: "Confluence", discipline: "android", category: "tools", phase: "adopt" },
    { name: "android SDK", discipline: "android", category: "platform", phase: "adopt" },
    { name: "Google maps sdk(gms)", discipline: "android", category: "platform", phase: "adopt" },
    { name: "Kotlin", discipline: "android", category: "languages", phase: "adopt" },
    { name: "Java", discipline: "android", category: "languages", phase: "adopt" },
    { name: "MVI", discipline: "android", category: "techniques", phase: "trial" },
    { name: "Kotlin ML L", discipline: "android", category: "techniques", phase: "trial" },
    { name: "KSP", discipline: "android", category: "techniques", phase: "assess" },
    { name: "Compose", discipline: "android", category: "platform", phase: "assess" },
    { name: "Kotlin multiplatform mobile", discipline: "android", category: "platform", phase: "assess" },
    { name: "RxJava2", discipline: "android", category: "techniques", phase: "hold" },
    { name: "Firebase Crashlytics", discipline: "android", category: "techniques", phase: "hold" },
];

const iosItems: Item[] = [
    { name: "Многомодульность", discipline: "iOS", category: "techniques", phase: "adopt" },
    { name: "Reactive programming", discipline: "iOS", category: "techniques", phase: "adopt" },
    { name: "MVVM", discipline: "iOS", category: "techniques", phase: "adopt" },
    { name: "Declarative programming", discipline: "iOS", category: "techniques", phase: "adopt" },
    { name: "UI автотесты", discipline: "iOS", category: "techniques", phase: "adopt" },
    { name: "Remote feature flags", discipline: "iOS", category: "techniques", phase: "adopt" },
    { name: "CI/CD", discipline: "iOS", category: "techniques", phase: "adopt" },
    { name: "Демо приложение UI", discipline: "iOS", category: "techniques", phase: "adopt" },
    { name: "XCode", discipline: "iOS", category: "tools", phase: "adopt" },
    { name: "Git", discipline: "iOS", category: "tools", phase: "adopt" },
    { name: "CocoapoML ", discipline: "iOS", category: "tools", phase: "adopt" },
    { name: "Fastlane", discipline: "iOS", category: "tools", phase: "adopt" },
    { name: "Firebase", discipline: "iOS", category: "tools", phase: "adopt" },
    { name: "Tracer (внутреннее решение)", discipline: "iOS", category: "tools", phase: "adopt" },
    { name: "Appcenter", discipline: "iOS", category: "tools", phase: "adopt" },
    { name: "SwiftLint", discipline: "iOS", category: "tools", phase: "adopt" },
    { name: "SwiftFormat", discipline: "iOS", category: "tools", phase: "adopt" },
    { name: "Swift", discipline: "iOS", category: "languages", phase: "adopt" },
    { name: "Objective-c", discipline: "iOS", category: "languages", phase: "adopt" },
    { name: "Ruby", discipline: "iOS", category: "languages", phase: "adopt" },
    { name: "JSON", discipline: "iOS", category: "languages", phase: "adopt" },
    { name: "XML", discipline: "iOS", category: "languages", phase: "adopt" },
    { name: "ReactiveSwift/ReactiveCocoa", discipline: "iOS", category: "languages", phase: "adopt" },
    { name: "Lottie", discipline: "iOS", category: "languages", phase: "adopt" },
    { name: "Foundation/UIKit", discipline: "iOS", category: "languages", phase: "adopt" },
    { name: "Snapkit", discipline: "iOS", category: "languages", phase: "adopt" },
    { name: "CoreData/YAPDatabase", discipline: "iOS", category: "languages", phase: "adopt" },
    { name: "async/await", discipline: "iOS", category: "languages", phase: "assess" },
    { name: "Combine", discipline: "iOS", category: "languages", phase: "assess" },
    { name: "SwiftUI", discipline: "iOS", category: "languages", phase: "assess" },
    { name: "DiffableDataSources", discipline: "iOS", category: "languages", phase: "hold" },
    { name: "ReactiveObjC", discipline: "iOS", category: "languages", phase: "hold" },
    { name: "IGListKit", discipline: "iOS", category: "languages", phase: "hold" },
    { name: "Masonry", discipline: "iOS", category: "languages", phase: "hold" },
]

const dataScienceItems: Item[] = [
    { name: "Hadoop ecosystem", discipline: "ML ", category: "platform", phase: "adopt" },
    { name: "Python 3 ", discipline: "ML ", category: "languages", phase: "adopt" },
    { name: "Scala", discipline: "ML ", category: "languages", phase: "adopt" },
    { name: "Spark", discipline: "ML ", category: "languages", phase: "adopt" },
    { name: "Pytorch", discipline: "ML ", category: "languages", phase: "adopt" },
    { name: "Samza", discipline: "ML ", category: "languages", phase: "adopt" },
    { name: "Data quality ensuring", discipline: "ML ", category: "techniques", phase: "trial" },
    { name: "Deequ", discipline: "ML ", category: "techniques", phase: "trial" },
    { name: "Deequ", discipline: "ML ", category: "languages", phase: "trial" },
    { name: "DataHub", discipline: "ML ", category: "techniques", phase: "assess" },
    { name: "SuperSet", discipline: "ML ", category: "techniques", phase: "assess" },
    { name: "Catboost", discipline: "ML ", category: "techniques", phase: "assess" },
    { name: "Catboost", discipline: "ML ", category: "tools", phase: "assess" },
    { name: "SuperSet", discipline: "ML ", category: "tools", phase: "assess" },
    { name: "DataHub", discipline: "ML ", category: "tools", phase: "assess" },
    { name: "Hadoop MapReduce", discipline: "ML ", category: "techniques", phase: "hold" },
    { name: "Pig", discipline: "ML ", category: "techniques", phase: "hold" },
    { name: "Tensorflow", discipline: "ML ", category: "techniques", phase: "hold" },
    { name: "Annoy", discipline: "ML ", category: "tools", phase: "hold" },
    { name: "Mahout", discipline: "ML ", category: "tools", phase: "hold" },
    { name: "Tensorflow", discipline: "ML ", category: "languages", phase: "hold" },
    { name: "Hadoop MapReduce", discipline: "ML ", category: "languages", phase: "hold" },
    { name: "Pig", discipline: "ML ", category: "languages", phase: "hold" },
    { name: "Caffe", discipline: "ML ", category: "languages", phase: "hold" },
]

const backendItems: Item[] = [
    { name: "Highload", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "BigData", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "CI/CD", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "Online updates", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "NoSQL storages", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "Smart Monitoring", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "High Availability", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "CDN", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "Ractive Programming", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "Offheap Caching", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "RPC", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "C*One NewSQL", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "One-cloud (используется только внутри)", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "One-queue (используется только внутри)", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "gradle", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "ivy", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "Project Management System (a.k.a PMS)", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "one-cloud", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "one-nio", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "offheap cache (one-dcache)", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "Quartz job scheduler", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "MSSQL", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "kafka", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "async-profiler", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "tomcat", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "nginx", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "angular", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "graalvm", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "junit", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "jackson", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "Java", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "Spring", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "Kafka", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "Zookeeper", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "async-profiler", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "git", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "Apache Spark", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "Apache Airflow", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "Apache Hadoop", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "PowerDNS", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "Linux Virtual Server", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "Docker", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "one-remote (используется только внутри)", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "TeamCity", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "Graylog", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "microservices", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "async profiler", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "Spring Framework", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "Apache Cassandra", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "REST", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "JSON", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "OAuth", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "NGINX", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "NewSQL", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "Kafka", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "Spring", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "Lucene", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "SOLID", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "DRY", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "offheap cache", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "async processing", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "batch processing", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "actor model", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "NoSql", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "Voldemort", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "NewSql", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "C-one", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "one-queue", discipline: "backend", category: "techniques", phase: "adopt" },
    { name: "Cassandra", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "Design review", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "Code review", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "one-remote, one-nio для проектирования интерфейсов (используется только внутри)", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "Kanban", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "IntellyJ IDEA", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "Charles HTTP proxy", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "SdkMan", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "Ant", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "Ivy", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "Gradle", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "Git", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "C*One NewSQL", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "one-dcache", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "one-queue", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "S3", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "OBS", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "OCS", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "Quartz job scheduler", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "voldemort", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "kafka", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "async-profiler", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "nginx", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "junit", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "jackson", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "Portal Management System", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "TeamCity", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "DWH", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "grafana", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "graylog+elasticsearch", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "zeppelin", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "QUIC", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "Docker", discipline: "backend", category: "tools", phase: "adopt" },
    { name: "one-cloud", discipline: "backend", category: "platform", phase: "adopt" },
    { name: "Java", discipline: "backend", category: "platform", phase: "adopt" },
    { name: "Cassandra ", discipline: "backend", category: "platform", phase: "adopt" },
    { name: "Spring", discipline: "backend", category: "platform", phase: "adopt" },
    { name: "One-cloud (используется только внутри)", discipline: "backend", category: "platform", phase: "adopt" },
    { name: "One-queue (используется только внутри)", discipline: "backend", category: "platform", phase: "adopt" },
    { name: "Kafka", discipline: "backend", category: "platform", phase: "adopt" },
    { name: "Zookeeper", discipline: "backend", category: "platform", phase: "adopt" },
    { name: "async-profiler", discipline: "backend", category: "platform", phase: "adopt" },
    { name: "git", discipline: "backend", category: "platform", phase: "adopt" },
    { name: "Apache Spark", discipline: "backend", category: "platform", phase: "adopt" },
    { name: "Apache Airflow", discipline: "backend", category: "platform", phase: "adopt" },
    { name: "Apache Hadoop", discipline: "backend", category: "platform", phase: "adopt" },
    { name: "PowerDNS", discipline: "backend", category: "platform", phase: "adopt" },
    { name: "Linux Virtual Server", discipline: "backend", category: "platform", phase: "adopt" },
    { name: "Docker", discipline: "backend", category: "platform", phase: "adopt" },
    { name: "TeamCity", discipline: "backend", category: "platform", phase: "adopt" },
    { name: "Graylog", discipline: "backend", category: "platform", phase: "adopt" },
    { name: "JRE", discipline: "backend", category: "platform", phase: "adopt" },
    { name: "Tomcat", discipline: "backend", category: "platform", phase: "adopt" },
    { name: "Java", discipline: "backend", category: "languages", phase: "adopt" },
    { name: "spring", discipline: "backend", category: "languages", phase: "adopt" },
    { name: "javascript", discipline: "backend", category: "languages", phase: "adopt" },
    { name: "C++", discipline: "backend", category: "languages", phase: "adopt" },
    { name: "python", discipline: "backend", category: "languages", phase: "adopt" },
    { name: "WebSocket - частично прошло тестирование", discipline: "backend", category: "techniques", phase: "trial" },
    { name: "CBOR", discipline: "backend", category: "techniques", phase: "trial" },
    { name: "Streaming API", discipline: "backend", category: "techniques", phase: "trial" },
    { name: "Swagger", discipline: "backend", category: "techniques", phase: "assess" },
    { name: "Rust", discipline: "backend", category: "languages", phase: "assess" },
    { name: "Go", discipline: "backend", category: "languages", phase: "assess" },
    { name: "GWT", discipline: "backend", category: "techniques", phase: "hold" },
    { name: "ant", discipline: "backend", category: "techniques", phase: "hold" },
    { name: "MS SQL", discipline: "backend", category: "techniques", phase: "hold" },
    { name: "Voldemort", discipline: "backend", category: "techniques", phase: "hold" },
    { name: "Adobe Flash", discipline: "backend", category: "techniques", phase: "hold" },
    { name: "XML", discipline: "backend", category: "techniques", phase: "hold" },
    { name: "ant", discipline: "backend", category: "tools", phase: "hold" },
    { name: "MSSQL", discipline: "backend", category: "tools", phase: "hold" },
    { name: "MS SQL", discipline: "backend", category: "platform", phase: "hold" },
    { name: "Voldemort", discipline: "backend", category: "platform", phase: "hold" },
    { name: "Adobe Flash", discipline: "backend", category: "languages", phase: "hold" },
]

const frontendItems: Item[] = [
    { name: "Reactive programming", discipline: "frontend", category: "techniques", phase: "adopt" },
    { name: "Server-side rendering", discipline: "frontend", category: "techniques", phase: "adopt" },
    { name: "backend for frontend", discipline: "frontend", category: "techniques", phase: "adopt" },
    { name: "REST", discipline: "frontend", category: "techniques", phase: "adopt" },
    { name: "Endorphin", discipline: "frontend", category: "techniques", phase: "adopt" },
    { name: "Redux", discipline: "frontend", category: "techniques", phase: "adopt" },
    { name: "TypeScript", discipline: "frontend", category: "techniques", phase: "adopt" },
    { name: "SCSS", discipline: "frontend", category: "techniques", phase: "adopt" },
    { name: "React", discipline: "frontend", category: "techniques", phase: "adopt" },
    { name: "Mobx", discipline: "frontend", category: "techniques", phase: "adopt" },
    { name: "Webpack", discipline: "frontend", category: "techniques", phase: "adopt" },
    { name: "Jest", discipline: "frontend", category: "techniques", phase: "adopt" },
    { name: "Lerna", discipline: "frontend", category: "techniques", phase: "adopt" },
    { name: "PostCSS", discipline: "frontend", category: "techniques", phase: "adopt" },
    { name: "Stylus", discipline: "frontend", category: "techniques", phase: "adopt" },
    { name: "Gradle", discipline: "frontend", category: "techniques", phase: "adopt" },
    { name: "ESlint", discipline: "frontend", category: "techniques", phase: "adopt" },
    { name: "Yeoman", discipline: "frontend", category: "techniques", phase: "adopt" },
    { name: "Docker", discipline: "frontend", category: "techniques", phase: "adopt" },
    { name: "Monorepo", discipline: "frontend", category: "techniques", phase: "adopt" },
    { name: "CSS Modules", discipline: "frontend", category: "techniques", phase: "adopt" },
    { name: "jackson", discipline: "frontend", category: "tools", phase: "adopt" },
    { name: "angular", discipline: "frontend", category: "tools", phase: "adopt" },
    { name: "one-desktop", discipline: "frontend", category: "tools", phase: "adopt" },
    { name: "Highstock js", discipline: "frontend", category: "tools", phase: "adopt" },
    { name: "Webpack", discipline: "frontend", category: "tools", phase: "adopt" },
    { name: "StoryBook", discipline: "frontend", category: "tools", phase: "adopt" },
    { name: "Babel", discipline: "frontend", category: "tools", phase: "adopt" },
    { name: "CSS-modules", discipline: "frontend", category: "tools", phase: "adopt" },
    { name: "Eslint", discipline: "frontend", category: "tools", phase: "adopt" },
    { name: "PostCSS", discipline: "frontend", category: "tools", phase: "adopt" },
    { name: "Grunt", discipline: "frontend", category: "tools", phase: "adopt" },
    { name: "Gradle", discipline: "frontend", category: "tools", phase: "adopt" },
    { name: "VSCode", discipline: "frontend", category: "tools", phase: "adopt" },
    { name: "Git", discipline: "frontend", category: "tools", phase: "adopt" },
    { name: "Sublime Text", discipline: "frontend", category: "tools", phase: "adopt" },
    { name: "GraalVM", discipline: "frontend", category: "platform", phase: "adopt" },
    { name: "Tomcat", discipline: "frontend", category: "platform", phase: "adopt" },
    { name: "nginx", discipline: "frontend", category: "platform", phase: "adopt" },
    { name: "Github", discipline: "frontend", category: "platform", phase: "adopt" },
    { name: "npm", discipline: "frontend", category: "platform", phase: "adopt" },
    { name: "Java", discipline: "frontend", category: "languages", phase: "adopt" },
    { name: "TypeScript", discipline: "frontend", category: "languages", phase: "adopt" },
    { name: "JavaScript", discipline: "frontend", category: "languages", phase: "adopt" },
    { name: "React", discipline: "frontend", category: "languages", phase: "adopt" },
    { name: "HTML", discipline: "frontend", category: "languages", phase: "adopt" },
    { name: "CSS", discipline: "frontend", category: "languages", phase: "adopt" },
    { name: "jquery", discipline: "frontend", category: "languages", phase: "adopt" },
    { name: "RDK", discipline: "frontend", category: "languages", phase: "adopt" },
    { name: "RactiveJS", discipline: "frontend", category: "languages", phase: "adopt" },
    { name: "Endorphin", discipline: "frontend", category: "languages", phase: "adopt" },
    { name: "PWA", discipline: "frontend", category: "techniques", phase: "trial" },
    { name: "Vite", discipline: "frontend", category: "techniques", phase: "trial" },
    { name: "esbuild", discipline: "frontend", category: "techniques", phase: "trial" },
    { name: "Endorphin2", discipline: "frontend", category: "techniques", phase: "assess" },
    { name: "Stylus", discipline: "frontend", category: "tools", phase: "assess" },
    { name: "Rust", discipline: "frontend", category: "languages", phase: "assess" },
    { name: "Go", discipline: "frontend", category: "languages", phase: "assess" },
    { name: "Redux", discipline: "frontend", category: "techniques", phase: "hold" },
    { name: "GWT", discipline: "frontend", category: "tools", phase: "hold" },
    { name: "ant", discipline: "frontend", category: "tools", phase: "hold" },
]

const qaItems: Item[] = [
    { name: "API автотесты", discipline: "QA", category: "techniques", phase: "adopt" },
    { name: "UI автотесты/E2E автотесты", discipline: "QA", category: "techniques", phase: "adopt" },
    { name: "CI/CD", discipline: "QA", category: "techniques", phase: "adopt" },
    { name: "Code review", discipline: "QA", category: "techniques", phase: "adopt" },
    { name: "Code style", discipline: "QA", category: "techniques", phase: "adopt" },
    { name: "Intellij IDEA", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "android Studio", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "XCode", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "Stash/BitBucket - Git", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "TeamCity", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "Jenkins", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "JUnit5", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "JUnit4", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "Gradle", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "Maven", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "mcc", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "one-builder", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "one-conf", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "S3", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "mainframer", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "ADB", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "mongodb", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "spring", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "guice", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "jackson", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "dropwizard", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "Mockito", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "quartz", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "Charles", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "Fastlane", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "Tracer", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "Portal Management System", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "PTS", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "Jira", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "Confluence", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "Test IT", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "curl", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "postman", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "swagger", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "REST API", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "DevTool", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "GrayLog", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "charts", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "grafana", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "bash/terminal", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "Регулярные выражения", discipline: "QA", category: "tools", phase: "adopt" },
    { name: "android SDK", discipline: "QA", category: "platform", phase: "adopt" },
    { name: "one-cloud", discipline: "android", category: "platform", phase: "adopt" },
    { name: "Kotlin", discipline: "QA", category: "languages", phase: "adopt" },
    { name: "Java", discipline: "QA", category: "languages", phase: "adopt" },
    { name: "Swift", discipline: "QA", category: "languages", phase: "adopt" },
    { name: "Groovy", discipline: "QA", category: "languages", phase: "adopt" },
    { name: "Selenium", discipline: "QA", category: "languages", phase: "adopt" },
    { name: "Selenide", discipline: "QA", category: "languages", phase: "adopt" },
    { name: "Espresso", discipline: "QA", category: "languages", phase: "adopt" },
    { name: "UIAutomator", discipline: "QA", category: "languages", phase: "adopt" },
    { name: "XCUI", discipline: "QA", category: "languages", phase: "adopt" },
    { name: "KIF", discipline: "QA", category: "languages", phase: "adopt" },
    { name: "AssertJ", discipline: "QA", category: "languages", phase: "adopt" },
    { name: "Hamcrest", discipline: "QA", category: "languages", phase: "adopt" },
    { name: "Kaspresso", discipline: "QA", category: "languages", phase: "assess" },
    { name: "Barista", discipline: "QA", category: "languages", phase: "hold" },
]

const items: Item[] = [...androidItems, ...iosItems, ...dataScienceItems, ...backendItems, ...frontendItems, ...qaItems];

const groupedItemsByPhase: GroupPhaseItem = {};

items.forEach((item) => {
    if (!groupedItemsByPhase[item.phase]) {
        groupedItemsByPhase[item.phase] = [];
    }
    groupedItemsByPhase[item.phase].push(item);
});

let phases: string[] = Object.keys(groupedItemsByPhase);

const getRandomPos = (a: number, b: number) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  const randomDecimal = Math.random();

  const number = Math.floor(min + randomDecimal * (max - min + 1));

  return number;
};

const getRandomCirclePos = (item: Item) => {
    let radius = borders[item.phase];
    const { centerX, centerY } = circleBorders[item.category].center;
    const minAngle = circleBorders[item.category].minAngle;
    const maxAngle = circleBorders[item.category].maxAngle;
    const alpha = minAngle + Math.random() * (maxAngle - minAngle);
    const x = radius * Math.cos(alpha);
    const y = radius * Math.sin(alpha);

    let distanceFromCenter1 = getRandomPos(radius, radius - 60);
    
    const vectorLength = Math.sqrt(x * x + y * y);
    const scale = distanceFromCenter1 / vectorLength;

    const newX = centerX + x * scale;
    const newY = centerY + y * scale;

    return { x: newX, y: newY, alpha };
}

function getRandomBoolean() {
  return Math.random() < 0.3;
}

function getRandomSquarePos(item: Item) {
    const x = getRandomPos(rectangleBorders[item.phase][item.category].minX, rectangleBorders[item.phase][item.category].maxX)
    const y = getRandomPos(rectangleBorders[item.phase][item.category].minY, rectangleBorders[item.phase][item.category].maxY)
    
    return {x, y}
}

function generateRandomPoint(item: Item) {
    if (getRandomBoolean()) {
        return getRandomCirclePos(item);
    } else {
        return getRandomSquarePos(item);
    }
}

const onMouseEnter = (evt: MouseEvent, item: Item) => {
    posX = evt.x;
    posY = evt.y;
    activeItem = item;
    active = true
};

const onMouseLeave = () => {
    active = false;
    activeItem = null;
};

</script>

<div class="techradar" class:column1={activeSection}>
    <aside>
        <h1 class="text-title-1">{ activeSection || 'TechRadar' }</h1>
        <div class="stack">
            {#each types as type}
                <div class="stack-item text-title-3" aria-hidden on:click={() => activeDiscipline === type ? activeDiscipline = null : activeDiscipline = type} class:disabled={activeItem !== null && activeItem?.discipline !== type || activeDiscipline !== null && activeDiscipline !== type}> {type} </div>
            {/each}
        </div>
        {#if !activeSection}
            <div class="section-container">
                {#each categories as category}
                    <div class="category text-title-2" aria-hidden on:click={() => activeSection = category.name} class:disabled={activeItem !== null && activeItem?.category !== category.name}>{ category.title }</div>
                {/each}
            </div>
        {/if} 
    </aside>
    {#if activeSection}
        <div class="columns">
            {#each phases as phase (phase)}
                <div class="column" style="width: {100 / phases.length}%;">
                <h2 class="text-title-3">{phase}</h2>
                <ul>
                    <!-- (item.name) -->
                    {#each groupedItemsByPhase[phase] as item} 
                        {#if item.category === activeSection}
                            <li class="text-body" class:disabled={activeDiscipline !== null && item.discipline !== activeDiscipline}>{item.name}</li>
                        {/if}
                    {/each}
                </ul>
                </div>
            {/each}
        </div>
    {:else}
        <svg xmlns="http://www.w3.org/2000/svg" width='100%' height="608" viewBox="0 0 1011 608" fill="none">
            <path class:disabledLine={activeItem !== null} d="M506 1L506 608" stroke="black"/>
            <path class:disabledLine={activeItem !== null} d="M1011 304L3.61204e-05 304" stroke="black"/>
            <rect x="0.5" y="0.5" width="1010" height="607" rx="303.5" stroke="#BABABA"/>
            <rect class:disabledLine={activeItem !== null && activeItem.phase !== 'assess'} x="71.5" y="73.5" width="868" height="461" rx="230.5" stroke="black"/>
            <rect class:disabledLine={activeItem !== null && activeItem.phase !== 'trial'} x="143.5" y="143.5" width="724" height="321" rx="160.5" stroke="black"/>
            <rect class:disabledLine={activeItem !== null && activeItem.phase !== 'adopt'} x="215.5" y="216.5" width="580" height="175" rx="87.5" stroke="black"/>
            <path d="M522.128 379.816H522.528V381H521.904C521.152 381 520.736 380.664 520.624 380.024C519.808 380.776 518.736 381.128 517.696 381.128C516.016 381.128 514.528 380.312 514.528 378.504C514.528 376.856 515.792 375.992 517.616 375.992H520.592C520.576 374.808 520.08 373.704 518.384 373.704C517.36 373.704 516.56 374.072 515.936 374.92L514.944 374.232C515.568 373.24 516.608 372.568 518.336 372.568C520.928 372.568 521.808 374.168 521.808 376.024V379.464C521.808 379.688 521.936 379.816 522.128 379.816ZM515.792 378.52C515.792 379.448 516.528 379.992 517.776 379.992C518.944 379.992 519.92 379.56 520.592 378.888V377.096H517.664C516.4 377.096 515.792 377.656 515.792 378.52ZM530.231 373.384V369.64H531.479V381H530.279V380.12C529.591 380.712 528.599 381.128 527.479 381.128C525.287 381.128 523.623 379.432 523.623 376.888C523.623 374.264 525.447 372.568 527.863 372.568C528.711 372.568 529.543 372.872 530.231 373.384ZM524.871 376.84C524.871 378.872 526.055 379.976 527.623 379.976C528.663 379.976 529.591 379.544 530.231 378.92V374.6C529.575 374.04 528.759 373.736 527.927 373.736C526.167 373.736 524.871 374.888 524.871 376.84ZM537.457 381.128C535.073 381.128 533.201 379.464 533.201 376.856C533.201 374.248 535.073 372.568 537.457 372.568C539.841 372.568 541.713 374.248 541.713 376.856C541.713 379.464 539.841 381.128 537.457 381.128ZM537.457 379.992C539.217 379.992 540.465 378.84 540.465 376.856C540.465 374.872 539.217 373.704 537.457 373.704C535.697 373.704 534.449 374.872 534.449 376.856C534.449 378.84 535.697 379.992 537.457 379.992ZM547.449 372.568C549.657 372.568 551.321 374.216 551.321 376.648C551.321 379.384 549.513 381.128 547.129 381.128C546.345 381.128 545.449 380.856 544.713 380.376V384.04H543.465V372.712H544.713V373.624C545.417 372.968 546.393 372.568 547.449 372.568ZM547.033 379.976C548.793 379.976 550.073 378.824 550.073 376.744C550.073 374.824 548.873 373.736 547.321 373.736C546.281 373.736 545.353 374.168 544.713 374.776V379.256C545.385 379.688 546.217 379.976 547.033 379.976ZM557.078 379.432L557.782 380.296C557.478 380.744 556.79 381.128 555.91 381.128C554.438 381.128 553.638 380.2 553.638 378.712V373.832H551.894V372.712H553.686L553.926 370.584H554.886V372.712H557.286V373.832H554.886V378.712C554.886 379.48 555.222 379.992 555.958 379.992C556.502 379.992 556.806 379.768 557.078 379.432Z" fill="black"/>
            <path d="M519.344 452.432L520.048 453.296C519.744 453.744 519.056 454.128 518.176 454.128C516.704 454.128 515.904 453.2 515.904 451.712V446.832H514.16V445.712H515.952L516.192 443.584H517.152V445.712H519.552V446.832H517.152V451.712C517.152 452.48 517.488 452.992 518.224 452.992C518.768 452.992 519.072 452.768 519.344 452.432ZM525.227 445.568C525.835 445.568 526.267 445.664 526.475 445.744L526.187 447.168C525.771 446.992 525.451 446.928 524.955 446.928C523.979 446.928 523.211 447.296 522.619 447.936V454H521.371V445.712H522.619V446.768C523.323 446.032 524.187 445.568 525.227 445.568ZM528.246 445.104C527.718 445.104 527.35 444.72 527.35 444.208C527.35 443.696 527.718 443.328 528.246 443.328C528.774 443.328 529.142 443.696 529.142 444.208C529.142 444.72 528.774 445.104 528.246 445.104ZM528.87 454H527.638V445.712H528.87V454ZM538.237 452.816H538.637V454H538.013C537.261 454 536.845 453.664 536.733 453.024C535.917 453.776 534.845 454.128 533.805 454.128C532.125 454.128 530.637 453.312 530.637 451.504C530.637 449.856 531.901 448.992 533.725 448.992H536.701C536.685 447.808 536.189 446.704 534.493 446.704C533.469 446.704 532.669 447.072 532.045 447.92L531.053 447.232C531.677 446.24 532.717 445.568 534.445 445.568C537.037 445.568 537.917 447.168 537.917 449.024V452.464C537.917 452.688 538.045 452.816 538.237 452.816ZM531.901 451.52C531.901 452.448 532.637 452.992 533.885 452.992C535.053 452.992 536.029 452.56 536.701 451.888V450.096H533.773C532.509 450.096 531.901 450.656 531.901 451.52ZM541.541 454H540.293V442.64H541.541V454Z" fill="black"/>
            <path d="M519.088 588.568C521.296 588.568 522.448 589.816 522.448 592.136V597H521.2V592.152C521.2 590.504 520.464 589.768 518.896 589.768C517.984 589.768 517.072 590.168 516.4 590.792V597H515.152V585.64H516.4V589.64C517.184 588.936 518.176 588.568 519.088 588.568ZM528.348 597.128C525.964 597.128 524.092 595.464 524.092 592.856C524.092 590.248 525.964 588.568 528.348 588.568C530.732 588.568 532.604 590.248 532.604 592.856C532.604 595.464 530.732 597.128 528.348 597.128ZM528.348 595.992C530.108 595.992 531.356 594.84 531.356 592.856C531.356 590.872 530.108 589.704 528.348 589.704C526.588 589.704 525.34 590.872 525.34 592.856C525.34 594.84 526.588 595.992 528.348 595.992ZM535.603 597H534.355V585.64H535.603V597ZM543.934 589.384V585.64H545.182V597H543.982V596.12C543.294 596.712 542.302 597.128 541.182 597.128C538.99 597.128 537.326 595.432 537.326 592.888C537.326 590.264 539.15 588.568 541.566 588.568C542.414 588.568 543.246 588.872 543.934 589.384ZM538.574 592.84C538.574 594.872 539.758 595.976 541.326 595.976C542.366 595.976 543.294 595.544 543.934 594.92V590.6C543.278 590.04 542.462 589.736 541.63 589.736C539.87 589.736 538.574 590.888 538.574 592.84Z" fill="#BABABA"/>
            <path d="M522.128 522.816H522.528V524H521.904C521.152 524 520.736 523.664 520.624 523.024C519.808 523.776 518.736 524.128 517.696 524.128C516.016 524.128 514.528 523.312 514.528 521.504C514.528 519.856 515.792 518.992 517.616 518.992H520.592C520.576 517.808 520.08 516.704 518.384 516.704C517.36 516.704 516.56 517.072 515.936 517.92L514.944 517.232C515.568 516.24 516.608 515.568 518.336 515.568C520.928 515.568 521.808 517.168 521.808 519.024V522.464C521.808 522.688 521.936 522.816 522.128 522.816ZM515.792 521.52C515.792 522.448 516.528 522.992 517.776 522.992C518.944 522.992 519.92 522.56 520.592 521.888V520.096H517.664C516.4 520.096 515.792 520.656 515.792 521.52ZM527.111 524.128C525.095 524.128 523.847 523.12 523.383 522.128L524.423 521.392C524.887 522.336 525.911 522.992 527.079 522.992C528.583 522.992 529.111 522.448 529.111 521.68C529.111 519.616 523.959 520.784 523.959 517.808C523.959 516.592 524.983 515.568 526.967 515.568C528.599 515.568 529.751 516.288 530.311 517.376L529.287 518.048C528.759 517.136 527.991 516.704 526.967 516.704C525.639 516.704 525.207 517.216 525.207 517.808C525.207 519.664 530.359 518.608 530.359 521.744C530.359 523.12 529.175 524.128 527.111 524.128ZM535.018 524.128C533.002 524.128 531.754 523.12 531.29 522.128L532.33 521.392C532.794 522.336 533.818 522.992 534.986 522.992C536.49 522.992 537.018 522.448 537.018 521.68C537.018 519.616 531.866 520.784 531.866 517.808C531.866 516.592 532.89 515.568 534.874 515.568C536.506 515.568 537.658 516.288 538.218 517.376L537.194 518.048C536.666 517.136 535.898 516.704 534.874 516.704C533.546 516.704 533.114 517.216 533.114 517.808C533.114 519.664 538.266 518.608 538.266 521.744C538.266 523.12 537.082 524.128 535.018 524.128ZM547.788 519.792C547.788 520.064 547.772 520.224 547.74 520.416H540.7C540.924 522.064 542.14 522.992 543.66 522.992C544.604 522.992 545.564 522.656 546.14 521.664L547.26 522.304C546.54 523.472 545.26 524.128 543.724 524.128C541.292 524.128 539.436 522.512 539.436 519.856C539.436 517.248 541.34 515.568 543.644 515.568C546.044 515.568 547.788 517.312 547.788 519.792ZM543.676 516.704C542.108 516.704 540.924 517.648 540.7 519.296H546.492C546.364 517.728 545.212 516.704 543.676 516.704ZM552.408 524.128C550.392 524.128 549.144 523.12 548.68 522.128L549.72 521.392C550.184 522.336 551.208 522.992 552.376 522.992C553.88 522.992 554.408 522.448 554.408 521.68C554.408 519.616 549.256 520.784 549.256 517.808C549.256 516.592 550.28 515.568 552.264 515.568C553.896 515.568 555.048 516.288 555.608 517.376L554.584 518.048C554.056 517.136 553.288 516.704 552.264 516.704C550.936 516.704 550.504 517.216 550.504 517.808C550.504 519.664 555.656 518.608 555.656 521.744C555.656 523.12 554.472 524.128 552.408 524.128ZM560.314 524.128C558.298 524.128 557.05 523.12 556.586 522.128L557.626 521.392C558.09 522.336 559.114 522.992 560.282 522.992C561.786 522.992 562.314 522.448 562.314 521.68C562.314 519.616 557.162 520.784 557.162 517.808C557.162 516.592 558.186 515.568 560.17 515.568C561.802 515.568 562.954 516.288 563.514 517.376L562.49 518.048C561.962 517.136 561.194 516.704 560.17 516.704C558.842 516.704 558.41 517.216 558.41 517.808C558.41 519.664 563.562 518.608 563.562 521.744C563.562 523.12 562.378 524.128 560.314 524.128Z" fill="black"/>
        
            {#each items as item}
                {@const pos = generateRandomPoint(item)}
                <circle aria-hidden="true" class:hidden={activeDiscipline !== null && activeDiscipline !== item.discipline} class:disabled={activeItem !== null && activeItem.name !== item.name} on:mouseenter={evt => onMouseEnter(evt, item)} on:mouseleave={onMouseLeave} class={`circle ${item.category}`} cx={pos.x} cy={pos.y} r="4"/>
            {/each}
        </svg>
    {/if}

    {#if active}
        <div class="hover-item" style={`left: ${posX + 8}px; top: ${posY - 70}px`}>
            <div class="text-title-3"> { activeItem?.name } </div>
            <div class="text-body"> { activeItem?.discipline } </div>
            <div> {activeItem?.phase} </div>
        </div>
    {/if} 
    
    {#if activeSection}
        <button class="text-button" on:click={() => {activeSection = null}}>
            закрыть
        </button>
    {/if}
</div>

<style lang="scss">
    @import "../styles/global.scss";
    svg {
        position: relative;
    }
    .techradar {
        display: flex;
        color: black;
        padding: 80px 16px 16px 16px;
    }
    .stack {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 16px;
        margin-top: 16px;
        cursor: pointer;
        width: 300px;
    }
    .circle {
        position: absolute;
    }
    .circle.hidden {
        display: none;
    }
    .circle, .category, .stack-item {
        transition: opacity 0.3s;
    }
    .circle.disabled, .category.disabled, .stack-item.disabled {
        opacity: 0.5;
    }
    .circle.languages {
        fill: black;
    }
    .circle.tools {
        fill: #1EBB55;
    }
    .circle.techniques {
        fill: #FF7700;
    }
    .circle.platform {
        fill: #0099FF;
    }
    .hover-item {
        position: absolute;
        background: black;
        color: white;
        padding: 8px 12px;
    }
    .category {
        cursor: pointer;
    }
    .section-container {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin-top: 64px;
    }
    .disabled {
        opacity: 0.5;
    }
    .columns {
        display: flex;
    }

    .column {
        padding: 10px;
    }
    
    .column1 {
        flex-direction: column;
    }
    button {
        position: fixed;
        width: 164px;
        height: 164px;
        border-radius: 100%;
        background-color: $c-gray;
        right: 20px;
        bottom: 90px;
    }
    .disabledLine {
        stroke: #BABABA;
    }
    rect, path {
        transition: all 0.3s;
    }
</style>