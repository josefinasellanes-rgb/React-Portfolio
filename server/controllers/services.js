import ServicesModel from "../models/services.js";

// Create CRUD operations for Services

// Get all services
export const getAllServices = async (req, res) => {
    try {
        const services = await ServicesModel.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get a Services by ID
export const getServicesById = async (req, res) => {
    try {
        const services = await ServicesModel.findById(req.params.id);
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Create a new Services
export const createServices = async (req, res) => {
    try {
        const newServices = new ServicesModel(req.body);
        const savedServices = await newServices.save();
        res.status(201).json(savedServices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update a Services by ID
export const updateServicesById = async (req, res) => {
    try {
        const updatedServices = await ServicesModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedServices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete a Services by ID
export const deleteServicesById = async (req, res) => {
    try {
        const deletedServices = await ServicesModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Services has been deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete all Services
export const deleteAllServices = async (req, res) => {
    try {
        const deletedServices = await ServicesModel.deleteMany();
        res.status(200).json({ message: "All services have been deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}