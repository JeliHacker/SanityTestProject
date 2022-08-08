import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Button, Pressable, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Divider from '../components/Divider.tsx';
import Errored from '../components/Error.tsx';
import Loading from '../components/Loading.tsx';
import { Word, WordUtils } from '../data/sampleData';
import { useTerms } from '../hooks/useTerms';
import { LoadingStatus, RootStackScreenProps } from '../types';
import { useWordContext } from '../WordContextProvider';

const DisplayScreen = ({ navigation }: RootStackScreenProps<'DisplayScreen'>) => {
  const { chosenWordId } = useWordContext();
  const { terms, status } = useTerms();

  const term = WordUtils.getTermById(terms, chosenWordId);

  useEffect(() => {
    navigation.setOptions({
      title: WordUtils.getTitle(term),
    });
  }, [term]);


  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          paddingBottom: 5,
          paddingHorizontal: 10,
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
          justifyContent: 'flex-end',
        }}
      >
        <Text>poop</Text>
      </View>
      <WordViewBody term={term} status={status} />
    </SafeAreaView>
  );
};

const components: PortableTextComponents = {
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator

    // Ex. 2: rendering a custom `link` annotation
    link: ({value, children}) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <Text>
          Poop
        </Text>
      )
    },
  },
}



const WordViewBody = ({
  term,
  status,
}: {
  term: Word;
  status: LoadingStatus;
}) => {
  if (status.loading) return <Loading />;
  if (status.errored) return <Errored />;

  //TODO: Investigate undefined term
  if (!term) return <Loading />;

  const { addBookmark } = useBookmarkContext();

  //console.log(term);
  
  return (
    <View>
      <Text style={{ fontSize: 30, marginBottom: 5, marginLeft: 5 }}>{term.term}</Text>
      <Text>{term.definition}</Text>
      <Text>{term.explanation[0].children[0].text}</Text>
      <Text>{term.acronym}</Text>
      <Text>{term._id}</Text>
      {/* <PortableText 
        value={term.explanation} 
        components={components}
      /> */}
      <Text>Port text no workie</Text>
      <Divider style={{ marginVertical: 10 }} />
      <Button
        title="Bookmark this term"
        onPress={() => addBookmark(term._id.toString())}
      />
    </View>
  );
};



// const DisplayScreen = () => {
//   return (
//     <View>
//       <Text>Display Screen!</Text>
//     </View>
//   )
// }

export default DisplayScreen;