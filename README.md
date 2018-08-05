# field-change-effects-calculator

**field-change-effects-calculator** is a utility that will calculate all field changes for changes to a certain field.

It does **multi level changes** at one shot. For instance if there is a rule saying if A changes B has to change and if B changes C has to change, all the calculations are done and returned by the utility function.

It also has **infinite loop mitigation** logic built into it so even if there were some misleading rules set, the algorithm will avoid such loops.

# Example

An REPL has been created and hosted to show the usage of this utility, check it out [here](https://repl.it/@RevanthKumar2/FieldChangesCalculator).

Also check out this article on [medium](https://medium.com/@revanth0212/maintaining-form-field-interactions-is-tough-how-to-make-it-easy-792e5eeb9e58)

# Usage

The npm module exposes a utility function that should be used to calculate the change effects.

    import fieldChangesCalculator from 'field-change-effects-calculator'

    or

    const fieldChangesCalculator = require('field-change-effects-calculator')

Signature:

    (rules: { fieldName: Array<FieldChangeEffectRuleType> }) => (state: Object) => (nameOfTheField: string, fieldPathInState: Array<string>, newValue: any): Array<FieldChangeObjectType>

The function when provided with rules, state object, field's name, path and new value, returns the changed state of the fields that have changed as an Array of objects of type `FieldChangeObjectType`.

    type  FieldChangeObjectType = {
        name: string,
        path: Array<string>,
        props: {
        prop: any
      }
    }

More about rules in the future sections.

# Why?

This is very useful when we are maintaining **large forms** where ther are many inter field dependencies.

All your actions do is call the calculator function, pass rules and information it needs, get back the changed fields data and do what ever you want (in case of redux, dispatch it).

Also since the module **does not relate itself to a certain state management tool like redux**, etc, you can use it with any state management choice of yours.

# Rules

**Rules are the most important part of the calculator. They decide the change effects.**

Rules object will have keys as field names and values are array field change configurations.

For instance if we have a rule saying `B's editability` has to change if `A's value` is changed to `World` from `Hello`. Here is how the rules object will look like:

    var RULES = {
      A: [
        {
          name: 'B',
          path: ['fields', 'B'],
          props: (ANewValue, state) => {
            editable: ANewValue === 'World' ? 'true' : 'false',
          }
        }
      ]
    }

If you want to write more complex rules like changing `A` changes `B` and `C` and changing `B` changes `D`, you can write it like this:

    var RULES = {
      A: [
        {
          name: 'B',
          path: ['fields', 'B'],
          props: (ANewValue, state) => ({
            editable: ANewValue === 'World' ? 'true' : 'false',
          })
        },
        {
          name: 'C',
          path: ['fields', 'C'],
          props: (ANewValue, state) => ({
            value: ANewValue.toLowerCase()
          })
        }
      ],
      B: [
        {
          name: 'D',
          path: ['fields', 'D'],
          props: () => ({
            value: BNewValue.toLowerCase() + '*',
            editable: true,
          })
        }
      ]
    }

Each rule has the following properties:

| Property Name | isRequired | Type                      | Description                                                               |
| ------------- | ---------- | ------------------------- | ------------------------------------------------------------------------- |
| name          | `true`     | `string`                  | Name of the field that will be used to uniquely identify the field.       |
| path          | `true`     | `Array<string>`           | Path of the field where it resides in the state.                          |
| props         | `true`     | `(newValue, state) => {}` | Function that will be used to calculate props/changed props of the field. |

# Wanna Contribute?

Any help is appreciated.

Clone the project and create your own branch to work on. Once done create a Pull Request.

Make sure to run tests and add more tests if you add a new feature or to replicate the bug that you are trying to fix.

    npm run test
