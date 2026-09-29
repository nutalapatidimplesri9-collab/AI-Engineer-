/**
 * Portfolio Data for Dimple Sri Nutalapati
 * 
 * All information is strictly curated to honestly reflect a 1st-semester B.Tech student
 * without exaggerated claims, fake certifications, or unverified work experience.
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  technology: string;
  category: string;
  githubUrl: string;
  codeSnippet: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; status?: string }[];
}

export interface HackathonPlaceholder {
  id: string;
  title: string;
  year: string;
  role: string;
  projectIdea: string;
  achievement: string;
  isPlaceholder: boolean;
  statusBadge: string;
}

export interface JourneyStep {
  step: number;
  stage: string;
  status: 'Completed' | 'Current Focus' | 'Next Step' | 'Future Horizon';
  summary: string;
  focusAreas: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Dimple Sri Nutalapati',
    navBrand: 'Dimple Sri',
    roleHeadline: 'Aspiring AI Engineer | Python Developer | B.Tech Student',
    bioSubtext:
      'Building my foundation in Python, web development, and Generative AI while turning ideas into practical projects.',
    heroBadge:
      'B.Tech 1st Semester Student • Python • Web Development • Generative AI',
    aboutParagraph:
      'I am a first-semester B.Tech student passionate about technology, problem solving, and artificial intelligence. I am currently building my foundations in Python, web development, and Generative AI. Through hands-on projects, hackathons, and ideathons, I am exploring how technology can be used to solve practical problems.',
    currentlyExploring: [
      'Python',
      'Web Development',
      'Generative AI',
      'Problem Solving',
      'AI Engineering',
    ],
    social: {
      linkedin: 'https://www.linkedin.com/in/dimple-sri-nutalapati-635755434',
      github: 'https://github.com/nutalapatidimplesri9-collab/dimple-sri-python',
    },
    contactHeading: "Let's Build and Learn Together",
    contactSubtext:
      "I'm always interested in learning, exploring ideas, and connecting with people who are passionate about technology and innovation.",
    footerCopyright: '© 2026 Dimple Sri Nutalapati. Built with curiosity and code.',
  },

  skills: [
    {
      title: 'Programming',
      description: 'Core logic building, syntax understanding, and procedural problem solving.',
      skills: [
        { name: 'Python', status: 'Core Language' },
      ],
    },
    {
      title: 'Web Development',
      description: 'Building accessible, clean web pages and styling user interfaces.',
      skills: [
        { name: 'HTML', status: 'Markup' },
        { name: 'CSS', status: 'Styling & Layout' },
        { name: 'JavaScript', status: 'Client Logic' },
        { name: 'Basic Web Development', status: 'Foundation' },
      ],
    },
    {
      title: 'AI',
      description: 'Exploring machine intelligence concepts and generative fundamentals.',
      skills: [
        { name: 'Generative AI', status: 'Beginner' },
        { name: 'AI Engineering', status: 'Exploring' },
      ],
    },
    {
      title: 'Development & Problem Solving',
      description: 'Analytical mindset, methodical debugging, and turning conceptual ideas into code.',
      skills: [
        { name: 'Logical Thinking' },
        { name: 'Problem Solving' },
        { name: 'Project Development' },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: 'voter-eligibility',
      title: 'Voter Eligibility Calculator',
      description:
        'A beginner-friendly Python project that determines whether a person meets the required age criteria for voting eligibility.',
      technology: 'Python',
      category: 'Python / Logic Building',
      githubUrl: 'https://github.com/nutalapatidimplesri9-collab/dimple-sri-python',
      highlights: [
        'Input validation for numeric age entries',
        'Conditional branching based on statutory age criteria (18+)',
        'Calculation of remaining years until eligible if underage',
      ],
      codeSnippet: `# Voter Eligibility Calculator
# Author: Dimple Sri Nutalapati

def check_voting_eligibility():
    print("--- Voter Eligibility Verification System ---")
    try:
        user_name = input("Enter applicant name: ").strip()
        age = int(input("Enter applicant age: "))
        
        if age < 0 or age > 120:
            print("Please enter a valid realistic age.")
            return

        VOTING_AGE_THRESHOLD = 18
        
        if age >= VOTING_AGE_THRESHOLD:
            print(f"Congratulations {user_name}! You are eligible to vote.")
            print("Remember to register with your local electoral authority.")
        else:
            years_left = VOTING_AGE_THRESHOLD - age
            print(f"Hello {user_name}, you are not eligible to vote yet.")
            print(f"You will be eligible in {years_left} year(s).")
            
    except ValueError:
        print("Invalid input! Please enter age as a whole number.")

if __name__ == "__main__":
    check_voting_eligibility()`,
    },
    {
      id: 'atm-management',
      title: 'ATM Management System',
      description:
        'A Python-based beginner project that simulates basic ATM operations and focuses on applying programming logic to a practical use case.',
      technology: 'Python',
      category: 'Python / Application Logic',
      githubUrl: 'https://github.com/nutalapatidimplesri9-collab/dimple-sri-python',
      highlights: [
        'Secure 4-digit PIN authentication loop',
        'Stateful transaction simulation: deposit, withdrawal, balance check',
        'Guards against overdraft and non-numeric inputs',
      ],
      codeSnippet: `# ATM Management System
# Author: Dimple Sri Nutalapati

class SimpleATM:
    def __init__(self, user_name="Student User", initial_balance=5000.0, pin="1234"):
        self.user_name = user_name
        self.balance = initial_balance
        self.pin = pin

    def authenticate(self):
        attempts = 3
        while attempts > 0:
            entered_pin = input("Enter 4-digit ATM PIN: ")
            if entered_pin == self.pin:
                return True
            attempts -= 1
            print(f"Incorrect PIN. Attempts remaining: {attempts}")
        return False

    def run(self):
        print(f"\\nWelcome to Python Virtual ATM, {self.user_name}!")
        if not self.authenticate():
            print("Card temporarily locked due to failed authentication.")
            return

        while True:
            print("\\n1. Check Balance | 2. Deposit | 3. Withdraw | 4. Exit")
            choice = input("Select option (1-4): ")

            if choice == '1':
                print(f"Current Balance: ₹{self.balance:,.2f}")
            elif choice == '2':
                amt = float(input("Enter deposit amount: ₹"))
                if amt > 0:
                    self.balance += amt
                    print(f"Deposited ₹{amt}. Updated Balance: ₹{self.balance:,.2f}")
                else:
                    print("Amount must be positive.")
            elif choice == '3':
                amt = float(input("Enter withdrawal amount: ₹"))
                if 0 < amt <= self.balance:
                    self.balance -= amt
                    print(f"Please collect cash. Updated Balance: ₹{self.balance:,.2f}")
                else:
                    print("Insufficient funds or invalid amount.")
            elif choice == '4':
                print("Thank you for using the ATM. Please take your card.")
                break

if __name__ == "__main__":
    atm = SimpleATM()
    atm.run()`,
    },
    {
      id: 'student-grade-calculator',
      title: 'Student Grade Calculator',
      description:
        'A Python project designed to calculate student grades based on marks and demonstrate the use of conditional logic and basic programming concepts.',
      technology: 'Python',
      category: 'Python / Education',
      githubUrl: 'https://github.com/nutalapatidimplesri9-collab/dimple-sri-python',
      highlights: [
        'Multi-subject input aggregation and percentage computation',
        'Standard grading ladder using clean conditional chaining',
        'Formatted tabular console report with Pass/Fail determination',
      ],
      codeSnippet: `# Student Grade Calculator
# Author: Dimple Sri Nutalapati

def calculate_student_grade():
    print("--- Student Grade & Performance Evaluator ---")
    student_name = input("Enter student name: ").strip()
    
    subjects = ["Mathematics", "Computer Science", "Physics", "Chemistry", "English"]
    marks = {}
    
    for subject in subjects:
        while True:
            try:
                score = float(input(f"Enter marks for {subject} (out of 100): "))
                if 0 <= score <= 100:
                    marks[subject] = score
                    break
                print("Marks must be between 0 and 100.")
            except ValueError:
                print("Please enter a valid numeric score.")

    total_marks = sum(marks.values())
    percentage = total_marks / len(subjects)

    # Determine Grade Ladder
    if percentage >= 90:
        grade = "A+ (Outstanding)"
    elif percentage >= 80:
        grade = "A (Excellent)"
    elif percentage >= 70:
        grade = "B (Good)"
    elif percentage >= 60:
        grade = "C (Satisfactory)"
    elif percentage >= 40:
        grade = "D (Pass)"
    else:
        grade = "F (Needs Improvement)"

    print(f"\\nReport Card: {student_name}")
    print(f"Total Marks: {total_marks} / {len(subjects) * 100}")
    print(f"Percentage: {percentage:.2f}%")
    print(f"Final Grade: {grade}")

if __name__ == "__main__":
    calculate_student_grade()`,
    },
  ] as Project[],

  hackathons: {
    intro:
      'I enjoy participating in hackathons and ideathons as opportunities to explore ideas, collaborate, think creatively, and learn through practical problem solving.',
    statement:
      'As a 1st-semester engineering student, hackathons and ideathons offer a collaborative sandbox to apply algorithmic foundations to real problems. Below is the structured register ready to log upcoming events as team submissions take shape.',
    placeholders: [
      {
        id: 'slot-1',
        title: 'Hackathon / Ideathon Registration Slot',
        year: '2026',
        role: 'Team Member / Logic & Python Prototyping',
        projectIdea: 'Practical Problem-Solving Prototype / Beginner AI Concept',
        achievement: 'To be recorded upon event conclusion',
        isPlaceholder: true,
        statusBadge: 'Planned Participation',
      },
      {
        id: 'slot-2',
        title: 'College / Inter-College Ideathon',
        year: '2026',
        role: 'Ideation & Presentation Contributor',
        projectIdea: 'Exploratory Generative AI & Utility Application for Campus Life',
        achievement: 'To be recorded upon event conclusion',
        isPlaceholder: true,
        statusBadge: 'Upcoming Engagement',
      },
    ] as HackathonPlaceholder[],
  },

  learningJourney: {
    heading: 'My Learning Journey',
    subtext:
      'This progression is active and ongoing. As my coursework progresses and new projects are completed, this roadmap evolves in step.',
    steps: [
      {
        step: 1,
        stage: 'B.Tech Student',
        status: 'Completed',
        summary: 'Enrolled in 1st Semester of B.Tech engineering coursework, establishing foundational mathematics, engineering thinking, and computing principles.',
        focusAreas: ['Engineering Mathematics', 'Basic Computing Principles', 'Problem-Solving Mindset'],
      },
      {
        step: 2,
        stage: 'Python Foundations',
        status: 'Current Focus',
        summary: 'Mastering core procedural syntax, loops, conditionals, functions, object-oriented concepts, and writing command-line utilities.',
        focusAreas: ['Syntax & Data Structures', 'Algorithmic Logic', 'Console Applications'],
      },
      {
        step: 3,
        stage: 'Web Development',
        status: 'Current Focus',
        summary: 'Building clean responsive interfaces with HTML, CSS, and JavaScript to share software tools and project interfaces effectively.',
        focusAreas: ['Semantic HTML5', 'Responsive CSS Layouts', 'Client-side Interactivity'],
      },
      {
        step: 4,
        stage: 'Generative AI',
        status: 'Next Step',
        summary: 'Studying foundational principles of large language models, prompt structuring, API interactions, and ethical AI applications.',
        focusAreas: ['Prompt Engineering Basics', 'Model Concepts', 'API Utilization'],
      },
      {
        step: 5,
        stage: 'AI Engineering',
        status: 'Future Horizon',
        summary: 'The long-term objective: designing and deploying robust intelligent systems that solve measurable real-world challenges.',
        focusAreas: ['End-to-end Solutions', 'Machine Learning Workflows', 'Applied AI Systems'],
      },
    ] as JourneyStep[],
  },
};
