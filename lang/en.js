export default {
  title: "EN - App title",
  home: {
    // Options
  },
  // every page is a ojbect...
  validation: {
    email: 'Please enter a valid email address.',
    required: 'This is a required field.',
    alpha: 'Field accepts only character.',
    phoneNumber: 'Plase enter a valid mobile number.',
    validNric: 'Please enter a valid NRIC number.',
    minAmount: 'Invalid Amount.',
    maxLengthAmount: 'Invalid Amount.',
    number: 'Invalid number.',
    amount: 'Plase enter a valid amount.',
    isUnique: 'Receipt number is entered for a different item. Please enter a different receipt number.',
    minAge: 'You must be aged 21 years or above to participate.',
    maxLengthReceipt: 'Receipt Numbers must be 30 characters at maximum.',
  },
  redemptions: {
    headline: "FORTUNE FAVORS THOSE WHO REACHES FOR IT",
    description: "This is the instructions on how users can redeem there prize: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    button_text: "Redeem Now"
  },
  prizeRedemption: {
    headline: 'PRIZE REDEMPTION',
    journeyBar: {
      step1: 'Step 1',
      step2: 'Step 2',
      step3: 'Step 3',
    },

    step1: {
      subtitle: 'PERSONAL DETAILS',
      field1: {
        label: 'FULL NAME',
        placeholder: 'FULL NAME AS PER NRIC'
      },
      field2: {
        label: 'NRIC',
        placeholder: '091211-10-3514'
      },
      field3: {
        label: 'ADDRESS',
        placeholder: ''
      },
      field4: {
        label: 'EMAIL',
        placeholder: 'EXAMPLE@EMAIL.COM'
      },
      field5: {
        label: 'MOBILE NUMBER',
        placeholder: '+6012-3456789'
      },
      button_text: 'NEXT'
    },
    
    step2: {
      subtitle: 'PURCHASE DETAILS',
      description: 'Please enter your purchase details from this receipt to qualify for the GWP redemption.',
      field1: {
        label: 'DATE OF PURCHASE',
        placeholder: 'DD / MM / YYYY'
      },
      field2: {
        label: 'RECEIPT NUMBER',
        placeholder: 'XXXXXXXXXXXXXXXXX'
      },
      button_back_text: 'Back',
      button_text: 'NEXT',
    },
    
    step3: {
      subtitle: 'PURCHASED PRODUCTS',
      description: 'Please enter all Heineken products that you have purchased in this receipt to qualify for the GWP redemption.',
      item: 'ITEM #{number}',
      qty: 'QUANTITY',
      amount: 'PURCHASED AMOUNT',
      add: '+ ADD ANOTHER ITEM',
      button_back_text: 'Back',
      button_text: 'NEXT',
    },

  }
}