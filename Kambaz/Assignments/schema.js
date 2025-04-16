import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    name: String,
    availableDate: String,
    availableUntil: String,
    dueDate: String,
    points: String,
    course: { type: String, ref: "CourseModel" },
    assignmentGroup: String, 
    gradeDisplay: String, 
    submission: String,
    entry: {
      textEntry: Boolean,
      websiteURL: Boolean,
      mediaRecordings: Boolean,
      studentAnnotation: Boolean,
      fileUploads: Boolean
    }
  },
  { collection: "assignments" }
);
export default schema;