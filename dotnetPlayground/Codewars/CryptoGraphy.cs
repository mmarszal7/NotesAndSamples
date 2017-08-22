using System.Linq;

namespace Codewars
{

    /* 
     * Enrypt - Getting every even sign in a string. Then method is getting every odd sign in a string.
     *          At the end it is gluing second part with first one. (You can enctypt string n times)
     * Decrypt - Reverse Encrypt
     */
    class CryptoGraphy
    {
        public static string Encrypt(string text, int n)
        {
            if (n <= 0 || string.IsNullOrEmpty(text)) return text;
            string secondChar, firstChar;

            firstChar = new string(Enumerable.Range(0, text.Length / 2).Select(i => text[2 * i]).ToArray());
            secondChar = new string(Enumerable.Range(0, text.Length / 2).Select(i => text[(2 * i) + 1]).ToArray());
            if (text.Length % 2 != 0) firstChar += text[text.Length - 1];
            //secondChar = new string(text.Where((x, i) => i % 2 == 0).ToArray);

            return Encrypt(secondChar + firstChar, n - 1);
        }

        public static string Decrypt(string encryptedText, int n)
        {
            if (n <= 0 || string.IsNullOrEmpty(encryptedText)) return encryptedText;
            char[] text = new char[encryptedText.Length];

            for (int i = 0; i < encryptedText.Length; i += 2)
            {

                text[i] = encryptedText[text.Length / 2 + ((i / 2))];
                if (i + 1 < text.Length) text[i + 1] = encryptedText[(i / 2)];

            }

            encryptedText = new string(text);
            return Decrypt(encryptedText, n - 1);
        }
    }
}
