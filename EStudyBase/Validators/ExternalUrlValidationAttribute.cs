using System.ComponentModel.DataAnnotations;
using EStudyBase.ViewModels;

namespace EStudyBase.Validators
{
    public class ExternalUrlValidationAttribute : ValidationAttribute
    {
        private readonly string _defaultErrorMessage;
        private readonly string _propertyNameToCompare;

        public ExternalUrlValidationAttribute(string message, string compareWith)
        {
            _propertyNameToCompare = compareWith;
            _defaultErrorMessage = message;
        }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var basePropertyInfo = validationContext.ObjectType.GetProperty(_propertyNameToCompare);
            var mediaFileTypeId = (int) basePropertyInfo.GetValue(validationContext.ObjectInstance, null);

            //...
            // Check external url if media file is an external one
            if (mediaFileTypeId == 1)
            {
                var externalUrl = (string) value;
                if (string.IsNullOrWhiteSpace(externalUrl))
                {
                    return new ValidationResult(_defaultErrorMessage);
                }
            }

            return null;
        }
    }
}