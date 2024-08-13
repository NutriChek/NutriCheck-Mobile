import { ImageBackground, ScrollView, StatusBar, View } from 'react-native';
import tw from '@/lib/tailwind';
import Svg, {
  ClipPath,
  Defs,
  FeFlood,
  FeGaussianBlur,
  Filter,
  G,
  Path,
  Rect
} from 'react-native-svg';
import ReminderWidget from '@/components/reminder-widget';
import OngoingRecipeWidget from '@/components/ongoing-recipe-widget';

const image = require('@/assets/images/home-background.png');

export default function HomeScreen() {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <View style={tw`grow bg-[#2E2E2E]`}>
        <ImageBackground resizeMode='cover' source={image} style={tw`grow`}>
          <Svg
            preserveAspectRatio='none'
            style={tw`absolute left-0 top-0 bg-green-500`}
            height='100%'
            width='100%'
            viewBox='0 0 14 30.35'
          >
            <G clipPath='url(#clip0_633_79)'>
              <Rect
                width='14'
                height='30.3511'
                transform='translate(0 0.648926)'
                fill='#A639B0'
              />
              <G filter='url(#filter0_f_633_79)'>
                <Path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M2.70692 16.1217C5.30423 16.6937 8.83556 14.947 10.1855 17.8485C11.5383 20.7563 9.25638 24.798 8.43016 28.4233C7.62884 31.9392 7.92996 36.5368 5.5054 38.3836C3.08656 40.226 0.658615 37.4797 -1.5825 36.0497C-3.08841 35.0888 -3.96569 33.3472 -5.03377 31.659C-6.45643 29.4102 -8.77931 27.8866 -8.74643 24.7261C-8.70741 20.9759 -7.43158 16.4714 -4.85563 14.5362C-2.33709 12.6441 0.0920095 15.5459 2.70692 16.1217Z'
                  fill='#F3484B'
                />
              </G>
              <G filter='url(#filter1_f_633_79)'>
                <Path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M3.88787 -3.21802C5.5024 -3.16694 6.79831 -1.34849 7.99505 0.465352C9.27984 2.41265 10.6587 4.45437 10.8517 7.33672C11.0622 10.4802 10.5443 14.0448 9.0315 15.9421C7.6052 17.7309 5.66902 16.1899 3.88787 16.0706C2.2359 15.9599 0.454549 16.9576 -0.859748 15.2796C-2.28903 13.4547 -3.04885 10.3404 -2.95282 7.33672C-2.8606 4.45226 -1.64687 2.15877 -0.377648 0.200446C0.827143 -1.65847 2.24923 -3.26987 3.88787 -3.21802Z'
                  fill='#6A55B8'
                  fill-opacity='0.9'
                />
              </G>
              <G filter='url(#filter2_f_633_79)'>
                <Path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M10.712 -1.61929C12.678 -1.37903 14.4138 -0.214361 15.6891 1.44067C16.8556 2.95449 16.9731 4.93425 17.2677 6.88815C17.6603 9.49117 19.042 12.3303 17.6572 14.4897C16.1947 16.7703 13.2558 17.0026 10.712 17.111C8.03605 17.2251 4.73548 17.5104 3.20405 15.1058C1.70321 12.7492 3.95786 9.74837 4.20132 6.88815C4.40173 4.53371 3.09653 1.88397 4.48381 0.0712414C5.91164 -1.79448 8.50218 -1.88936 10.712 -1.61929Z'
                  fill='#3AC4FF'
                />
              </G>
              <G filter='url(#filter3_f_633_79)'>
                <Path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M17.8686 18.0578C19.1233 19.7334 18.683 22.2147 18.4112 24.5525C18.1514 26.7865 17.9274 29.0928 16.3659 30.9823C14.6654 33.0402 12.2155 35.0007 9.86574 34.8935C7.63087 34.7915 6.95612 32.2605 5.83999 30.502C5.02858 29.2235 4.13361 27.9415 4.38301 26.2552C4.62044 24.6497 6.13142 23.4756 7.09434 22.0204C8.61937 19.7156 9.06562 16.3239 11.562 15.4058C14.1198 14.4651 16.4738 16.195 17.8686 18.0578Z'
                  fill='#F8D85A'
                />
              </G>
            </G>
            <Defs>
              <Filter
                id='filter0_f_633_79'
                x='-16.7466'
                y='5.90381'
                width='35.3516'
                height='41.0952'
                filterUnits='userSpaceOnUse'
                color-interpolation-filters='sRGB'
              >
                <FeFlood flood-opacity='0' result='BackgroundImageFix' />
                <FeGaussianBlur
                  stdDeviation='14'
                  result='effect1_foregroundBlur_633_79'
                />
              </Filter>
              <Filter
                id='filter1_f_633_79'
                x='-10.9609'
                y='-11.2192'
                width='29.8574'
                height='36.0205'
                filterUnits='userSpaceOnUse'
                color-interpolation-filters='sRGB'
              >
                <FeFlood flood-opacity='0' result='BackgroundImageFix' />
                <FeGaussianBlur
                  stdDeviation='14'
                  result='effect1_foregroundBlur_633_79'
                />
              </Filter>
              <Filter
                id='filter2_f_633_79'
                x='-5.30762'
                y='-9.73145'
                width='31.5674'
                height='34.916'
                filterUnits='userSpaceOnUse'
                color-interpolation-filters='sRGB'
              >
                <FeFlood flood-opacity='0' result='BackgroundImageFix' />
                <FeGaussianBlur
                  stdDeviation='14'
                  result='effect1_foregroundBlur_633_79'
                />
              </Filter>
              <Filter
                id='filter3_f_633_79'
                x='-3.65967'
                y='7.14111'
                width='30.3726'
                height='35.7563'
                filterUnits='userSpaceOnUse'
                color-interpolation-filters='sRGB'
              >
                <FeFlood flood-opacity='0' result='BackgroundImageFix' />
                <FeGaussianBlur
                  stdDeviation='14'
                  result='effect1_foregroundBlur_633_79'
                />
              </Filter>
              <ClipPath id='clip0_633_79'>
                <Rect
                  width='14'
                  height='30.3511'
                  fill='white'
                  transform='translate(0 0.648926)'
                />
              </ClipPath>
            </Defs>
          </Svg>
          <ScrollView style={tw`px-4`} contentContainerStyle={tw`pb-30 pt-32`}>
            <View style={tw`gap-4`}>
              {/*<ReminderWidget />*/}
              {/*<LargegoalWidget />*/}
              {/*<View style={tw`flex-row justify-between gap-4`}>*/}
              {/*  <LargeFeaturedRecipeWidget />*/}
              {/*</View>*/}
              {/*<AskAIWidget cards={['ceva', 'altceva']} />*/}
              {/*<OngoingRecipeWidget />*/}
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </>
  );
}
