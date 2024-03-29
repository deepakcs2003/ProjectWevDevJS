import java.util.Arrays;

public class StringSorting {
    public static void main(String[] args) {
        // Sorting a string based on characters
        String inputString = "EOee";
        char[] charArray = inputString.toCharArray();
        Arrays.sort(charArray);

        // Converting the sorted char array back to a string
        String sortedString = new String(charArray);

        // Printing the sorted string
        System.out.println("Original string: " + inputString);
        System.out.println("Sorted string: " + sortedString);
    }
}