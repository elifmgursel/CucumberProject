$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Automation/CucumberCourse/features/ScaneraioOutlineExamples.feature");
formatter.feature({
  "name": "Final Bill Calculation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Customer Bill Amount Calculation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ScenarioOutlineExample"
    }
  ]
});
formatter.step({
  "name": "I have a customer",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters initial bill amount as \u003cInitialBillAmount\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Sales Tax Rate is \u003cTaxRate\u003e Percent",
  "keyword": "And "
});
formatter.step({
  "name": "final bill amount calculate is \u003cCalculatedBillAmount\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "InitialBillAmount",
        "TaxRate",
        "CalculatedBillAmount"
      ]
    },
    {
      "cells": [
        "100",
        "10",
        "110"
      ]
    },
    {
      "cells": [
        "200",
        "8",
        "216"
      ]
    },
    {
      "cells": [
        "100",
        "1.55",
        "101.55"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Customer Bill Amount Calculation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ScenarioOutlineExample"
    }
  ]
});
formatter.step({
  "name": "I have a customer",
  "keyword": "Given "
});
formatter.match({
  "location": "ScenarioOutlineSteps.i_have_a_customer()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class StepDefinitions.ScenarioOutlineSteps\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:45)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:122)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:64)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:131)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\r\n\t... 33 more\r\nCaused by: java.lang.Error: Unresolved compilation problems: \n\tSyntax error, insert \"... VariableDeclaratorId\" to complete FormalParameterList\n\tSyntax error, insert \"... VariableDeclaratorId\" to complete FormalParameter\n\tThe method CalculateBillForCustomer(int, double) is undefined for the type String\n\tThe method CalculateBillForCustomer(int, double) is undefined for the type String\n\r\n\tat StepDefinitions.ScenarioOutlineSteps.\u003cinit\u003e(ScenarioOutlineSteps.java:13)\r\n\t... 39 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters initial bill amount as 100",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutlineSteps.user_enters_initial_bill_amount_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Sales Tax Rate is 10 Percent",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutlineSteps.sales_Tax_Rate_is_Percent(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "final bill amount calculate is 110",
  "keyword": "Then "
});
formatter.match({
  "location": "ScenarioOutlineSteps.final_bill_amount_calculate_is(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Customer Bill Amount Calculation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ScenarioOutlineExample"
    }
  ]
});
formatter.step({
  "name": "I have a customer",
  "keyword": "Given "
});
formatter.match({
  "location": "ScenarioOutlineSteps.i_have_a_customer()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class StepDefinitions.ScenarioOutlineSteps\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:45)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:122)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:64)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:131)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\r\n\t... 33 more\r\nCaused by: java.lang.Error: Unresolved compilation problems: \n\tSyntax error, insert \"... VariableDeclaratorId\" to complete FormalParameterList\n\tSyntax error, insert \"... VariableDeclaratorId\" to complete FormalParameter\n\tThe method CalculateBillForCustomer(int, double) is undefined for the type String\n\tThe method CalculateBillForCustomer(int, double) is undefined for the type String\n\r\n\tat StepDefinitions.ScenarioOutlineSteps.\u003cinit\u003e(ScenarioOutlineSteps.java:13)\r\n\t... 39 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters initial bill amount as 200",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutlineSteps.user_enters_initial_bill_amount_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Sales Tax Rate is 8 Percent",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutlineSteps.sales_Tax_Rate_is_Percent(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "final bill amount calculate is 216",
  "keyword": "Then "
});
formatter.match({
  "location": "ScenarioOutlineSteps.final_bill_amount_calculate_is(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Customer Bill Amount Calculation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ScenarioOutlineExample"
    }
  ]
});
formatter.step({
  "name": "I have a customer",
  "keyword": "Given "
});
formatter.match({
  "location": "ScenarioOutlineSteps.i_have_a_customer()"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class StepDefinitions.ScenarioOutlineSteps\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:45)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:122)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:64)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:131)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\r\n\t... 33 more\r\nCaused by: java.lang.Error: Unresolved compilation problems: \n\tSyntax error, insert \"... VariableDeclaratorId\" to complete FormalParameterList\n\tSyntax error, insert \"... VariableDeclaratorId\" to complete FormalParameter\n\tThe method CalculateBillForCustomer(int, double) is undefined for the type String\n\tThe method CalculateBillForCustomer(int, double) is undefined for the type String\n\r\n\tat StepDefinitions.ScenarioOutlineSteps.\u003cinit\u003e(ScenarioOutlineSteps.java:13)\r\n\t... 39 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters initial bill amount as 100",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutlineSteps.user_enters_initial_bill_amount_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Sales Tax Rate is 1.55 Percent",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutlineSteps.sales_Tax_Rate_is_Percent(Double)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "final bill amount calculate is 101.55",
  "keyword": "Then "
});
formatter.match({
  "location": "ScenarioOutlineSteps.final_bill_amount_calculate_is(Double)"
});
formatter.result({
  "status": "skipped"
});
});