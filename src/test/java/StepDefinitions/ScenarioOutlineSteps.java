package StepDefinitions;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class ScenarioOutlineSteps {
	
		int InitialBillAmount;
	double TaxRate;
	private static void CalculateBillForCustomer() {
	
	}
	
	@Given("I have a customer")
	public void i_have_a_customer() {
	}

	@Given("user enters initial bill amount as {int}")
	public void user_enters_initial_bill_amount_as(Integer initialBillAmount) {
		this.InitialBillAmount = initialBillAmount;
		System.out.println("InitialBillAmount: " + initialBillAmount);
	}

	@Given("Sales Tax Rate is {int} Percent")
	public void sales_Tax_Rate_is_Percent(Integer taxRate) {
		this.TaxRate = taxRate;
		System.out.println("Tax Rate: " + taxRate);
	}

	@Then("final bill amount calculate is {int}")
	
	public void final_bill_amount_calculate_is(Integer expectedValue) {
		   double SystemCalcValue = BillCalculationHelper.CalculateBillForCustomer(this.InitialBillAmount, this.TaxRate);
		   System.out.println("Expected Value: " + expectedValue);
		   System.out.println("System Calculated Value: " + SystemCalcValue);
		   assertTrue(expectedValue == SystemCalcValue);

	}

	@Given("Sales Tax Rate is {double} Percent")
	public void sales_Tax_Rate_is_Percent(Double taxRate) {
		this.TaxRate = taxRate;
		System.out.println("Tax Rate: " + taxRate);

	}
	
	private void invokeWebPage() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Z004cf4h\\Desktop\\Elif_Education\\Drivers\\chromedriver_win32_100\\chromedriver.exe");
		
		ChromeDriver driver = new ChromeDriver();

	}

	@Then("final bill amount calculate is {double}")
	public void final_bill_amount_calculate_is(Double expectedValue) {
	   double SystemCalcValue = BillCalculationHelper.CalculateBillForCustomer(this.InitialBillAmount, this.TaxRate);
	   System.out.println("Expected Value: " + expectedValue);
	   System.out.println("System Calculated Value: " + SystemCalcValue);
	   assertTrue(expectedValue == SystemCalcValue);
	}

}
