using Solutions.Base;

namespace Solutions.Days;

public static class PairUpExtensions {
    public static IEnumerable<T[]> PairUp<T>(this IEnumerable<T> enumerable, int size)
    {
        return PairUpItems(enumerable, size);
    }

    private static IEnumerable<T[]> PairUpItems<T>(IEnumerable<T> enumerable, int size)
    {
        var queue = new Queue<T>(size);
        foreach (var item in enumerable)
        {
            if (queue.Count == size)
            {
                queue.Dequeue();
            }

            queue.Enqueue(item);
            if (queue.Count == size)
            {
                yield return queue.ToArray();
            }
        }
    }
}

public static class InputPrepareExtensions
{
    public static IEnumerable<int> ToNumberList(this string input)
    {
        return StringToNumberList(input);
    }

    private static IEnumerable<int> StringToNumberList(string input)
    {
        return input.Trim().Split('\n').Select(e => int.Parse(e.Trim()));
    }
}

public class Day01: IDay
{
    public int Part1(string input)
    {
        return input
            .ToNumberList()
            .PairUp(2)
            .Aggregate(0, (acc, pair) => pair[1] > pair[0] ? acc + 1 : acc);
    }

    public int Part2(string input)
    {
        return input.ToNumberList()
            .PairUp(3)
            .Select(pair => pair.Sum())
            .PairUp(2)
            .Aggregate(0, (acc, pair) => pair[1] > pair[0] ? acc + 1 : acc);
    }
}
