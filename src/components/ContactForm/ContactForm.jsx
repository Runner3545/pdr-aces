"use client";

import Image from "next/image";
import styles from "./ContactForm.module.css";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "@/schemas";
import { texts } from "@/constants";
import { Button, Input, Textarea, Label, Text, PhoneInput } from "@/ui";

export default function ContactForm({
  onSubmit: onSubmitProp,
  title,
  description,
  descriptionLabel = "",
  descriptionPlaceholder = "",
  buttonText = "",
  defaultPhoneCountry = "US",
  showLogo = false,
}) {
  const t = texts.contact;

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
    mode: "onTouched",
    defaultValues: { name: "", phone: "", description: "" },
  });

  const onSubmit = async (data) => {
    if (typeof onSubmitProp === "function") {
      await onSubmitProp(data);
    } else {
      console.log("Form submitted:", data);
    }
    reset();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.courseHeader}>
        {showLogo && (
          <div>
            <Image
              src="/pdr-course-logo.jpg"
              alt="PDR Course Logo"
              width={100}
              height={100}
              className={styles.logo}
              priority
            />
          </div>
        )}

        <Text as="h2" weight="bold" className={styles.wrapper__title}>
          {title || t.title}
        </Text>
      </div>
      <div className={styles.wrapper__description}>
        {description || (
          <Text as="p" color="secondary">
            {t.description}
          </Text>
        )}
      </div>

      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <fieldset className={styles.fieldset}>
          <div className={styles.field}>
            <Label htmlFor="name" required>
              {t.nameLabel}
            </Label>
            <Input
              id="name"
              placeholder={t.namePlaceholder}
              autoComplete="name"
              aria-invalid={!!errors.name || undefined}
              {...register("name")}
              error={errors.name?.message}
            />
            {errors.name && (
              <p className={styles.errorText} role="alert">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className={styles.field}>
            <Label htmlFor="phone" required>
              {t.phoneLabel}
            </Label>
            <Controller
              name="phone"
              control={control}
              render={({ field: { value, onChange, ref } }) => (
                <PhoneInput
                  id="phone"
                  value={value}
                  onChange={onChange}
                  defaultCountry="us"
                  placeholder={t.phonePlaceholder}
                  error={errors.phone?.message}
                  ref={ref}
                />
              )}
            />
            {errors.phone && (
              <p className={styles.errorText} role="alert">
                {errors.phone.message}
              </p>
            )}
          </div>
        </fieldset>

        <div className={styles.field}>
          <Label htmlFor="description">
            {descriptionLabel || t.descriptionLabel}
          </Label>
          <Textarea
            id="description"
            placeholder={descriptionPlaceholder || t.descriptionPlaceholder}
            rows={5}
            {...register("description")}
            className={styles.textarea}
          />
          {errors.description && (
            <p className={styles.errorText} role="alert">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className={styles.actions}>
          <Button
            type="submit"
            disabled={isSubmitting}
            className={styles.actions__submit}
          >
            {isSubmitting ? t.buttonSubmitting : buttonText || t.buttonText}
          </Button>
          {isSubmitSuccessful && (
            <span className={styles.successText} role="status">
              {t.successText}
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
