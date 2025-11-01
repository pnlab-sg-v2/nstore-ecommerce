import Button from '@components/ui/button';
import { Form } from '@components/ui/forms/form';
import Input from '@components/ui/forms/input';
import TextArea from '@components/ui/forms/text-area';
import { useTranslation } from 'next-i18next';
import { SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
type ContactFormProps = {
  name: string;
  email: string;
  subject: string;
  description: string;
};
interface Props {
  onSubmit: SubmitHandler<ContactFormProps>;
  loading: boolean;
}
const contactFormSchema = yup.object().shape({
  name: yup.string().required('error-name-required'),
  email: yup
    .string()
    .email('error-email-format')
    .required('error-email-required'),
  subject: yup.string().required('error-subject-required'),
  description: yup.string().required('error-description-required'),
});
const ContactForm = ({ onSubmit, loading }: Props) => {
  const { t } = useTranslation('common');

  return (
    <Form<ContactFormProps>
      onSubmit={onSubmit}
      validationSchema={contactFormSchema}
    >
      {({ register, formState: { errors } }) => (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input
              label={t('text-name')}
              {...register('name')}
              variant="outline"
              error={errors.name?.message ? t(errors.name.message as string) : ''}
            />
            <Input
              label={t('text-email')}
              {...register('email')}
              type="email"
              variant="outline"
              error={errors.email?.message ? t(errors.email.message as string) : ''}
            />
          </div>
          <Input
            label={t('text-subject')}
            {...register('subject')}
            variant="outline"
            className="my-6"
            error={errors.subject?.message ? t(errors.subject.message as string) : ''}
          />
          <TextArea
            label={t('text-description')}
            {...register('description')}
            variant="outline"
            className="my-6"
            error={errors.description?.message ? t(errors.description.message as string) : ''}
          />

          <Button loading={loading} disabled={loading}>
            {t('text-submit')}
          </Button>
        </>
      )}
    </Form>
  );
};

export default ContactForm;
