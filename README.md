
---

### 1. **Visa**
   - **Regex Pattern**: `/^4[0-9]{12}(?:[0-9]{3})?$/`
   - **Explanation**:
     - `^4`: Visa cards always start with the digit `4`. The `^` ensures that the number starts with `4`.
     - `[0-9]{12}`: After the starting `4`, there must be exactly 12 digits. This is because Visa cards are typically 13 or 16 digits long, and the first digit is already accounted for.
     - `(?:[0-9]{3})?$`: This part is optional (`?`) and matches exactly 3 more digits. This accounts for 16-digit Visa cards. The `(?: ... )` is a non-capturing group, meaning it groups the pattern without creating a backreference.
     - `$`: Ensures the string ends after the required digits.

   **Why this regex?**
   - Visa cards can be either 13 or 16 digits long, and they always start with `4`. This regex ensures the number starts with `4`, has the correct length, and only contains digits.

---

### 2. **Mastercard**
   - **Regex Pattern**: `/^5[1-5][0-9]{14}$/`
   - **Explanation**:
     - `^5`: Mastercard numbers always start with the digit `5`.
     - `[1-5]`: The second digit must be between `1` and `5`. This is because Mastercard numbers start with `51` to `55`.
     - `[0-9]{14}`: After the first two digits, there must be exactly 14 more digits, making the total length 16 digits.
     - `$`: Ensures the string ends after the 16 digits.

   **Why this regex?**
   - Mastercard numbers are always 16 digits long and start with `51` to `55`. This regex ensures the number starts with the correct prefix and has the correct length.

---

### 3. **American Express**
   - **Regex Pattern**: `/^3[47][0-9]{13}$/`
   - **Explanation**:
     - `^3`: American Express cards always start with the digit `3`.
     - `[47]`: The second digit must be either `4` or `7`. This is because American Express cards start with `34` or `37`.
     - `[0-9]{13}`: After the first two digits, there must be exactly 13 more digits, making the total length 15 digits.
     - `$`: Ensures the string ends after the 15 digits.

   **Why this regex?**
   - American Express cards are always 15 digits long and start with `34` or `37`. This regex ensures the number starts with the correct prefix and has the correct length.

---

### 4. **Discover**
   - **Regex Pattern**: `/^6(?:011|5[0-9]{2})[0-9]{12}$/`
   - **Explanation**:
     - `^6`: Discover cards always start with the digit `6`.
     - `(?:011|5[0-9]{2})`: This is a non-capturing group that matches either:
       - `011`: Discover cards can start with `6011`.
       - `5[0-9]{2}`: Or they can start with `65` followed by any two digits (e.g., `6500`, `6512`, etc.).
     - `[0-9]{12}`: After the prefix, there must be exactly 12 more digits, making the total length 16 digits.
     - `$`: Ensures the string ends after the 16 digits.

   **Why this regex?**
   - Discover cards are always 16 digits long and can start with `6011` or `65` followed by any two digits. This regex ensures the number starts with the correct prefix and has the correct length.

---

### General Structure of the Regex Patterns
1. **Start of the string (`^`)**:
   - Ensures the pattern matches from the beginning of the string. This prevents invalid prefixes or extra characters at the start.

2. **Card-specific prefixes**:
   - Each card type has a specific starting digit or sequence (e.g., `4` for Visa, `51-55` for Mastercard, `34` or `37` for American Express, `6011` or `65` for Discover). These are explicitly defined in the regex.

3. **Length validation**:
   - The `[0-9]{X}` part ensures the correct number of digits follows the prefix. For example:
     - Visa: 12 or 15 digits after the starting `4`.
     - Mastercard: 14 digits after the starting `51-55`.
     - American Express: 13 digits after the starting `34` or `37`.
     - Discover: 12 digits after the starting `6011` or `65XX`.

4. **End of the string (`$`)**:
   - Ensures the pattern matches until the end of the string. This prevents extra characters or digits at the end.

5. **Non-capturing groups (`(?: ... )`)**:
   - Used to group parts of the regex without creating a backreference. This improves performance and avoids unnecessary capturing.

---

### Why Use Regex?
- **Pattern Matching**: Regex is ideal for validating patterns in strings, such as credit card numbers, which follow specific rules for prefixes and lengths.
- **Efficiency**: Regex is fast and concise for validating structured data like card numbers.
- **Flexibility**: Regex can handle optional parts (e.g., 13 or 16 digits for Visa) and specific ranges (e.g., `51-55` for Mastercard).

---

### Example Breakdown
#### Visa: `4111111111111111`
- Starts with `4` → matches `^4`.
- Has 15 more digits → matches `[0-9]{12}(?:[0-9]{3})?`.
- Total length is 16 digits → valid.

#### Mastercard: `5105105105105100`
- Starts with `51` → matches `^5[1-5]`.
- Has 14 more digits → matches `[0-9]{14}`.
- Total length is 16 digits → valid.

#### American Express: `378282246310005`
- Starts with `37` → matches `^3[47]`.
- Has 13 more digits → matches `[0-9]{13}`.
- Total length is 15 digits → valid.

#### Discover: `6011111111111117`
- Starts with `6011` → matches `^6(?:011)`.
- Has 12 more digits → matches `[0-9]{12}`.
- Total length is 16 digits → valid.

---

### Conclusion
The regex patterns are designed to match the specific rules for each card type, including:
- The starting digits (prefix).
- The total length of the card number.
- The allowed characters (digits only).
