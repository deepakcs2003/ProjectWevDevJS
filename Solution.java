import java.util.*;
class Solution {
    public int pivot(int[] nums) {
        int n = nums.length;
        int pt = nums[n - 1];
        int i = -1;

        for (int j = 0; j < n; j++) {
             System.out.print(nums[j]+" ");
            if (nums[j] <= pt) {
                i++;
                int temp = nums[j];
                nums[j] = nums[i];
                nums[i] = temp;
            }
        }

        // i++;
        // int temp = pt;
        // nums[n - 1] = nums[i];
        // nums[i] = temp;

        // System.out.println(nums[i]); // Corrected this line
        return i;
    }

    public void wiggleSort(int[] nums) {
        int idx = pivot(nums);
        System.out.println(Arrays.toString(nums));
        System.out.println(idx);
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] nums = {3, 4, 5, 2, 4, 5, 3, 5, 2, 1, 4, 5, 34, 6, 7, 8, 7, 6};
        solution.wiggleSort(nums);
    }
}
