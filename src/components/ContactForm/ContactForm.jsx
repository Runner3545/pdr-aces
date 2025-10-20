"use client";

import styles from "./ContactForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "@/schemas";
import { texts } from "@/constants";
import { Button, Input, Textarea, Label, Text } from "@/ui";

export default function ContactForm({ onSubmit: onSubmitProp }) {
  const t = texts.contact;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
    mode: "onTouched",
    defaultValues: { name: "", email: "", description: "" },
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
      <Text
        as="h2"
        weight="bold"
        animate="words"
        className={styles.wrapper__title}
      >
        {t.title}
      </Text>
      <Text as="p" color="secondary" className={styles.wrapper__description}>
        {t.description}
      </Text>

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
            <Label htmlFor="email" required>
              {t.emailLabel}
            </Label>
            <Input
              id="email"
              type="email"
              placeholder={t.emailPlaceholder}
              autoComplete="email"
              aria-invalid={!!errors.email || undefined}
              {...register("email")}
              error={errors.email?.message}
            />
            {errors.email && (
              <p className={styles.errorText} role="alert">
                {errors.email.message}
              </p>
            )}
          </div>
        </fieldset>

        <div className={styles.field}>
          <Label htmlFor="description">{t.descriptionLabel}</Label>
          <Textarea
            id="description"
            placeholder={t.descriptionPlaceholder}
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
            {isSubmitting ? t.buttonSubmitting : t.buttonText}
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
