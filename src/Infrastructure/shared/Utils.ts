class Utils {
    /**
     * Converts a string to a boolean.
     * @param {string} value - The string to convert.
     * @returns {boolean} - The converted boolean value.
     */
    public toBoolean(value: string): boolean {
        return value.toLowerCase() === 'true';
    }

    public RandomString(length: number): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
        return result;
    }
}

export default new Utils();