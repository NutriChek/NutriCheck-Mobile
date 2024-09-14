import AppleHealthKit, {
  HealthKitPermissions,
  HealthValue
} from 'react-native-health';

export const androidRipple = {
  color: 'rgb(0, 0, 0, 1)',
  borderless: false,
  radius: 500
};

export function rgbaToHex(rgba: string): string {
  const [r, g, b, a] = rgba.match(/\d+.?\d*/g) ?? [0, 0, 0, 1];
  const alpha = Math.round((a as number) * 255)
    .toString(16)
    .padStart(2, '0');
  const red = parseInt(r as string)
    .toString(16)
    .padStart(2, '0');
  const green = parseInt(g as string)
    .toString(16)
    .padStart(2, '0');
  const blue = parseInt(b as string)
    .toString(16)
    .padStart(2, '0');
  return `#${red}${green}${blue}${alpha}`;
}

export function kebabToTitleCase(kebab: string): string {
  return kebab
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function pascalToTitleCase(pascal: string): string {
  return pascal
    .split(/(?=[A-Z])/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const permissions = {
  permissions: {
    read: [
      AppleHealthKit.Constants.Permissions.Steps,
      AppleHealthKit.Constants.Permissions.ActiveEnergyBurned,
      AppleHealthKit.Constants.Permissions.AppleExerciseTime
    ]
  }
} as HealthKitPermissions;

export function setHealthData({
  setSteps,
  setEnergy,
  setExercise
}: {
  setSteps: (steps: number) => void;
  setEnergy: (energy: number) => void;
  setExercise: (exercise: number) => void;
}) {
  AppleHealthKit.initHealthKit(permissions, (error: string) => {
    if (error) {
      console.log('[ERROR] Cannot grant permissions!');
    }

    const options = {
      startDate: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      ).toISOString(),
      endDate: new Date().toISOString()
    };

    AppleHealthKit.getStepCount(
      options,
      (err: string, results: HealthValue) => {
        if (err) {
          console.log('[ERROR] Cannot get step count!');
        }

        setSteps(results?.value ? results?.value : 0);
      }
    );

    AppleHealthKit.getActiveEnergyBurned(
      options,
      (err: string, results: HealthValue[]) => {
        if (err) {
          console.log('[ERROR] Cannot get active energy burned!');
        }

        const energy = results?.reduce((acc, cur) => acc + cur.value, 0);
        setEnergy(energy);
      }
    );

    AppleHealthKit.getAppleExerciseTime(
      options,
      (err: string, results: HealthValue[]) => {
        if (err) {
          console.log('[ERROR] Cannot get exercise time!');
        }

        const exercise = results[0]?.value;
        setExercise(exercise ? exercise / 60 : 0);
      }
    );
  });
}
