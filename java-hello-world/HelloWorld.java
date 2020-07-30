public class HelloWorld {

    public static void main(String[] args) throws Exception {
        for (int i = 1; i <= 100; i++) {
            System.out.println("Hello world! [" + i + "/100]");
            Thread.sleep(5000);
        }
    }
}

