import ContactModel from "../models/contact.js";

export const getAllContacts = async (req, res) => {
    try {
        const contacts = await ContactModel.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getContactById = async (req, res) => {
    try {
        const contact = await ContactModel.findById(req.params.id);
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createContact = async (req, res) => {
    try {
        const newContact = new ContactModel(req.body);
        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateContactById = async (req, res) => {
    try {
        const updatedContact = await ContactModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteContactById = async (req, res) => {
    try {
        const deletedContact = await ContactModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Contact has been deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteAllContacts = async (req, res) => {
    try {
        const deletedContacts = await ContactModel.deleteMany();
        res.status(200).json({ message: "All contacts have been deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}