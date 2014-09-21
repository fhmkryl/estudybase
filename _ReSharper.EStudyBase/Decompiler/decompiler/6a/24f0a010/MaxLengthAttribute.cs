// Type: System.ComponentModel.DataAnnotations.MaxLengthAttribute
// Assembly: System.ComponentModel.DataAnnotations, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35
// Assembly location: C:\Windows\Microsoft.NET\Framework\v4.0.30319\System.ComponentModel.DataAnnotations.dll

using System;
using System.ComponentModel.DataAnnotations.Resources;
using System.Globalization;
using System.Runtime;

namespace System.ComponentModel.DataAnnotations
{
  [AttributeUsage(AttributeTargets.Property | AttributeTargets.Field | AttributeTargets.Parameter, AllowMultiple = false)]
  public class MaxLengthAttribute : ValidationAttribute
  {
    private const int MaxAllowableLength = -1;

    public int Length { [TargetedPatchingOptOut("Performance critical to inline this type of method across NGen image boundaries")] get; private set; }

    static string DefaultErrorMessageString
    {
      private get
      {
        return DataAnnotationsResources.MaxLengthAttribute_ValidationError;
      }
    }

    public MaxLengthAttribute(int length)
      : base((Func<string>) (() => MaxLengthAttribute.DefaultErrorMessageString))
    {
      this.Length = length;
    }

    public MaxLengthAttribute()
      : base((Func<string>) (() => MaxLengthAttribute.DefaultErrorMessageString))
    {
      this.Length = -1;
    }

    public override bool IsValid(object value)
    {
      this.EnsureLegalLengths();
      if (value == null)
        return true;
      string str = value as string;
      int num = str == null ? ((Array) value).Length : str.Length;
      if (-1 != this.Length)
        return num <= this.Length;
      else
        return true;
    }

    public override string FormatErrorMessage(string name)
    {
      return string.Format((IFormatProvider) CultureInfo.CurrentCulture, this.ErrorMessageString, new object[2]
      {
        (object) name,
        (object) this.Length
      });
    }

    private void EnsureLegalLengths()
    {
      if (this.Length == 0 || this.Length < -1)
        throw new InvalidOperationException(string.Format((IFormatProvider) CultureInfo.CurrentCulture, DataAnnotationsResources.MaxLengthAttribute_InvalidMaxLength, new object[0]));
    }
  }
}
