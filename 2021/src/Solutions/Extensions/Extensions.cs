using System.Dynamic;
using System.Reflection;
using System.Runtime.CompilerServices;

namespace Solutions.Extensions;

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

public static class StringExtensions
{
    public static T ToEnum<T>(this string value, bool ignoreCase = true)
    {
        return (T) Enum.Parse(typeof (T), value, ignoreCase);
    }
}

public static class InputPrepareExtensions
{
    public static IEnumerable<string[]> ToPartsList(this string input)
    {
        return StringToPartsList(input);
    }

    private static IEnumerable<string[]> StringToPartsList(string input)
    {
        return input.Trim().Split('\n').Select(l => l.Trim().Split(' '));
    }

    public static IEnumerable<int> ToNumberList(this string input)
    {
        return StringToNumberList(input);
    }

    private static IEnumerable<int> StringToNumberList(string input)
    {
        return input.Trim().Split('\n').Select(e => int.Parse(e.Trim()));
    }
}



