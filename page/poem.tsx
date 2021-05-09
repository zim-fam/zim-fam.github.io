import * as React from 'react';
import { View } from 'react-native';
import { Header } from '../src/header';
import { Button, Divider, Paragraph, TextInput, Title } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

type tag = '' | 'sweet' | 'funny';
const tags: tag[] = ['', 'sweet', 'funny'];

interface tagged_word {
    tag: tag;
    word: string;
}

type substitutions = tagged_word[][];

function only_tags(words: substitutions, ... tags: tag[]) {
    return words.map(x => x.filter(y => tags.includes(y.tag)));
}

function random_between(lo: number, hi: number) {
    return Math.floor(Math.random() * (hi - lo) ) + lo;
}

function random_element<T>(x: T[]) {
    return x[random_between(0, x.length)];
}

function random_words(words: substitutions) {
    return words.map(x => random_element(x).word);
}

function is_tag(t: string): t is tag {
    return tags.includes(t as tag);
}

interface poem_props {
    fillins: string[];
    subject: string;
}

function Poem({ fillins, subject }: poem_props) {

    return (
        <View>
            <Title>
                An ode to my {subject}
            </Title>

            <Paragraph>
                To my {fillins[0]} {subject}.
            </Paragraph>

            <Paragraph>
                I know I've {fillins[1]} be {fillins[2]}.
            </Paragraph>

            <Paragraph>
                I know I've {fillins[3]} be {fillins[4]}.
            </Paragraph>

            <Paragraph>
                All cause I have you by my side.
            </Paragraph>

            <Paragraph>
                To my {fillins[5]} {subject}.
            </Paragraph>

            <Paragraph>
                I look back to my {fillins[6]} youth.
            </Paragraph>

            <Paragraph>
                All the {fillins[7]} hours
            </Paragraph>

            <Paragraph>
                You {fillins[8]} to me.
            </Paragraph>

            <Paragraph>
                For which I'm {fillins[9]} {fillins[10]} for.
            </Paragraph>

            <Paragraph>
                Thank you! I say for making me, me.
            </Paragraph>

            <Paragraph>
                To my {fillins[11]} {subject}.
            </Paragraph>

            <Paragraph>
                You act as my {fillins[12]} in life.
            </Paragraph>

            <Paragraph>
                This is the {fillins[13]} I can do show,
            </Paragraph>

            <Paragraph>
                you that truth. From your dear, Matthew.
            </Paragraph>
        </View>
    );
}

interface poem_config_props {
    tags: tag[];
    on_generate?: (s: string, t: tag) => void;
}

function Poem_Config({ tags, on_generate }: poem_config_props) {

    const [tag, set_tag] = React.useState('');
    const [subject, set_subject] = React.useState('mother');

    return (
        <View>
            <TextInput
                label='subject'
                placeholder='mother'
                value={subject}
                onChangeText={x => set_subject(x)}
            />
            <TextInput
                label='Tag'
                placeholder={`Tags: ${tags.join(', ')}`}
                value={tag}
                onChangeText={x => set_tag(x)}
            />
            <Button mode='contained' onPress={() => {
                if (is_tag(tag)) {
                    on_generate?.(subject, tag);
                }
            }}>
                Generate!
            </Button>   
        </View>
    );
}

function tw(word: string, tag: tag): tagged_word {
    return { word, tag };
}

const allowed_words: substitutions = [
    [tw('sweetest', ''), tw('sweetest', 'sweet'), tw('lovely', 'sweet'), tw('nice', 'sweet'), tw('kind', 'sweet'), tw('mean', 'funny'), tw('stinky', 'funny')],
    [tw('never', ''), tw('never', 'sweet'), tw('always', 'funny')],
    [tw('alone', ''), tw('alone', 'sweet'), tw('scared', 'sweet'), tw('mad', 'funny')],
    [tw('never', ''), tw('never', 'sweet'), tw('always', 'funny')],
    [tw('afraid', ''), tw('afraid', 'sweet'), tw('shocked', 'sweet'), tw('sad', 'funny')],
    [tw('sweetest', ''), tw('sweetest', 'sweet'), tw('lovely', 'sweet'), tw('nice', 'sweet'), tw('kind', 'sweet'), tw('mean', 'funny'), tw('stinky', 'funny')],
    [tw('playful', ''), tw('playful', 'sweet'), tw('fun', 'sweet'), tw('silly', 'funny')],
    [tw('thankless', ''), tw('exhausting', 'sweet'), tw('thankless', 'sweet'), tw('silly', 'funny')],
    [tw('devoted', ''), tw('devoted', 'sweet'), tw('slaved', 'funny')],
    [tw('externally', ''), tw('externally', 'sweet'), tw('really', 'sweet'), tw('kinda', 'funny')],
    [tw('grateful', ''), tw('grateful', 'sweet'), tw('happy', 'sweet'), tw('grateful', 'funny'), tw('upset', 'funny')],
    [tw('sweetest', ''), tw('sweetest', 'sweet'), tw('lovely', 'sweet'), tw('nice', 'sweet'), tw('kind', 'sweet'), tw('mean', 'funny'), tw('stinky', 'funny')],
    [tw('anchor', ''), tw('anchor', 'sweet'), tw('pain', 'funny')],
    [tw('least', ''), tw('least', 'sweet'), tw('most', 'funny')],
];

export function PoemPage() {

    const [words, set_words] = React.useState<string[]>(random_words(only_tags(allowed_words, '')));
    const [subject, set_subject] = React.useState('mother');

    const update_poem = (subject: string, tag: tag) => {

        console.log(subject);

        set_subject(subject);
        set_words(random_words(only_tags(allowed_words, tag)));
    }

    return (
        <Header
            title='Poem'
        >
            <Poem_Config
                tags={tags}
                on_generate={update_poem}
            />
            <Divider style={{ marginVertical: 10 }}/>
            <Poem
                fillins={words}
                subject={subject}
            />
        </Header>
    );
}