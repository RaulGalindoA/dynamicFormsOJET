/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your application specific code will go here
 */
define([
  "ojs/ojcontext",
  "ojs/ojresponsiveutils",
  "ojs/ojresponsiveknockoututils",
  "knockout",
  "ojs/ojknockout",
  "ojs/ojbootstrap",
  "ojs/ojinputtext",
  "ojs/ojlabel",
  "ojs/ojbutton",
  "ojs/ojformlayout",
  "ojs/ojarraydataprovider",
  "ojs/ojarraytreedataprovider",
  "ojs/ojinputnumber",
  "ojs/ojcheckboxset",
  "ojs/ojselectcombobox",
  "ojs/ojmessaging",
  "ojs/ojconverterutils-i18n",
  "ojs/ojdatetimepicker",
  "ojs/ojswitch",
], function (
  Context,
  ResponsiveUtils,
  ResponsiveKnockoutUtils,
  ko,
  ojbootstrap_1,
  ArrayDataProvider,
  ArrayTreeDataProvider
) {
  function ControllerViewModel() {
    // Media queries for repsonsive layouts
    const smQuery = ResponsiveUtils.getFrameworkQuery(
      ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY
    );
    this.smScreen = ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

    this.value = ko.observable("aes");
    this.rawValue = ko.observable("eas");

    self = this;

    self.formTemplate = [
      {
        id: "name",
        name: "Name",
        typeInput: "inputText",
        type: "text",
        required: true,
        style: "",
        placeholder: "",
        class: "",
        value: "",
      },
      {
        id: "age",
        name: "Age",
        typeInput: "inputNumber",
        type: "number",
        required: true,
        style: "",
        placeholder: "",
        class: "",
        value: null,
      },
      {
        id: "check",
        name: "check",
        typeInput: "check",
        type: "",
        required: true,
        style: "",
        placeholder: "",
        class: "",
        options: [
          { name: "option1", value: "val1" },
          { name: "option2", value: "val2" },
          { name: "option3", value: "val3" },
        ],
        value: null,
      },
      {
        id: "select",
        name: "select",
        typeInput: "select",
        type: "",
        required: true,
        style: "",
        placeholder: "",
        class: "",
        options: [
          { name: "combooption1", value: "1" },
          { name: "combooption2", value: "2" },
          { name: "combooption3", value: "3" },
        ],
        value: null,
      },
      {
        id: "selectmany",
        name: "selectmany",
        typeInput: "selectmany",
        type: "",
        required: true,
        style: "",
        placeholder: "",
        class: "",
        options: [
          { name: "combomanyoption1", value: "1" },
          { name: "combomanyoption2", value: "2" },
          { name: "combomanyoption3", value: "3" },
        ],
        value: [],
      },
      {
        id: "date",
        name: "date",
        typeInput: "date",
        type: "date",
        required: true,
        style: "",
        placeholder: "",
        class: "",
        value: null,
      },
      {
        id: "switch",
        name: "switch",
        typeInput: "switch",
        type: "switch",
        required: true,
        style: "",
        placeholder: "",
        class: "",
        value: null,
      },

      // {
      //   id: "email",
      //   name: "Email",
      //   typeInput: "inputText",
      //   type: "email",
      //   required: true,
      //   style: "",
      //   placeholder: "",
      //   class: "",
      //   value: "",
      // },
      // {
      //   id: "password",
      //   name: "password",
      //   typeInput: "inputNumber",
      //   type: "password",
      //   required: true,
      //   style: "",
      //   placeholder: "",
      //   class: "",
      //   value: null,
      // },
    ];

    for (let i = 0; i < self.formTemplate.length; i++) {
      const element = self.formTemplate[i];
      console.log(element);

      switch (self.formTemplate[i].typeInput) {
        case "inputNumber":
          self.formTemplate[i].value = ko.observable(
            self.formTemplate[i].value
          );
          break;
        case "inputText":
          self.formTemplate[i].value = ko.observable(
            self.formTemplate[i].value
          );
          break;
        case "check":
          self.formTemplate[i].value = ko.observableArray(
            self.formTemplate[i].value
          );
          break;
        case "select":
          self.formTemplate[i].value = ko.observable(
            self.formTemplate[i].value
          );
          break;
        case "selectmany":
          self.formTemplate[i].value = ko.observableArray(
            self.formTemplate[i].value
          );
          break;
        case "date":
          self.formTemplate[i].value = ko.observable(
            self.formTemplate[i].value
          );
          break;
        case "switch":
          self.formTemplate[i].value = ko.observable(
            self.formTemplate[i].value
          );
          break;
      }

      // if (self.formTemplate[i].typeInput == "inputNumber") {
      // } else if (self.formTemplate[i].typeInput == "inputText") {
      //   self.formTemplate[i].value = ko.observable(null);
      // } else if (self.formTemplate[i].typeInput == "check") {
      //   self.formTemplate[i].value = ko.observableArray(null);
      // }
    }

    console.log(this.formTemplate);

    self.submitForm = function (event) {
      console.log("click");
      console.log(self.formTemplate);
      let values = [];
      for (let i = 0; i < self.formTemplate.length; i++) {
        const element = self.formTemplate[i];
        values.push(element.value());
      }
      console.log(values);
    };

    // Header
    // Application Name used in Branding Area
    this.appName = ko.observable("App Name");
    // User Info used in Global Navigation area
    this.userLogin = ko.observable("john.hancock@oracle.com");

    // Footer
    this.footerLinks = [
      {
        name: "About Oracle",
        linkId: "aboutOracle",
        linkTarget: "http://www.oracle.com/us/corporate/index.html#menu-about",
      },
      {
        name: "Contact Us",
        id: "contactUs",
        linkTarget: "http://www.oracle.com/us/corporate/contact/index.html",
      },
      {
        name: "Legal Notices",
        id: "legalNotices",
        linkTarget: "http://www.oracle.com/us/legal/index.html",
      },
      {
        name: "Terms Of Use",
        id: "termsOfUse",
        linkTarget: "http://www.oracle.com/us/legal/terms/index.html",
      },
      {
        name: "Your Privacy Rights",
        id: "yourPrivacyRights",
        linkTarget: "http://www.oracle.com/us/legal/privacy/index.html",
      },
    ];
  }

  // release the application bootstrap busy state
  Context.getPageContext().getBusyContext().applicationBootstrapComplete();

  return new ControllerViewModel();
});
