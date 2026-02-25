export const MOCK_STUDENTS = [
    {
        id: 1,
        name: "Rahul Sharma",
        rollNumber: "CS2020-045",
        department: "Computer Science",
        cgpa: 8.7,
        skills: ["React", "Node.js", "MongoDB", "Python"],
        status: "Shortlisted",
        resumeUrl: "#",
        profileCompletion: 85
    },
    {
        id: 2,
        name: "Priya Desai",
        rollNumber: "IT2020-012",
        department: "Information Tech",
        cgpa: 9.1,
        skills: ["Java", "Spring Boot", "SQL"],
        status: "Selected",
        resumeUrl: "#",
        profileCompletion: 95
    },
    {
        id: 3,
        name: "Arjun Reddy",
        rollNumber: "EC2020-088",
        department: "Electronics",
        cgpa: 7.8,
        skills: ["C++", "VHDL", "Python"],
        status: "Applied",
        resumeUrl: "#",
        profileCompletion: 70
    }
];

export const MOCK_COMPANIES = [
    {
        id: 1,
        name: "TechNova Solutions",
        role: "Frontend Developer",
        package: "12 LPA",
        eligibility: "CGPA > 8.0",
        driveDate: "2024-03-15",
        logoUrl: "https://ui-avatars.com/api/?name=TechNova&background=4F46E5&color=fff"
    },
    {
        id: 2,
        name: "DataDynamix",
        role: "Data Analyst",
        package: "9 LPA",
        eligibility: "CGPA > 7.5",
        driveDate: "2024-03-20",
        logoUrl: "https://ui-avatars.com/api/?name=DataDynamix&background=10B981&color=fff"
    },
    {
        id: 3,
        name: "CloudPeak Systems",
        role: "Backend Engineer",
        package: "15 LPA",
        eligibility: "CGPA > 8.5",
        driveDate: "2024-04-05",
        logoUrl: "https://ui-avatars.com/api/?name=CloudPeak&background=F59E0B&color=fff"
    }
];

export const MOCK_NOTIFICATIONS = [
    { id: 1, text: "CloudPeak Systems added a new drive for Backend Engineer.", type: "info", date: "2 hrs ago" },
    { id: 2, text: "You have been shortlisted for TechNova Solutions!", type: "success", date: "1 day ago" },
    { id: 3, text: "Interview reminder for DataDynamix tomorrow at 10 AM.", type: "warning", date: "2 days ago" }
];

export const STUDENT_ANALYTICS = {
    totalApplied: 12,
    shortlisted: 4,
    interview: 2,
    selected: 1,
    placementProbability: 75,
    skillMatch: 82
};

export const HEAD_ANALYTICS = {
    totalStudents: 450,
    placedStudents: 280,
    companiesVisited: 45,
    averagePackage: "8.5 LPA"
};

export const DEPT_PLACEMENT_DATA = [
    { name: 'CS', placed: 120, unplaced: 30 },
    { name: 'IT', placed: 90, unplaced: 25 },
    { name: 'EC', placed: 50, unplaced: 40 },
    { name: 'Mech', placed: 20, unplaced: 75 }
];

export const MONTHLY_TREND_DATA = [
    { name: 'Jan', drives: 4, hired: 25 },
    { name: 'Feb', drives: 6, hired: 45 },
    { name: 'Mar', drives: 12, hired: 80 },
    { name: 'Apr', drives: 8, hired: 50 },
    { name: 'May', drives: 5, hired: 30 }
];

export const COMPANY_HIRING_DATA = [
    { name: 'TechNova', offers: 45 },
    { name: 'DataDynamix', offers: 28 },
    { name: 'CloudPeak', offers: 35 },
    { name: 'InnovateX', offers: 20 },
    { name: 'NextGen', offers: 15 }
];

export const COMPETITION_STATS = [
    { skill: 'React/Node', students: 150, demand: 200 },
    { skill: 'Java/Spring', students: 120, demand: 180 },
    { skill: 'Python/DS', students: 90, demand: 150 },
    { skill: 'C++/Core', students: 60, demand: 50 },
    { skill: 'UI/UX', students: 30, demand: 40 }
];
