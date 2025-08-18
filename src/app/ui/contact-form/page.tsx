import UiLayout from '@/components/ui-layout';
import ContactForm from '.';

export default function ContactFormPage() {
  return (
    <UiLayout
      title="Contact Form"
      description={
        <ul>
          <li>
            A11y: <code>htmlFor</code> (label) + <code>id</code> (input) - Click
            on the label will focus on the corresponding input.
          </li>
        </ul>
      }
      implementation={
        <ul>
          <li>
            · <code>name</code> attribute (input) - The key in the form data
          </li>
        </ul>
      }
    >
      <ContactForm />
    </UiLayout>
  );
}
