import { getAssessments } from "@/actions/interview";
import StatsCards from "./_components/stats-cards";
import PerformanceChart from "./_components/performance-chart";
import QuizList from "./_components/quiz-list";

export default async function InterviewPrepPage() {
  const assessments = await getAssessments();

  return (
    <div>
    <div className="flex items-center justify-between mb-5">
            <h1 className="text-5xl md:text-6xl  bg-clip-text text-transparent font-bold pb-6 bg-gradient-to-b from-gray-700 via-gray-200 to-gray-700 mt-2">Interview Preparation</h1>
          </div>
      <div className="space-y-6">
        <StatsCards assessments={assessments} />
        <PerformanceChart assessments={assessments} />
        <QuizList assessments={assessments} />
      </div>
    </div>
  );
}