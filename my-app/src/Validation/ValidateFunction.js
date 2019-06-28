import ValidObject from './ValidObject'
import Validatejs from 'validate.js'

function validate (fieldName, value) {
  // validate.js validates your values as an object
  // e.g. var form = {email: 'email@example.com'}
  // Line 8-9 creates an object based on thr field name and field value
  var formValues = {}
  formValues[fieldName] = value
  // Line 18-19 creates an temporary form with the validation fields
  // e.g. var formFields = {
  //                         email: {
  //                           presence: {
  //                             message: 'Email is blank'
  //                           }
  //                         }
  var formFields = {}
  formFields[fieldName] = ValidObject[fieldName]
  // The formValues and validated against the formFields
  // the variable result hold the error massage of the
  const result = Validatejs(formValues, formFields)
  // If there is an error message, return it!
  if (result) {
    return result[fieldName][0]
  }
  return null
}

export default validate
