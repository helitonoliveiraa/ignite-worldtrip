import { Text } from '@chakra-ui/react';

type TextInformationProps = {
  children: string;
};

export function TextInformation({
  children,
}: TextInformationProps): JSX.Element {
  return (
    <Text fontSize={['sm', '2xl']} textAlign="justify" maxWidth={600}>
      {children}
    </Text>
  );
}
