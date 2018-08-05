import calculateFieldChanges from '../EffectsCalculator'
import Queue from '../Queue'

import {
  MOCK_FIELD_CHANGE_EFFECTS,
  MOCK_STATE_DATA,
  MOCK_RESULT_DATA,
  MOCK_INFINITE_LOOP_INDUCED_FIELD_CHANGE_EFFECTS
} from './TestData'

test('Testing if correct field change effects are being dispatched.', () => {
  expect(
    calculateFieldChanges(MOCK_FIELD_CHANGE_EFFECTS)(MOCK_STATE_DATA)(
      'inspectedAt',
      ['fields', 'inspectedAt'],
      'Madrid'
    )
  ).toEqual(MOCK_RESULT_DATA)
})

test('Testing if the there are no field change effects given, only that field changes needs to be dispatched.', () => {
  expect(calculateFieldChanges({})(MOCK_STATE_DATA)('inspectedAt', ['fields', 'inspectedAt'], 'Madrid')).toEqual([
    {
      name: 'inspectedAt',
      path: ['fields', 'inspectedAt'],
      props: {
        value: 'Madrid'
      }
    }
  ])
})

test('Testing if the there are no field change effects for the field, only that field changes needs to be dispatched.', () => {
  expect(
    calculateFieldChanges({
      branch: [
        {
          name: 'claimType',
          path: ['fields', 'claimType'],
          props: (newValue, state) => ({
            value: newValue.toUpperCase(),
            editable: false,
            readable: true,
            required: false
          })
        }
      ]
    })(MOCK_STATE_DATA)('inspectedAt', ['fields', 'inspectedAt'], 'Madrid')
  ).toEqual([
    {
      name: 'inspectedAt',
      path: ['fields', 'inspectedAt'],
      props: {
        value: 'Madrid'
      }
    }
  ])
})

test('Testing if when an infinite loop inducing rules have been given, is the loop breaking and returning field changes calculated till then.', () => {
  expect(
    calculateFieldChanges(MOCK_INFINITE_LOOP_INDUCED_FIELD_CHANGE_EFFECTS)(MOCK_STATE_DATA)(
      'inspectedAt',
      ['fields', 'inspectedAt'],
      'Madrid'
    )
  ).toEqual(MOCK_RESULT_DATA)
})
