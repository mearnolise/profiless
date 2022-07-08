import React from 'react'
import GradeComponent from '../components/GradeComponent'
import grade1_1 from '../image/grade/grade1-1.jpg'
import grade1_2 from '../image/grade/grade1-2.jpg'
import grade2_1 from '../image/grade/grade2-1.jpg'
import grade2_2 from '../image/grade/grade2-2.jpg'
import grade3_1 from '../image/grade/grade3-1.jpg'
import grade3_2 from '../image/grade/grade3-2.jpg'

function Grade() {
  return (
    <div className="grade-container">
      <GradeComponent title="HIGH SCHOOL 1" image={[grade1_1, grade1_2]} />
      <GradeComponent title="HIGH SCHOOL 2" image={[grade2_1, grade2_2]} />
      <GradeComponent title="UNIVERSITY" image={[grade3_1, grade3_2]} />
    </div>
  )
}
export default Grade
