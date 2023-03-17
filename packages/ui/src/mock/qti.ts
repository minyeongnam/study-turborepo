export const choiceMock = {
  identifier: "QTI3multiplechoice2",
  timeDependent: false,
  qtiResponseDeclaration: {
    identifier: "RESPONSE",
    cardinality: "multiple",
    baseType: "identifier",
    qtiCorrectResponse: {
      qtiValues: [
        {
          baseType: "String",
          text: "H",
        },
        {
          baseType: "String",
          text: "O",
        },
      ],
    },
  },
  qtiOutcomeDeclaration: {
    identifier: "SCORE",
    cardinality: "single",
    baseType: "float",
  },
  qtiItemBody: {
    qtiChoiceInteraction: {
      responseIdentifier: "RESPONSE",
      minChoices: "1",
      maxChoices: "6",
      qtiPrompt: "Which of the following elements are used to form water?",
      qtiSimpleChoice: [
        {
          identifier: "H",
          text: "Hydrogen",
        },
        {
          identifier: "He",
          text: "Helium",
        },
        {
          identifier: "C",
          text: "Carbon",
        },
        {
          identifier: "O",
          text: "Oxygen",
        },
        {
          identifier: "N",
          text: "Nitrogen",
        },
        {
          identifier: "Cl",
          text: "Chlorine",
        },
      ],
    },
  },
};

export const inlineChoiceMock = {
  qtiItemBody: {
    question:
      "Identify the missing word in this famous quote from Shakespeare's Richard III.",
    contents:
      "<p>Now is the winter of our discontent <br/>Made glorious summer by this sun of <qti-inline-choice-interaction response-identifier='RESPONSE' shuffle='false'><qti-inline-choice identifier='G'>Gloucester</qti-inline-choice><qti-inline-choice identifier='L'>Lancaster</qti-inline-choice><qti-inline-choice identifier='Y'>York</qti-inline-choice></qti-inline-choice-interaction>;<br/>And all the clouds that lour'd upon our house <br/>In the deep bosom of the ocean buried.</p>",
  },
};

export const textEntryMock = {
  p: {
    qtiTextEntryInteraction: {
      class: "qtiInput-width-1",
      expectedLength: "15",
      responseIdentifier: "RESPONSE1",
    },
    text: "qtiInput-width-1 :",
  },
};

export const extendedTextMock = {
  qtiExtendedTextInteraction: {
    class: "qti-height-lines-3",
    format: "plain",
    responseIdentifier: "RESPONSE",
  },
};

export const hotTextMock = {
  qtiHottextInteraction: {
    class: "qti-input-control-hidden",
    maxChoices: "1",
    responseIdentifier: "RESPONSE",
    contents:
      "<p>Sponsors of the Olympic Games <qti-hottext identifier='A'>who bought</qti-hottext>advertising time on United States television <qti-hottext identifier='B'>includes</qti-hottext><qti-hottext identifier='C'>at least</qti-hottext> a dozen international firms <qti-hottext identifier='D'>whose</qti-hottext> names are familiar to American consumers. <qti-hottext identifier='E'>No error.</qti-hottext></p>",
  },
};
