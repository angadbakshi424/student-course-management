export const fetchStudents = async () => {
    try {
        const response = await fetch("./students.json");

        if (!response.ok) {
            throw new Error("Failed to fetch students.");
        }

        return await response.json();

    } catch (error) {
        throw error;
    }
};