import { useState } from "react";

type PasswordLevel = { text: string; color: string };
const VERY_WEAK_PW = { text: "Very Weak", color: "bg-red-500" };
const WEAK_PW = { text: "Weak", color: "bg-orange-500" };
const MODERATE_PW = { text: "Moderate", color: "bg-yellow-500" };
const STRONG_PW = { text: "Strong", color: "bg-blue-500" };
const VERY_STRONG_PW = { text: "Very Strong", color: "bg-green-500" };

const hasLowerCaseLetter = (input: string): boolean => {
    return /[a-z]/.test(input);
};

const hasUpperCaseLetter = (input: string): boolean => {
    return /[A-Z]/.test(input);
};

const hasNumbers = (input: string): boolean => {
    return /[0-9]/.test(input);
};

const hasSpecialCharacter = (input: string): boolean => {
    return /\W/.test(input);
};

type CheckResponse = {
    errors: string[];
    level: PasswordLevel;
};

const checkErrors = (input: string): CheckResponse => {
    let score = 5;
    const scoreMap: { [key: number]: PasswordLevel } = {
        0: VERY_WEAK_PW,
        1: VERY_WEAK_PW,
        2: WEAK_PW,
        3: MODERATE_PW,
        4: STRONG_PW,
        5: VERY_STRONG_PW,
    };
    const errors: string[] = [];
    if (input.length < 8) {
        errors.push("The password must be at least 8 letters long.");
        score -= 1;
    }

    if (!hasUpperCaseLetter(input)) {
        errors.push("The password must contain uppercase letters.");
        score -= 1;
    }

    if (!hasLowerCaseLetter(input)) {
        errors.push("The password must contain lowercase letters.");
        score -= 1;
    }

    if (!hasNumbers(input)) {
        errors.push("The password must contain numbers.");
        score -= 1;
    }

    if (!hasSpecialCharacter(input)) {
        errors.push("The password must contain special carachters.");
        score -= 1;
    }

    return { errors, level: scoreMap[score] };
};

type UpdateFunction = (text: string) => void;

export default function usePassword(): [
    string[],
    PasswordLevel,
    UpdateFunction
] {
    const [errors, setErrors] = useState<string[]>([]);
    const [passwordLevel, setPasswordLevel] =
        useState<PasswordLevel>(VERY_WEAK_PW);

    const update = (text: string) => {
        const { errors, level } = checkErrors(text);
        setErrors(errors);
        setPasswordLevel(level);
    };

    return [errors, passwordLevel, update];
}
