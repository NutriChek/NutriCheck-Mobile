import SelectController from './select-controller';

export default function YesNoController({
  control,
  name
}: {
  control: any;
  name: string;
}) {
  return (
    <SelectController
      control={control}
      name={name}
      data={[
        { key: 'yes', value: true, label: 'Yes' },
        { key: 'no', value: false, label: 'No' }
      ]}
      defaultLabel='No'
    />
  );
}
