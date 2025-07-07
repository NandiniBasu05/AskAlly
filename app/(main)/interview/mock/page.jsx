import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Quiz from '../_components/quiz'

const MockInterviewPage = () => {
  return (
    <div className="container mx-auto space-y-4 py-6">
      <div className="flex flex-col space-y-2 mx-2">
        <Link href={"/interview"}>
        <Button variant="link" className="gap-2 pl-0 mt-2">
          <ArrowLeft className="h-4 w-4"/>
          Back to Interview Preparation
          </Button>
          </Link>
          <div>
            <h1 className="text-5xl md:text-6xl  bg-clip-text text-transparent font-bold pb-6 bg-gradient-to-b from-gray-700 via-gray-200 to-gray-700"> Mock Interview</h1>
            <p className="text-mutd-foreground">
              Test your knowledge with industry-specific questions
            </p>
          </div>
      </div>

      <Quiz/>
    </div>
  )
}

export default MockInterviewPage
