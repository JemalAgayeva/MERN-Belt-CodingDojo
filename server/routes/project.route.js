
const ProjectController = require('../controllers/project.controller');
// const Exam = require('../models/project.model');

module.exports = app => {
    app.get("/api/pets/all", ProjectController.findAllProjects);
    app.post("/api/pets/create", ProjectController.createOneProject);
    app.get("/api/pets/:projectId", ProjectController.findAProject);
    app.put("/api/pets/update/:projectId", ProjectController.updateAProject);
    app.delete("/api/pets/delete/:projectId", ProjectController.deleteAProject);
    // app.get("/api/pets/random", ProjectController.randomProject);
}