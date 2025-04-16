import * as enrollmentsDao from "./dao.js";
export default function EnrollmentRoutes(app) {
  app.post("/api/enrollments", async (req, res) => {
    const { userId, courseId } = req.body;
    const enrollment = await enrollmentsDao.enrollUserInCourse(userId, courseId);
    res.json(enrollment);
  });

  app.delete("/api/enrollments/:userId/:courseId", async (req, res) => {
    const { userId, courseId } = req.params;
    const status = await enrollmentsDao.unenrollUserFromCourse(userId, courseId);
    res.json(status);
  });

  app.get("/api/enrollments", async (req, res) => {
    const enrollments = await enrollmentsDao.findAllEnrollments().lean();
    res.send(enrollments);
  });
}
