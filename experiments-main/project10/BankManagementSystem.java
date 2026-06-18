public class BankManagementSystem {
    public static void main(String[] args) {

        SavingsAccount sa = new SavingsAccount("SA101", "Rahul", 10000);
        CurrentAccount ca = new CurrentAccount("CA201", "Aman", 20000);

        sa.deposit(5000);
        ca.deposit(3000);

        System.out.println("----- Savings Account -----");
        sa.displayDetails();
        System.out.println("Interest = " + sa.calculateInterest());

        System.out.println("\n----- Current Account -----");
        ca.displayDetails();
        System.out.println("Interest = " + ca.calculateInterest());
    }
}